import {
  Breadcrumbs,
  Button,
  Checkbox,
  Grid,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DataTable from "../Components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteApplication,
  showDegreeApplications,
  deleteApplicationMany,
} from "../../../Redux/Actions/degreeApplicationAction";
import { useNavigate } from "react-router-dom";
import CustomDialog from "../../ReusableComponents/CustomDialog";
import { Delete, Edit, ContentPasteSearch } from "@mui/icons-material";

const DegreeApplications = () => {
  const dispatch = useDispatch();
  const { degree_application_loading, show_degree_applications } = useSelector(
    (state) => state.degreeapplications
  );
  const navigate = useNavigate();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subtitle: "",
    color: "",
    text: "",
  });
  const [selected, setSelected] = useState([]);
  const [numSelected, setNumSelected] = useState(0);
  const [rowCount, setRowCount] = useState(0);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBar, setSearchBar] = useState({
    label: "Search By MISID",
    type: "number",
  });
  const [title, setTitle] = useState("Degree Application Data");
  const [refreshing, setRefreshing] = useState(false);

  const getDegreeApplications = () => {
    dispatch(showDegreeApplications(searchQuery));
  };

  useEffect(() => {
    getDegreeApplications();
  }, [searchQuery]);

  useEffect(() => {
    getDegreeApplications();
    setRefreshing(false);
  }, [refreshing === true]);

  const headData = [
    {
      id: "misid",
      label: "MISID",
    },
    {
      id: "enrollment",
      label: "Enrollment No.",
    },
    {
      id: "stdname",
      label: "Student Name",
    },
    {
      id: "fname",
      label: "Father Name",
    },
    {
      id: "email",
      label: "Email",
    },
    {
      id: "department",
      label: "Department",
    },
    {
      id: "program",
      label: "Program",
    },
    {
      id: "section",
      label: "Section",
    },
    {
      id: "shift",
      label: "Shift",
    },
    {
      id: "address",
      label: "Address",
    },
    {
      id: "phone",
      label: "Phone No.",
    },
    {
      id: "date",
      label: "Date",
    },
    {
      id: "status",
      label: "Status",
    },
    {
      id: "actions1",
      label: "Delete Application/Update Status",
    },
    {
      id: "actionsw",
      label: "Show Document",
    },
  ];

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setRowCount(show_degree_applications.length);
    setNumSelected(newSelected.length);
    setSelected(newSelected);
  };

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (e) => {
    let { value } = e.target;
    setSearchQuery(value);
  };
  return (
    <>
      <CustomDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <Grid container>
        <Typography variant="h4" flexGrow={1} mb={2}>
          Degree Applications
        </Typography>
        <Breadcrumbs separator=">">
          <Button onClick={() => navigate("/app/dashboard")}>Dashboard</Button>
          <Typography textTransform="uppercase">Degree Applications</Typography>
        </Breadcrumbs>
      </Grid>
      <DataTable
        tableHead={headData}
        data={show_degree_applications}
        selected={selected}
        setSelected={setSelected}
        numSelected={numSelected}
        setNumSelected={setNumSelected}
        rowCount={rowCount}
        setRowCount={setRowCount}
        order={order}
        orderBy={orderBy}
        handleRequestSort={handleRequestSort}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleSearch={handleSearch}
        setConfirmDialog={setConfirmDialog}
        dispatch={dispatch}
        setLoading={degree_application_loading}
        searchBar={searchBar}
        deleteMany={deleteApplicationMany}
        title={title}
        searchQuery={searchQuery}
        setRefreshing={setRefreshing}
      >
        {stableSort(show_degree_applications, getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((data, index) => {
            const isItemSelected = isSelected(data._id);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <TableRow
                key={data._id}
                hover
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    onClick={(event) => handleClick(event, data._id)}
                    inputProps={{
                      "aria-labelledby": labelId,
                    }}
                  />
                </TableCell>
                <TableCell>{data.misid}</TableCell>
                <TableCell>{data.enrollmentNo}</TableCell>
                <TableCell>{data.stdName}</TableCell>
                <TableCell>{data.fatherName}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.department}</TableCell>
                <TableCell>{data.program}</TableCell>
                <TableCell>{data.section}</TableCell>
                <TableCell>{data.shift}</TableCell>
                <TableCell>{data.address}</TableCell>
                <TableCell>{data.phoneNo}</TableCell>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.status}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: "Are You Sure!",
                        subtitle: `You want to delete ${data.stdName} Application`,
                        color: "error",
                        text: "Delete",
                        onConfirm: () => {
                          dispatch(deleteApplication(data._id, searchQuery));
                          setConfirmDialog({ isOpen: false });
                          setRefreshing(true);
                        },
                      });
                    }}
                  >
                    <Delete
                      sx={(theme) => ({ color: theme.palette.error.main })}
                    />
                  </IconButton>
                  <IconButton
                    onClick={() =>
                      navigate(`/update/update-status/${data._id}`)
                    }
                  >
                    <Edit
                      sx={(theme) => ({
                        color: theme.palette.secondary.main,
                      })}
                    />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => navigate(`/show/show-documents/${data._id}`)}
                  >
                    <ContentPasteSearch
                      sx={(theme) => ({
                        color: theme.palette.secondary.main,
                      })}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
      </DataTable>
    </>
  );
};

export default DegreeApplications;

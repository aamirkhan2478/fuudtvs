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
import { useNavigate } from "react-router-dom";
import { AddUser } from "../Components/AddDialogs";
import CustomDialog from "../../ReusableComponents/CustomDialog";
import { Delete, Edit } from "@mui/icons-material";
import {
  showUser,
  deleteUser,
  deleteUserMany,
} from "../../../Redux/Actions/userAction";

const ManageUser = () => {
  const dispatch = useDispatch();
  const { user_loading, show_users } = useSelector((state) => state.user);
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
    label: "Search By Username",
    type: "text",
  });
  const [title, setTitle] = useState("User Data");
  const [refreshing, setRefreshing] = useState(false);

  const getUsers = () => {
    dispatch(showUser(searchQuery));
  };

  useEffect(() => {
    getUsers();
  }, [searchQuery]);

  useEffect(() => {
    getUsers();
    setRefreshing(false);
  }, [refreshing === true]);

  const headData = [
    {
      id: "username",
      label: "Username",
    },
    {
      id: "name",
      label: "Name",
    },
    {
      id: "email",
      label: "Email",
    },
    {
      id: "cnic",
      label: "CNIC",
    },
    {
      id: "role",
      label: "Role",
    },
    {
      id: "actions",
      label: "Actions",
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
    setRowCount(show_users.length);
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
          Manage User
        </Typography>
        <Breadcrumbs separator=">">
          <Button onClick={() => navigate("/app/dashboard")}>Dashboard</Button>
          <Typography textTransform="uppercase">Manage User</Typography>
        </Breadcrumbs>
      </Grid>
      <AddUser searchQuery={searchQuery} />
      <DataTable
        tableHead={headData}
        data={show_users}
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
        setLoading={user_loading}
        searchBar={searchBar}
        deleteMany={deleteUserMany}
        title={title}
        searchQuery={searchQuery}
        setRefreshing={setRefreshing}
      >
        {stableSort(show_users, getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((data, index) => {
            const isItemSelected = isSelected(data._id);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <TableRow key={data._id} hover>
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
                <TableCell>{data.userid}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.cnic}</TableCell>
                <TableCell>{data.role}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => navigate(`/update/update-user/${data._id}`)}
                  >
                    <Edit
                      sx={(theme) => ({
                        color: theme.palette.secondary.main,
                      })}
                    />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: "Are You Sure!",
                        subtitle: `You want to delete ${data.name}`,
                        color: "error",
                        text: "Delete",
                        onConfirm: () => {
                          dispatch(deleteUser(data._id));
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
                </TableCell>
              </TableRow>
            );
          })}
      </DataTable>
    </>
  );
};

export default ManageUser;

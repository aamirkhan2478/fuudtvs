import {
  Breadcrumbs,
  Button,
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
import Preloader from "../../ReusableComponents/Preloader";
import {
  Edit,
  Upload,
  ContentPasteSearch,
  Search,
  Update,
} from "@mui/icons-material";
import {
  appliedPhysicsApplication,
  businessApplication,
  chemistryApplication,
  commerceApplication,
  csApplication,
  economicApplication,
  electricalApplication,
  englishApplication,
  examApplication,
  feeSectionApplication,
  inchargeCampusApplication,
  internationalApplication,
  islamiatApplication,
  lawApplication,
  libraryApplication,
  mathApplication,
  mechanicalApplication,
  physicsApplication,
  softwareApplication,
  urduApplication,
} from "../../../Redux/Actions/applicationAction";
const Applications = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBar, setSearchBar] = useState({
    label: "Search By MISID",
    type: "number",
  });
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { authLoading, user } = useSelector((state) => state.auth);
  const {
    application_loading,
    chemistry_applications,
    commerce_applications,
    law_applications,
    islamiat_applications,
    physics_applications,
    applied_physics_applications,
    cs_applications,
    business_applications,
    economics_applications,
    electrical_applications,
    english_applications,
    mechanical_applications,
    mathematics_applications,
    urdu_applications,
    software_applications,
    international_relations_applications,
    fee_section_applications,
    library_applications,
    incharge_campus_applications,
    examination_applications,
  } = useSelector((state) => state.applications);

  useEffect(() => {
    if (user.role === "Head Of Chemistry Department") {
      dispatch(chemistryApplication(searchQuery));
    }
    if (user.role === "Head Of Commerce Department") {
      dispatch(commerceApplication(searchQuery));
    }
    if (user.role === "Head Of Law Department") {
      dispatch(lawApplication(searchQuery));
    }
    if (user.role === "Incharge Campus") {
      dispatch(inchargeCampusApplication(searchQuery));
    }
    if (user.role === "Library") {
      dispatch(libraryApplication(searchQuery));
    }
    if (user.role === "Fee Section") {
      dispatch(feeSectionApplication(searchQuery));
    }
    if (user.role === "Head Of International Relations Department") {
      dispatch(internationalApplication(searchQuery));
    }
    if (user.role === "Head Of Software Engineering Department") {
      dispatch(softwareApplication(searchQuery));
    }
    if (user.role === "Head Of Urdu Department") {
      dispatch(urduApplication(searchQuery));
    }
    if (user.role === "Head Of Mathematics Department") {
      dispatch(mathApplication(searchQuery));
    }
    if (user.role === "Head Of Mechanical Engineering Department") {
      dispatch(mechanicalApplication(searchQuery));
    }
    if (user.role === "Head Of English Department") {
      dispatch(englishApplication(searchQuery));
    }
    if (user.role === "Head Of Electrical Engineering Department") {
      dispatch(electricalApplication(searchQuery));
    }
    if (user.role === "Head Of Economics Department") {
      dispatch(economicApplication(searchQuery));
    }
    if (user.role === "Head Of Business Department") {
      dispatch(businessApplication(searchQuery));
    }
    if (user.role === "Head Of Computer Science Department") {
      dispatch(csApplication(searchQuery));
    }
    if (user.role === "Head Of Applied Physics Department") {
      dispatch(appliedPhysicsApplication(searchQuery));
    }
    if (user.role === "Head Of Physics Department") {
      dispatch(physicsApplication(searchQuery));
    }
    if (user.role === "Head Of Islamiat Department") {
      dispatch(islamiatApplication(searchQuery));
    }
    if (user.role === "Examination Department") {
      dispatch(examApplication(searchQuery));
    }
  }, [user.role && searchQuery]);

  // useEffect(() => {
  //   dispatch(showDepartment(searchQuery));
  // }, [searchQuery]);

  const feeSectionHeadData = [
    {
      id: "misid",
      label: "MIS ID",
    },
    {
      id: "enrollmentNo",
      label: "Enrollment No.",
    },
    {
      id: "stdName",
      label: "Student Name",
    },
    {
      id: "fatherName",
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
      id: "session",
      label: "Session",
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
      id: "date",
      label: "Date",
    },
    {
      id: "upload chalan/documents",
      label: "Upload Chalan/Documents",
    },
    {
      id: "show paid chalan/update status",
      label: "Show Paid Chalan/Update Status",
    },
  ];

  const libraryHeadData = [
    {
      id: "misid",
      label: "MIS ID",
    },
    {
      id: "enrollmentNo",
      label: "Enrollment No.",
    },
    {
      id: "stdName",
      label: "Student Name",
    },
    {
      id: "fatherName",
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
      id: "session",
      label: "Session",
    },
    {
      id: "shift",
      label: "Shift",
    },
    {
      id: "date",
      label: "Date",
    },
    {
      id: "update status/documents",
      label: "Update Status/Documents",
    },
  ];

  const inchargeCampusHeadData = [
    {
      id: "misid",
      label: "MIS ID",
    },
    {
      id: "enrollmentNo",
      label: "Enrollment No.",
    },
    {
      id: "stdName",
      label: "Student Name",
    },
    {
      id: "fatherName",
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
      id: "session",
      label: "Session",
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
      id: "date",
      label: "Date",
    },
    {
      id: "update status/documents",
      label: "Update Status/Documents",
    },
  ];

  const examHeadData = [
    {
      id: "misid",
      label: "MIS ID",
    },
    {
      id: "enrollmentNo",
      label: "Enrollment No.",
    },
    {
      id: "stdName",
      label: "Student Name",
    },
    {
      id: "fatherName",
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
      id: "session",
      label: "Session",
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
      id: "date",
      label: "Date",
    },
    {
      id: "status",
      label: "Status",
    },
  ];

  const otherHeadData = [
    {
      id: "misid",
      label: "MIS ID",
    },
    {
      id: "enrollmentNo",
      label: "Enrollment No.",
    },
    {
      id: "stdName",
      label: "Student Name",
    },
    {
      id: "fatherName",
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
      id: "session",
      label: "Session",
    },
    {
      id: "shift",
      label: "Shift",
    },
    {
      id: "date",
      label: "Date",
    },
    {
      id: "update status/documents",
      label: "Update Status/Documents",
    },
  ];

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
      <Grid container>
        <Typography variant="h4" flexGrow={1} mb={2}>
          Applications
        </Typography>
        <Breadcrumbs separator=">">
          <Button onClick={() => navigate("/app/dashboard")}>Dashboard</Button>
          <Typography textTransform="uppercase">Applications</Typography>
        </Breadcrumbs>
      </Grid>
      {authLoading === true ? (
        <Preloader />
      ) : user.role === "Fee Section" ? (
        <DataTable
          tableHead={feeSectionHeadData}
          data={fee_section_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(fee_section_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.address}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() =>
                        navigate(`/update/upload-chalan/${data._id}`)
                      }
                    >
                      <Upload
                        sx={(theme) => ({
                          color: theme.palette.secondary.main,
                        })}
                      />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
                    >
                      <ContentPasteSearch
                        sx={(theme) => ({
                          color: theme.palette.secondary.main,
                        })}
                      />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-paid-chalan/${data._id}`)
                      }
                    >
                      <Search
                        sx={(theme) => ({
                          color: theme.palette.secondary.main,
                        })}
                      />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        navigate(`/update/update-status/${data._id}`)
                      }
                    >
                      <Update
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
      ) : user.role === "Library" ? (
        <DataTable
          tableHead={libraryHeadData}
          data={library_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(library_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      ) : user.role === "Incharge Campus" ? (
        <DataTable
          tableHead={inchargeCampusHeadData}
          data={incharge_campus_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(
            incharge_campus_applications,
            getComparator(order, orderBy)
          )
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.address}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      ) : user.role === "Examination Department" ? (
        <DataTable
          tableHead={examHeadData}
          data={examination_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(examination_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
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
                  <TableCell>{data.date}</TableCell>
                  <TableCell>{data.status}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      ) : user.role === "Admin" ? (
        (window.location.href = "/app/pagenotfound")
      ) : user.role === "Student" ? (
        (window.location.href = "/app/pagenotfound")
      ) : (
        user.role === "Head Of Computer Science Department" && (
          <DataTable
            tableHead={otherHeadData}
            data={cs_applications}
            order={order}
            orderBy={orderBy}
            handleRequestSort={handleRequestSort}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            handleSearch={handleSearch}
            dispatch={dispatch}
            setLoading={application_loading}
            searchBar={searchBar}
            title={title}
            searchQuery={searchQuery}
            HideCheckBox="none"
          >
            {stableSort(cs_applications, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data, index) => {
                return (
                  <TableRow key={data._id} hover>
                    <TableCell>{data.misid}</TableCell>
                    <TableCell>{data.enrollmentNo}</TableCell>
                    <TableCell>{data.stdName}</TableCell>
                    <TableCell>{data.fatherName}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.department}</TableCell>
                    <TableCell>{data.program}</TableCell>
                    <TableCell>{data.section}</TableCell>
                    <TableCell>{data.session}</TableCell>
                    <TableCell>{data.shift}</TableCell>
                    <TableCell>{data.date}</TableCell>
                    <TableCell>
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
                      <IconButton
                        onClick={() =>
                          navigate(`/show/show-documents/${data._id}`)
                        }
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
        )
      )}
      {user.role === "Head Of Urdu Department" && (
        <DataTable
          tableHead={otherHeadData}
          data={urdu_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(urdu_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      )}
      {user.role === "Head Of Islamiat Department" && (
        <DataTable
          tableHead={otherHeadData}
          data={islamiat_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(islamiat_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      )}
      {user.role === "Head Of Law Department" && (
        <DataTable
          tableHead={otherHeadData}
          data={law_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(law_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      )}
      {user.role === "Head Of Economics Department" && (
        <DataTable
          tableHead={otherHeadData}
          data={economics_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(economics_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      )}
      {user.role === "Head Of Business Department" && (
        <DataTable
          tableHead={otherHeadData}
          data={business_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(business_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      )}
      {user.role === "Head Of Commerce Department" && (
        <DataTable
          tableHead={otherHeadData}
          data={commerce_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(commerce_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      )}
      {user.role === "Head Of Applied Physics Department" && (
        <DataTable
          tableHead={otherHeadData}
          data={applied_physics_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(
            applied_physics_applications,
            getComparator(order, orderBy)
          )
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      )}
      {user.role === "Head Of Electrical Engineering Department" && (
        <DataTable
          tableHead={otherHeadData}
          data={electrical_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(electrical_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      )}
      {user.role === "Head Of Mathematics Department" && (
        <DataTable
          tableHead={otherHeadData}
          data={mathematics_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(mathematics_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      )}
      {user.role === "Head Of Software Engineering Department" && (
        <DataTable
          tableHead={otherHeadData}
          data={software_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(software_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      )}
      {user.role === "Head Of International Relations Department" && (
        <DataTable
          tableHead={otherHeadData}
          data={international_relations_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(
            international_relations_applications,
            getComparator(order, orderBy)
          )
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      )}
      {user.role === "Head Of English Department" && (
        <DataTable
          tableHead={otherHeadData}
          data={english_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(english_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      )}
      {user.role === "Head Of Physics Department" && (
        <DataTable
          tableHead={otherHeadData}
          data={physics_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(physics_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      )}
      {user.role === "Head Of Chemistry Department" && (
        <DataTable
          tableHead={otherHeadData}
          data={chemistry_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(chemistry_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      )}
      {user.role === "Head Of Mechanical Engineering Department" && (
        <DataTable
          tableHead={otherHeadData}
          data={mechanical_applications}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleSearch={handleSearch}
          dispatch={dispatch}
          setLoading={application_loading}
          searchBar={searchBar}
          title={title}
          searchQuery={searchQuery}
          HideCheckBox="none"
        >
          {stableSort(mechanical_applications, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => {
              return (
                <TableRow key={data._id} hover>
                  <TableCell>{data.misid}</TableCell>
                  <TableCell>{data.enrollmentNo}</TableCell>
                  <TableCell>{data.stdName}</TableCell>
                  <TableCell>{data.fatherName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.program}</TableCell>
                  <TableCell>{data.section}</TableCell>
                  <TableCell>{data.session}</TableCell>
                  <TableCell>{data.shift}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>
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
                    <IconButton
                      onClick={() =>
                        navigate(`/show/show-documents/${data._id}`)
                      }
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
      )}
    </>
  );
};

export default Applications;

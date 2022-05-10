import { Add, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Stack,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Form, Formik, Field } from "formik";
import { object, string, ref, number } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../../../Redux/Actions/studentAction";
import { addUser } from "../../../Redux/Actions/userAction";
import {
  addDepartment,
  showDepartment,
} from "../../../Redux/Actions/departmentAction";
import Toast from "../../ReusableComponents/Toast";
import { LoadingButton } from "@mui/lab";

export const AddStudent = ({ searchQuery }) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [visible, setVisible] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });
  const initialValues = {
    userid: "",
    name: "",
    email: "",
    cnic: "",
    password: "",
    cpassword: "",
    role: "",
  };
  const dispatch = useDispatch();
  const { student_loading } = useSelector((state) => state.student);

  const clickHandler = (values, formikHelpers) => {
    dispatch(addStudent(values, setNotify, formikHelpers, searchQuery));
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Toast notify={notify} setNotify={setNotify} />
      <Button
        onClick={handleClickOpen("paper")}
        variant="contained"
        sx={{ mb: 1, color: "white" }}
        startIcon={<Add />}
      >
        Add Student
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Add Student</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <Formik
            initialValues={initialValues}
            onSubmit={clickHandler}
            validationSchema={object({
              userid: number()
                .required("MIS ID is required!")
                .positive("Please enter only positive numbers!")
                .integer("Please enter only integers!"),
              name: string()
                .matches(
                  /^(?=.{3,20}$)(?![a-z])(?!.*[_.]{2})[a-zA-Z ]+(?<![_.])$/,
                  "Name should have at least 3 characters and should not any number!"
                )
                .required("Name is required!"),
              email: string()
                .required("Email is requird!")
                .email("Invalid Email!"),
              cnic: string()
                .required("CNIC is required!")
                .matches(/^[0-9+]{13}$/, "CNIC must be 13 characters"),
              password: string()
                .required("Password is required!")
                .matches(
                  /^(?=.*[0-9])(?=.*[a-zA-Z ])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&* ]{8,20}$/,
                  "Password must contain at least 8 characters, 1 number, 1 upper, 1 lowercase and 1 special character!"
                ),
              cpassword: string()
                .oneOf([ref("password"), null], "Password not match!")
                .required("Confirm Password is required!"),
              role: string().required("Role is required!"),
            })}
          >
            {({ errors, touched, isValid, dirty, values, setValues }) => (
              <Form>
                <Stack direction="column" spacing={1}>
                  <Field
                    as={TextField}
                    label="MIS ID"
                    name="userid"
                    variant="outlined"
                    type="number"
                    sx={{ width: { xs: 250, sm: 500 } }}
                    error={Boolean(errors.userid) && Boolean(touched.userid)}
                    helperText={Boolean(touched.userid) && errors.userid}
                  />
                  <Field
                    as={TextField}
                    label="Name"
                    name="name"
                    variant="outlined"
                    sx={{ width: { xs: 250, sm: 500 } }}
                    error={Boolean(errors.name) && Boolean(touched.name)}
                    helperText={Boolean(touched.name) && errors.name}
                  />
                  <Field
                    as={TextField}
                    label="Email"
                    name="email"
                    variant="outlined"
                    sx={{ width: { xs: 250, sm: 500 } }}
                    error={Boolean(errors.email) && Boolean(touched.email)}
                    helperText={Boolean(touched.email) && errors.email}
                  />
                  <Field
                    as={TextField}
                    label="CNIC"
                    name="cnic"
                    variant="outlined"
                    sx={{ width: { xs: 250, sm: 500 } }}
                    error={Boolean(errors.cnic) && Boolean(touched.cnic)}
                    helperText={Boolean(touched.cnic) && errors.cnic}
                  />
                  <FormControl
                    variant="outlined"
                    sx={{ width: { xs: 250, sm: 500 } }}
                    error={
                      Boolean(errors.password) && Boolean(touched.password)
                    }
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <Field
                      as={OutlinedInput}
                      type={visible ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setVisible(!visible)}
                            edge="end"
                          >
                            {visible ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      fullWidth
                      label="Password"
                      name="password"
                      error={
                        Boolean(errors.password) && Boolean(touched.password)
                      }
                    />
                    <FormHelperText
                      error={
                        Boolean(errors.password) && Boolean(touched.password)
                      }
                    >
                      {Boolean(touched.password) && errors.password}
                    </FormHelperText>
                  </FormControl>
                  <FormControl
                    variant="outlined"
                    sx={{ width: { xs: 250, sm: 500 } }}
                    error={
                      Boolean(errors.cpassword) && Boolean(touched.cpassword)
                    }
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <Field
                      as={OutlinedInput}
                      type={visible ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setVisible(!visible)}
                            edge="end"
                          >
                            {visible ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Confirm Password"
                      name="cpassword"
                      fullWidth
                      error={
                        Boolean(errors.cpassword) && Boolean(touched.cpassword)
                      }
                    />
                    <FormHelperText
                      error={
                        Boolean(errors.cpassword) && Boolean(touched.cpassword)
                      }
                    >
                      {Boolean(touched.cpassword) && errors.cpassword}
                    </FormHelperText>
                  </FormControl>
                  <FormControl
                    fullWidth
                    error={Boolean(errors.role) && Boolean(touched.role)}
                  >
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Field
                      as={Select}
                      label="Role"
                      name="role"
                      value={values.role}
                      onChange={(e) =>
                        setValues({ ...values, role: e.target.value })
                      }
                      error={Boolean(errors.role) && Boolean(touched.role)}
                    >
                      <MenuItem value="Student">Student</MenuItem>
                    </Field>
                    <FormHelperText
                      error={Boolean(errors.role) && Boolean(touched.role)}
                    >
                      {Boolean(touched.role) && errors.role}
                    </FormHelperText>
                  </FormControl>
                </Stack>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <LoadingButton
                    loading={student_loading}
                    loadingPosition="center"
                    disabled={!isValid || !dirty}
                    type="submit"
                  >
                    Add Student
                  </LoadingButton>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const AddUser = ({ searchQuery }) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [visible, setVisible] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });
  const initialValues = {
    userid: "",
    name: "",
    email: "",
    cnic: "",
    password: "",
    cpassword: "",
    role: "",
  };
  const dispatch = useDispatch();
  const { user_loading } = useSelector((state) => state.user);
  const { show_departments } = useSelector((state) => state.department);

  const clickHandler = (values, formikHelpers) => {
    dispatch(addUser(values, setNotify, formikHelpers, searchQuery));
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const getDepartments = () => {
    dispatch(showDepartment(searchQuery));
  };
  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <>
      <Toast notify={notify} setNotify={setNotify} />
      <Button
        onClick={handleClickOpen("paper")}
        variant="contained"
        sx={{ mb: 1, color: "white" }}
        startIcon={<Add />}
      >
        Add User
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Add User</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <Formik
            initialValues={initialValues}
            onSubmit={clickHandler}
            validationSchema={object({
              userid: string()
                .required("Username is required!")
                .matches(
                  /^(?=.{3,20}$)(?![_.0-9])(?!.*[_.]{2})[a-z0-9._]+(?<![_.])$/,
                  "Username should be 3-16 characters and shouldn't include any special character and don't use capital letters!"
                ),
              name: string()
                .matches(
                  /^(?=.{3,20}$)(?![a-z])(?!.*[_.]{2})[a-zA-Z ]+(?<![_.])$/,
                  "Name should have at least 3 characters and should not any number!"
                )
                .required("Name is required!"),
              email: string()
                .required("Email is requird!")
                .email("Invalid Email!"),
              cnic: string()
                .required("CNIC is required!")
                .matches(/^[0-9+]{13}$/, "CNIC must be 13 characters"),
              password: string()
                .required("Password is required!")
                .matches(
                  /^(?=.*[0-9])(?=.*[a-zA-Z ])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&* ]{8,20}$/,
                  "Password must contain at least 8 characters, 1 number, 1 upper, 1 lowercase and 1 special character!"
                ),
              cpassword: string()
                .oneOf([ref("password"), null], "Password not match!")
                .required("Confirm Password is required!"),
              role: string().required("Role is required!"),
            })}
          >
            {({ errors, touched, isValid, dirty, values, setValues }) => (
              <Form>
                <Stack direction="column" spacing={1}>
                  <Field
                    as={TextField}
                    label="Username"
                    name="userid"
                    variant="outlined"
                    type="text"
                    sx={{ width: { xs: 250, sm: 500 } }}
                    error={Boolean(errors.userid) && Boolean(touched.userid)}
                    helperText={Boolean(touched.userid) && errors.userid}
                  />
                  <Field
                    as={TextField}
                    label="Name"
                    name="name"
                    variant="outlined"
                    sx={{ width: { xs: 250, sm: 500 } }}
                    error={Boolean(errors.name) && Boolean(touched.name)}
                    helperText={Boolean(touched.name) && errors.name}
                  />
                  <Field
                    as={TextField}
                    label="Email"
                    name="email"
                    variant="outlined"
                    sx={{ width: { xs: 250, sm: 500 } }}
                    error={Boolean(errors.email) && Boolean(touched.email)}
                    helperText={Boolean(touched.email) && errors.email}
                  />
                  <Field
                    as={TextField}
                    label="CNIC"
                    name="cnic"
                    variant="outlined"
                    sx={{ width: { xs: 250, sm: 500 } }}
                    error={Boolean(errors.cnic) && Boolean(touched.cnic)}
                    helperText={Boolean(touched.cnic) && errors.cnic}
                  />
                  <FormControl
                    variant="outlined"
                    sx={{ width: { xs: 250, sm: 500 } }}
                    error={
                      Boolean(errors.password) && Boolean(touched.password)
                    }
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <Field
                      as={OutlinedInput}
                      type={visible ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setVisible(!visible)}
                            edge="end"
                          >
                            {visible ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      fullWidth
                      label="Password"
                      name="password"
                      error={
                        Boolean(errors.password) && Boolean(touched.password)
                      }
                    />
                    <FormHelperText
                      error={
                        Boolean(errors.password) && Boolean(touched.password)
                      }
                    >
                      {Boolean(touched.password) && errors.password}
                    </FormHelperText>
                  </FormControl>
                  <FormControl
                    variant="outlined"
                    sx={{ width: { xs: 250, sm: 500 } }}
                    error={
                      Boolean(errors.cpassword) && Boolean(touched.cpassword)
                    }
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <Field
                      as={OutlinedInput}
                      type={visible ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setVisible(!visible)}
                            edge="end"
                          >
                            {visible ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Confirm Password"
                      name="cpassword"
                      fullWidth
                      error={
                        Boolean(errors.cpassword) && Boolean(touched.cpassword)
                      }
                    />
                    <FormHelperText
                      error={
                        Boolean(errors.cpassword) && Boolean(touched.cpassword)
                      }
                    >
                      {Boolean(touched.cpassword) && errors.cpassword}
                    </FormHelperText>
                  </FormControl>
                  <FormControl
                    fullWidth
                    error={Boolean(errors.role) && Boolean(touched.role)}
                  >
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Field
                      as={Select}
                      label="Role"
                      name="role"
                      value={values.role}
                      onChange={(e) =>
                        setValues({ ...values, role: e.target.value })
                      }
                      error={Boolean(errors.role) && Boolean(touched.role)}
                    >
                      <MenuItem disabled value="">
                        <em>Head Of Departments</em>
                      </MenuItem>
                      {show_departments.map((data) => (
                        <MenuItem
                          value={`Head Of ${data.department} Department`}
                        >
                          Head Of {data.department} Department
                        </MenuItem>
                      ))}
                      <MenuItem disabled value="">
                        <em>Other Users</em>
                      </MenuItem>
                      <MenuItem value="Fee Section">Fee Section</MenuItem>
                      <MenuItem value="Library">Library</MenuItem>
                      <MenuItem value="Incharge Campus">
                        Incharge Campus
                      </MenuItem>
                      <MenuItem value="Examination Department">
                        Examination Department
                      </MenuItem>
                    </Field>
                    <FormHelperText
                      error={Boolean(errors.role) && Boolean(touched.role)}
                    >
                      {Boolean(touched.role) && errors.role}
                    </FormHelperText>
                  </FormControl>
                </Stack>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <LoadingButton
                    loading={user_loading}
                    loadingPosition="center"
                    disabled={!isValid || !dirty}
                    type="submit"
                  >
                    Add User
                  </LoadingButton>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const AddDepartment = ({ searchQuery }) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });
  const initialValues = {
    userid: "",
    name: "",
    email: "",
    cnic: "",
    password: "",
    cpassword: "",
    role: "",
  };
  const dispatch = useDispatch();
  const { department_loading } = useSelector((state) => state.department);

  const clickHandler = (values, formikHelpers) => {
    dispatch(addDepartment(values, setNotify, formikHelpers, searchQuery));
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Toast notify={notify} setNotify={setNotify} />
      <Button
        onClick={handleClickOpen("paper")}
        variant="contained"
        sx={{ mb: 1, color: "white" }}
        startIcon={<Add />}
      >
        Add Department
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Add User</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <Formik
            initialValues={initialValues}
            onSubmit={clickHandler}
            validationSchema={object({
              department: string()
                .required("Department is required")
                .matches(
                  /^(?![a-z])(?!.*[_.]{2})[a-zA-Z ]+(?<![_.])$/,
                  "Please write first latter capital and don't write numbers!"
                ),
            })}
          >
            {({ errors, touched, isValid, dirty }) => (
              <Form>
                <Stack>
                  <Field
                    as={TextField}
                    label="Department Name"
                    name="department"
                    variant="outlined"
                    type="text"
                    sx={{ width: { xs: 250, sm: 500 } }}
                    error={
                      Boolean(errors.department) && Boolean(touched.department)
                    }
                    helperText={
                      Boolean(touched.department) && errors.department
                    }
                  />
                </Stack>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <LoadingButton
                    loading={department_loading}
                    loadingPosition="center"
                    disabled={!isValid || !dirty}
                    type="submit"
                  >
                    Add Department
                  </LoadingButton>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

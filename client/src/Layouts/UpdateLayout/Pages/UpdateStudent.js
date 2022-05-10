import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  showStudentByID,
  updateStudent,
} from "../../../Redux/Actions/studentAction";
import { Update } from "@mui/icons-material";

const UpdateStudent = () => {
  const dispatch = useDispatch();
  const { student_loading, show_student_by_id } = useSelector(
    (state) => state.student
  );
  const initialValues = {
    name: show_student_by_id.name,
    email: show_student_by_id.email,
    cnic: show_student_by_id.cnic,
    role: show_student_by_id.role,
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const clickHandler = (values) => {
    dispatch(updateStudent(values, id, navigate));
  };

  useEffect(() => {
    dispatch(showStudentByID(id));
  }, []);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 20,
        }}
      >
        {student_loading ? (
          <Typography variant="h4">Please Wait...</Typography>
        ) : (
          <Card sx={{ boxShadow: 10, width: 400 }}>
            <Container sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5">Update Student</Typography>
            </Container>
            <Divider />
            <Formik
              initialValues={initialValues}
              onSubmit={clickHandler}
              enableReinitialize
              validationSchema={object({
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
                role: string().required("Role is required!"),
              })}
            >
              {({ errors, touched, isValid, dirty, values, setValues }) => (
                <Form>
                  <CardContent>
                    <Stack direction="column">
                      <Field
                        as={TextField}
                        label="Name"
                        name="name"
                        variant="outlined"
                        sx={{ m: 1 }}
                        error={Boolean(errors.name) && Boolean(touched.name)}
                        helperText={Boolean(touched.name) && errors.name}
                        size="small"
                      />
                      <Field
                        as={TextField}
                        label="Email"
                        name="email"
                        variant="outlined"
                        sx={{ m: 1 }}
                        size="small"
                        error={Boolean(errors.email) && Boolean(touched.email)}
                        helperText={Boolean(touched.email) && errors.email}
                      />
                      <Field
                        as={TextField}
                        label="CNIC"
                        name="cnic"
                        variant="outlined"
                        sx={{ m: 1 }}
                        size="small"
                        error={Boolean(errors.cnic) && Boolean(touched.cnic)}
                        helperText={Boolean(touched.cnic) && errors.cnic}
                      />
                      <FormControl
                        error={Boolean(errors.role) && Boolean(touched.role)}
                        sx={{ m: 1 }}
                        size="small"
                      >
                        <InputLabel id="demo-simple-select-label">
                          Role
                        </InputLabel>
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
                  </CardContent>
                  <Divider />
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      disabled={!isValid || !dirty}
                      type="submit"
                      startIcon={<Update />}
                      variant="contained"
                      sx={(theme) => ({ color: theme.palette.common.white })}
                    >
                      Update Student
                    </Button>
                  </CardActions>
                </Form>
              )}
            </Formik>
          </Card>
        )}
      </Container>
    </>
  );
};

export default UpdateStudent;

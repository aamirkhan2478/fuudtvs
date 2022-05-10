import { Update } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
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
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { object, string } from "yup";
import { showDepartment } from "../../../Redux/Actions/departmentAction";
import { updateStatus } from "../../../Redux/Actions/statusAction";
import Toast from "../../ReusableComponents/Toast";

const UpdateStatus = () => {
  const dispatch = useDispatch();
  const { status_loading } = useSelector((state) => state.status);
  const { user } = useSelector((state) => state.auth);
  const { show_departments } = useSelector((state) => state.department);
  const query = "";
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });
  const initialValues = {
    description: "",
    status: "",
  };

  const getDepartments = () => {
    dispatch(showDepartment(query));
  };

  useEffect(() => {
    getDepartments();
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();

  const statusUpdate = (values) => {
    dispatch(updateStatus(values, navigate, id, setNotify));
  };
  return (
    <>
      <Toast notify={notify} setNotify={setNotify} />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 20,
        }}
      >
        <Card sx={{ boxShadow: 10, width: 400 }}>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h5">Update Status</Typography>
          </Container>
          <Divider />
          <Formik
            initialValues={initialValues}
            onSubmit={statusUpdate}
            validationSchema={object({
              status: string().required("Status is required"),
              description: string().required("description is required"),
            })}
          >
            {({ errors, dirty, isValid, setValues, values, touched }) => (
              <Form>
                <CardContent>
                  <Field
                    as={TextField}
                    variant="outlined"
                    label="Description"
                    name="description"
                    fullWidth
                    sx={{ mt: 1 }}
                    multiline
                    rows={4}
                    error={
                      Boolean(errors.description) &&
                      Boolean(touched.description)
                    }
                    helperText={
                      Boolean(touched.description) && errors.description
                    }
                  />
                  <FormControl
                    fullWidth
                    sx={{ mt: 1 }}
                    error={Boolean(errors.status) && Boolean(touched.status)}
                  >
                    <InputLabel>Status</InputLabel>
                    {user.role === "Admin" ? (
                      <Field
                        as={Select}
                        value={values.status}
                        label="Status"
                        name="status"
                        onChange={(e) =>
                          setValues({ ...values, status: e.target.value })
                        }
                      >
                        <MenuItem value="Approved">Approved</MenuItem>
                        <MenuItem value="Not Approved">Not Approved</MenuItem>
                      </Field>
                    ) : user.role === "Fee Section" ? (
                      <Field
                        as={Select}
                        value={values.status}
                        label="Status"
                        name="status"
                        onChange={(e) =>
                          setValues({ ...values, status: e.target.value })
                        }
                      >
                        {show_departments.map((data) => (
                          <MenuItem value={`Head Of ${data.department} Department`}>
                            Head Of {data.department} Department
                          </MenuItem>
                        ))}
                        <MenuItem value="Due Fee">Due Fee</MenuItem>
                      </Field>
                    ) : user.role === "Library" ? (
                      <Field
                        as={Select}
                        value={values.status}
                        label="Status"
                        name="status"
                        onChange={(e) =>
                          setValues({ ...values, status: e.target.value })
                        }
                      >
                        <MenuItem value="Incharge Campus">
                          Incharge Campus
                        </MenuItem>
                        <MenuItem value="Book Not Returned">
                          Book Not Returned
                        </MenuItem>
                      </Field>
                    ) : user.role === "Incharge Campus" ? (
                      <Field
                        as={Select}
                        value={values.status}
                        label="Status"
                        name="status"
                        onChange={(e) =>
                          setValues({
                            ...values,
                            status: e.target.value,
                          })
                        }
                      >
                        <MenuItem value="Examination Department">
                          Examination Department
                        </MenuItem>
                        <MenuItem value="Issues">Issues</MenuItem>
                      </Field>
                    ) : user.role === "Examination Department" ? (
                      <Field
                        as={Select}
                        value={values.status}
                        label="Status"
                        name="status"
                        onChange={(e) =>
                          setValues({
                            ...values,
                            status: e.target.value,
                          })
                        }
                      >
                        <MenuItem value="Degree Printing">
                          Degree Printing
                        </MenuItem>
                        <MenuItem value="Degree Printed">
                          Degree Printed
                        </MenuItem>
                        <MenuItem value="Degree Received">
                          Degree Received
                        </MenuItem>
                        <MenuItem value="Issue">Issue</MenuItem>
                      </Field>
                    ) : (
                      <Field
                        as={Select}
                        value={values.status}
                        label="Status"
                        name="status"
                        onChange={(e) =>
                          setValues({
                            ...values,
                            status: e.target.value,
                          })
                        }
                      >
                        <MenuItem value="Library">Library</MenuItem>
                        <MenuItem value="Any Issue">Any Issue</MenuItem>
                      </Field>
                    )}
                    <FormHelperText
                      error={Boolean(errors.status) && Boolean(touched.status)}
                    >
                      {Boolean(touched.status) && errors.status}
                    </FormHelperText>
                  </FormControl>
                </CardContent>
                <Divider />
                <CardActions>
                  <Container sx={{ display: "flex", justifyContent: "center" }}>
                    <LoadingButton
                      loading={status_loading}
                      loadingPosition="start"
                      startIcon={<Update />}
                      variant="contained"
                      sx={(theme) => ({ color: theme.palette.common.white })}
                      type="submit"
                      disabled={!dirty || !isValid}
                    >
                      Update Status
                    </LoadingButton>
                  </Container>
                </CardActions>
              </Form>
            )}
          </Formik>
        </Card>
      </Container>
    </>
  );
};

export default UpdateStatus;

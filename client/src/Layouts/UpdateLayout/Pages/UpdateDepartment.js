import { Update } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { object, string } from "yup";
import {
  showDepartmentByID,
  updateDepartment,
} from "../../../Redux/Actions/departmentAction";

const UpdateDepartment = () => {
  const dispatch = useDispatch();
  const { department_loading, show_department_by_id } = useSelector(
    (state) => state.department
  );
  const initialValues = {
    department: show_department_by_id.department,
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const clickHandler = (values) => {
    dispatch(updateDepartment(values, id, navigate));
  };

  useEffect(() => {
    dispatch(showDepartmentByID(id));
  }, []);
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 30,
        }}
      >
        {department_loading ? (
          <Typography variant="h4">Please Wait...</Typography>
        ) : (
          <Card sx={{ boxShadow: 10, width: 400 }}>
            <Container sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5">Update Department</Typography>
            </Container>
            <Divider />
            <Formik
              initialValues={initialValues}
              onSubmit={clickHandler}
              enableReinitialize
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
                  <CardContent>
                    <Stack>
                      <Field
                        as={TextField}
                        label="Department Name"
                        name="department"
                        variant="outlined"
                        sx={{ m: 1 }}
                        error={
                          Boolean(errors.department) &&
                          Boolean(touched.department)
                        }
                        helperText={
                          Boolean(touched.department) && errors.department
                        }
                        size="small"
                      />
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
                      Update department
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

export default UpdateDepartment;

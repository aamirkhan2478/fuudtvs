import { Send } from "@mui/icons-material";
import {
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Formik, Field, Form } from "formik";
import { object, string } from "yup";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendFeedback } from "../../../Redux/Actions/feedbackAction";
import Toast from "../../ReusableComponents/Toast";

const SendFeedback = () => {
  const navigate = useNavigate();
  const { feedback_loading } = useSelector((state) => state.feedback);
  const dispatch = useDispatch();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });

  const Feedback = (values, formikHelpers) => {
    dispatch(sendFeedback(values, setNotify, formikHelpers));
  };
  return (
    <>
      <Toast notify={notify} setNotify={setNotify} />
      <Grid container>
        <Typography variant="h4" flexGrow={1} mb={2}>
          Send Feedback
        </Typography>
        <Breadcrumbs separator=">">
          <Button onClick={() => navigate("/app/dashboard")}>Dashboard</Button>
          <Typography textTransform="uppercase">Send Feedback</Typography>
        </Breadcrumbs>
      </Grid>
      <Card sx={{ boxShadow: 10 }}>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h5"
            sx={(theme) => ({
              color: theme.palette.secondary.main,
              fontWeight: "bold",
            })}
          >
            Send Feedback
          </Typography>
        </Container>
        <Divider />
        <Formik
          initialValues={{ feedback: "" }}
          onSubmit={Feedback}
          validationSchema={object({
            feedback: string().required("Feedback is required"),
          })}
        >
          {({ errors, touched, dirty, isValid }) => (
            <Form>
              <CardContent>
                <Field
                  as={TextField}
                  label="Feedback"
                  variant="outlined"
                  name="feedback"
                  multiline
                  rows={4}
                  fullWidth
                  error={Boolean(errors.cnic) && Boolean(touched.cnic)}
                  helperText={Boolean(touched.cnic) && errors.cnic}
                />
              </CardContent>
              <Divider />
              <CardActions>
                <Grid
                  container
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <LoadingButton
                    loading={feedback_loading}
                    loadingPosition="start"
                    variant="contained"
                    sx={(theme) => ({
                      width: 500,
                      color: theme.palette.common.white,
                    })}
                    startIcon={<Send />}
                    type="submit"
                    disabled={!dirty || !isValid}
                  >
                    Send Feedback
                  </LoadingButton>
                </Grid>
              </CardActions>
            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default SendFeedback;

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Toast from "../../ReusableComponents/Toast";
import { sendContact } from "../../../Redux/Actions/contactAction";
import { LoadingButton } from "@mui/lab";
import { LocationOn, Phone, Email, Send } from "@mui/icons-material";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";

const ContactUs = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const { contact_loading } = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const sendMessage = (values, formikHelpers) => {
    dispatch(sendContact(values, formikHelpers, setNotify));
  };
  return (
    <Container>
      <Toast notify={notify} setNotify={setNotify} />
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant="h2" pt={2} textAlign="center" fontWeight="bold">
            Get In Touch
          </Typography>
          <Typography variant="body1" textAlign="center">
            You can contact us by using this form
          </Typography>
          <Divider
            sx={{
              height: 8,
              backgroundColor: "green",
              borderRadius: 15,
              boxShadow: 10,
            }}
          />
          <Grid container>
            <Grid item xs={12} sm={8} order={{ xs: 2, sm: 1 }}>
              <Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Card sx={{ mt: 1, boxShadow: 10, height: 400 }}>
                    <Stack direction="row" mt={3}>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        sx={{
                          display: { xs: "none", sm: "flex" },
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          component="iframe"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.137094899057!2d73.19304341454442!3d33.67951414472849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfec16c10e65%3A0xfef10fa74d46d99b!2sFederal%20Urdu%20University%20of%20Arts%2C%20Sciences%20%26%20Technology%2C%20Islamabad!5e0!3m2!1sen!2s!4v1628581581444!5m2!1sen!2s"
                          style={{ border: "0" }}
                          allowfullscreen=""
                          loading="lazy"
                          sx={{
                            ml: 2,
                            width: "100%",
                            height: "300px",
                            borderRadius: 6,
                          }}
                          title="Map"
                        ></Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Card
                          sx={{
                            width: 300,
                            borderRadius: 5,
                            boxShadow: 10,
                            backgroundColor: "rgb(226, 226, 241)",
                          }}
                        >
                          <CardContent>
                            <Formik
                              initialValues={initialValues}
                              onSubmit={sendMessage}
                              validationSchema={object({
                                name: string().required("Name is required"),
                                email: string().required("Email is required"),
                                message: string().required(
                                  "Message is required"
                                ),
                              })}
                            >
                              {({ errors, touched, dirty, isValid }) => (
                                <Form>
                                  <Field
                                    as={TextField}
                                    name="name"
                                    label="Name"
                                    type="text"
                                    sx={{ mt: 1 }}
                                    error={
                                      Boolean(errors.name) &&
                                      Boolean(touched.name)
                                    }
                                    helperText={
                                      Boolean(touched.name) && errors.name
                                    }
                                    fullWidth
                                  />
                                  <Field
                                    as={TextField}
                                    name="email"
                                    label="Email"
                                    type="email"
                                    sx={{ mt: 1 }}
                                    error={
                                      Boolean(errors.email) &&
                                      Boolean(touched.email)
                                    }
                                    helperText={
                                      Boolean(touched.email) && errors.email
                                    }
                                    fullWidth
                                  />
                                  <Field
                                    as={TextField}
                                    name="message"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    type="text"
                                    sx={{ mt: 1 }}
                                    error={
                                      Boolean(errors.message) &&
                                      Boolean(touched.message)
                                    }
                                    helperText={
                                      Boolean(touched.message) && errors.message
                                    }
                                    fullWidth
                                  />
                                  <LoadingButton
                                    loading={contact_loading}
                                    loadingPosition="start"
                                    startIcon={<Send />}
                                    variant="contained"
                                    disabled={!dirty || !isValid}
                                    sx={(theme) => ({
                                      mt: 1,
                                      color: theme.palette.common.white,
                                    })}
                                    type="submit"
                                  >
                                    Send Message
                                  </LoadingButton>
                                </Form>
                              )}
                            </Formik>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Stack>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{ textAlign: "center" }}
              order={{ xs: 1, sm: 2 }}
            >
              <Typography variant="h3">Address</Typography>
              <Divider
                sx={{
                  height: 3,
                  ml: 1,
                  backgroundColor: "green",
                  borderRadius: 15,
                  boxShadow: 10,
                }}
              />
              <LocationOn
                color="primary"
                sx={{ mt: 1, fontSize: "30px", mr: 1 }}
              />
              <Typography variant="body1" component="span" fontSize="15px">
                Kuri Model Village Mozah Mohrian Near Bahria Enclave Road- 5B.
              </Typography>
              <Box component="br" />
              <Phone color="primary" sx={{ mt: 1, fontSize: "30px", mr: 1 }} />
              <Typography variant="body1" component="span" fontSize="15px">
                Tel: 051-9252860-64
              </Typography>
              <Box component="br" />
              <Email color="primary" sx={{ mt: 1, fontSize: "30px", mr: 1 }} />
              <Typography variant="body1" component="span" fontSize="15px">
                info@fuuastisb.edu.pk
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;

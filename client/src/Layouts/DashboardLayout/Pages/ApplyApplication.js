import {
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  Box,
  FormHelperText,
} from "@mui/material";
import { Add, SendAndArchive } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "../Assets/Styles/applyApplicationStyles";
import Upload from "../Components/Upload";
import { showDepartment } from "../../../Redux/Actions/departmentAction";
import { submitApplication } from "../../../Redux/Actions/applyApplicationAction";
import { LoadingButton } from "@mui/lab";
import CustomDialog from "../../ReusableComponents/CustomDialog";
import Toast from "../../ReusableComponents/Toast";

const ApplyApplication = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { show_departments } = useSelector((state) => state.department);
  const { apply_application_loading } = useSelector(
    (state) => state.applyapplication
  );
  const dispatch = useDispatch();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subtitle: "",
    color: "",
    text: "",
  });

  const getDepartments = () => {
    const query = "";
    dispatch(showDepartment(query));
  };
  useEffect(() => {
    getDepartments();
  }, []);

  const imageref = useRef();

  const initialValues = {
    fatherName: "",
    enrollmentNo: "",
    department: "",
    program: "",
    section: "",
    shift: "",
    address: "",
    phoneNo: "",
    session: "",
    documents: "",
    image: "",
  };

  const ConfirmCall = (values, formikHelpers) => {
    dispatch(submitApplication(values, formikHelpers, setNotify));
    setConfirmDialog({ isOpen: false });
  };

  const DialogBox = (values, formikHelpers) => {
    setConfirmDialog({
      isOpen: true,
      title: "Are you read your detail carefully?",
      subtitle:
        "If you read your detail carefully then submit and if you don't read it carefully then read it carefully then submit it because this application is submitted only once.",
      color: "warning",
      text: "Done",
      onConfirm: () => ConfirmCall(values, formikHelpers),
    });
  };
  return (
    <>
      <CustomDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <Toast notify={notify} setNotify={setNotify} />
      <Grid container>
        <Typography variant="h4" flexGrow={1} mb={2}>
          Apply Application
        </Typography>
        <Breadcrumbs separator=">">
          <Button onClick={() => navigate("/app/dashboard")}>Dashboard</Button>
          <Typography textTransform="uppercase">Apply Application</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ boxShadow: 10, width: "150vh" }}>
          <Container>
            <Typography paragraph mt={1}>
              <Typography
                variant="span"
                className={classes.textRed}
                fontWeight="bold"
                mr={1}
              >
                Note:
              </Typography>
              Before submitting your application read the following instruction
              carefully. You can submit your application only once so check your
              details once before submitting your application:
            </Typography>
            <Box component="ol">
              <Box component="li">Enrollment/Registration Card(Photocopy)</Box>
              <Box component="li">Admit Card(Attested Photocopy)</Box>
              <Box component="li">
                Identity Card(شناختی کارڈ)(Attested Photocopy)
              </Box>
              <Box component="li">Detail Mark Sheet(Attested Photocopy)</Box>
              <Box component="li">
                Matriculation Certificate Photocopy(Mandatory)
              </Box>
              <Box component="li">
                Pay order on the name of Head of Examination Department
              </Box>
              <Box component="li">
                Clearance Certificate just for regular students
              </Box>
              <Box component="li">
                GRMC(Approved Letter) For M.S, M.PHIL, PHD Degree
              </Box>
            </Box>
            <Box component="pre">
              How to upload the above document?
              <Box component="br" />
              <Typography variant="span" className={classes.textBlue}>
                Step 1: Capture pictures of all above documents.
              </Typography>
              <Box component="br" />
              <Typography variant="span" className={classes.textBlue}>
                Step 2: Make a pdf of all pictures.
              </Typography>
              <Box component="br" />
              <Typography variant="span" className={classes.textBlue}>
                Step 3: Upload this pdf below.
              </Typography>
              <Box component="br" />
            </Box>
            <Typography paragraph mt={1}>
              After uploading these documents at the end you have to upload your
              passport size photo and submit your application.
            </Typography>
          </Container>
          <Divider />
          <Formik
            initialValues={initialValues}
            onSubmit={DialogBox}
            validationSchema={object({
              fatherName: string()
                .matches(
                  /^(?=.{3,20}$)(?![a-z])(?!.*[_.]{2})[a-zA-Z ]+(?<![_.])$/,
                  "Name should have at least 3 characters and should not any number and First letter must be capital!"
                )
                .required("Father Name is required!"),
              enrollmentNo: string().required("Enrollment No. is required!"),
              program: string().required("Program is required!"),
              section: string()
                .required("Section is required!")
                .matches(
                  /^[A-Z]{1}$/,
                  "Section should be only one capital letter!"
                ),
              address: string().required("Address is required!"),
              phoneNo: string()
                .required("Phone No. is required")
                .matches(/^[0-9]{11}$/, "Invalid phone number!"),
              session: string()
                .required("Session is required!")
                .matches(
                  /^(Fall )[0-9]{4,30}|(Spring )[0-9]{4,30}|(Autumn )[0-9]{4,30}$/,
                  "You should enter only Fall Year or Spring Year or Autumn Year eg: Fall 2012!"
                ),
              shift: string().required("Shift is required!"),
              department: string().required("Department is required"),
              documents: string().required("Documents are required"),
              image: string().required("Image is required"),
            })}
          >
            {({ setValues, values, errors, touched, dirty, isValid }) => (
              <CardContent>
                <Form encType="multipart/form-data">
                  <Stack spacing={1}>
                    <Field
                      as={TextField}
                      label="Father Name"
                      variant="outlined"
                      name="fatherName"
                      error={
                        Boolean(errors.fatherName) &&
                        Boolean(touched.fatherName)
                      }
                      helperText={
                        Boolean(touched.fatherName) && errors.fatherName
                      }
                    />
                    <Field
                      as={TextField}
                      label="Enrollment No."
                      variant="outlined"
                      name="enrollmentNo"
                      error={
                        Boolean(errors.enrollmentNo) &&
                        Boolean(touched.enrollmentNo)
                      }
                      helperText={
                        Boolean(touched.enrollmentNo) && errors.enrollmentNo
                      }
                    />
                    <Field
                      as={TextField}
                      label="Program"
                      variant="outlined"
                      name="program"
                      error={
                        Boolean(errors.program) && Boolean(touched.program)
                      }
                      helperText={Boolean(touched.program) && errors.program}
                    />
                    <Field
                      as={TextField}
                      label="Section"
                      variant="outlined"
                      name="section"
                      error={
                        Boolean(errors.section) && Boolean(touched.section)
                      }
                      helperText={Boolean(touched.section) && errors.section}
                    />
                    <Field
                      as={TextField}
                      label="Phone No."
                      variant="outlined"
                      name="phoneNo"
                      error={
                        Boolean(errors.phoneNo) && Boolean(touched.phoneNo)
                      }
                      helperText={Boolean(touched.phoneNo) && errors.phoneNo}
                    />
                    <Field
                      as={TextField}
                      label="Session"
                      variant="outlined"
                      name="session"
                      error={
                        Boolean(errors.session) && Boolean(touched.session)
                      }
                      helperText={Boolean(touched.session) && errors.session}
                    />
                    <Field
                      as={TextField}
                      label="Address"
                      variant="outlined"
                      multiline
                      rows={4}
                      name="address"
                      error={
                        Boolean(errors.address) && Boolean(touched.address)
                      }
                      helperText={Boolean(touched.address) && errors.address}
                    />
                    <FormControl fullWidth>
                      <InputLabel>Departments</InputLabel>
                      <Field
                        as={Select}
                        value={values.department}
                        label="Departments"
                        name="department"
                        onChange={(e) =>
                          setValues({ ...values, department: e.target.value })
                        }
                      >
                        {show_departments.map((data) => (
                          <MenuItem value={data.department}>
                            {data.department}
                          </MenuItem>
                        ))}
                      </Field>
                      <FormHelperText
                        error={
                          Boolean(errors.department) &&
                          Boolean(touched.department)
                        }
                      >
                        {Boolean(touched.department) && errors.department}
                      </FormHelperText>
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel>Shift</InputLabel>
                      <Field
                        as={Select}
                        value={values.shift}
                        label="Shift"
                        name="shift"
                        onChange={(e) =>
                          setValues({ ...values, shift: e.target.value })
                        }
                      >
                        <MenuItem value="Morning">Morning</MenuItem>
                        <MenuItem value="Evening">Evening</MenuItem>
                      </Field>
                      <FormHelperText
                        error={Boolean(errors.shift) && Boolean(touched.shift)}
                      >
                        {Boolean(touched.shift) && errors.shift}
                      </FormHelperText>
                    </FormControl>
                    <Box component="div" className={classes.container}>
                      <Typography variant="h5" fontWeight="bold">
                        Upload Above Mention Documents
                      </Typography>
                    </Box>
                    <Box component="div" className={classes.container}>
                      <Box
                        component="input"
                        type="file"
                        accept="application/pdf"
                        className={classes.file}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file && file.type === "application/pdf") {
                            const reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = () => {
                              setValues({
                                ...values,
                                documents: reader.result,
                              });
                            };
                          }
                        }}
                      />
                    </Box>
                    <Box component="div" className={classes.container}>
                      <Typography variant="h5" fontWeight="bold">
                        Upload Your Picture
                      </Typography>
                    </Box>
                    <Box component="div" className={classes.container}>
                      <Box
                        component="input"
                        type="file"
                        display="none"
                        name="image"
                        ref={imageref}
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          const reader = new FileReader();
                          reader.readAsDataURL(file);
                          reader.onload = () => {
                            setValues({
                              ...values,
                              image: reader.result,
                            });
                          };
                        }}
                      />
                      {values.image !== "" ? (
                        <Upload image={values.image} imageref={imageref} />
                      ) : (
                        <Box
                          component="button"
                          className={classes.addImage}
                          onClick={(e) => {
                            e.preventDefault();
                            imageref.current.click();
                          }}
                        >
                          <Add />
                          Add Image
                        </Box>
                      )}
                    </Box>
                    <Divider />
                    <CardActions>
                      <Grid container className={classes.container}>
                        <LoadingButton
                          loading={apply_application_loading}
                          loadingPosition="start"
                          startIcon={<SendAndArchive />}
                          variant="contained"
                          className={classes.submitBtn}
                          type="submit"
                          disabled={!dirty || !isValid}
                        >
                          Submit Application
                        </LoadingButton>
                      </Grid>
                    </CardActions>
                  </Stack>
                </Form>
              </CardContent>
            )}
          </Formik>
        </Card>
      </Grid>
    </>
  );
};

export default ApplyApplication;

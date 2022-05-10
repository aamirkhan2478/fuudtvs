import { Upload } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "../../DashboardLayout/Assets/Styles/uploadChalanStyles";
import { uploadChalan } from "../../../Redux/Actions/chalanAction";
import { useNavigate, useParams } from "react-router-dom";
import Toast from "../../ReusableComponents/Toast";

const UploadChalan = () => {
  const classes = useStyles();
  const { chalan_loading } = useSelector((state) => state.chalan);
  const dispatch = useDispatch();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });
  const initialValues = {
    feeChalan: null,
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const clickHandler = (values) => {
    dispatch(uploadChalan(values, id, setNotify, navigate));
  };
  return (
    <>
      <Toast notify={notify} setNotify={setNotify} />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 30,
        }}
      >
        <Card sx={{ boxShadow: 10, width: 400 }}>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h5">Upload Chalan</Typography>
          </Container>
          <Divider />
          <Formik initialValues={initialValues} onSubmit={clickHandler}>
            {({ setValues, values }) => (
              <Form>
                <CardContent>
                  <Box
                    component="input"
                    type="file"
                    className={classes.file}
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.readAsDataURL(file);
                      reader.onload = () => {
                        setValues({
                          ...values,
                          feeChalan: reader.result,
                        });
                      };
                    }}
                  />
                </CardContent>
                <Divider />
                <CardActions>
                  <Container sx={{ display: "flex", justifyContent: "center" }}>
                    <LoadingButton
                      loading={chalan_loading}
                      loadingPosition="start"
                      variant="contained"
                      sx={(theme) => ({ color: theme.palette.common.white })}
                      type="submit"
                      startIcon={<Upload />}
                    >
                      Upload Chalan
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

export default UploadChalan;

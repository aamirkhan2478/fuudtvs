import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Download, Upload } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "../Assets/Styles/downloadChalanStyles";
import Preloader from "../../ReusableComponents/Preloader";
import {
  getApplicationID,
  showChalan,
} from "../../../Redux/Actions/chalanAction";
import { useDispatch, useSelector } from "react-redux";

const DownloadChalan = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { chalan_loading, show_chalan, get_application_id } = useSelector(
    (state) => state.chalan
  );
  useEffect(() => {
    dispatch(showChalan());
    dispatch(getApplicationID());
  }, []);

  return (
    <>
      <Grid container>
        <Typography variant="h4" flexGrow={1} mb={2}>
          Download Fee Chalan
        </Typography>
        <Breadcrumbs separator=">">
          <Button onClick={() => navigate("/app/dashboard")}>Dashboard</Button>
          <Typography textTransform="uppercase">Download Fee Chalan</Typography>
        </Breadcrumbs>
      </Grid>
      <Card sx={{ boxShadow: 10 }}>
        <Container className={classes.container}>
          <Typography
            variant="h5"
            fontWeight="bold"
            className={classes.blueText}
          >
            Download Chalan
          </Typography>
        </Container>
        <Divider />
        <CardContent>
          {chalan_loading ? (
            <Preloader />
          ) : !show_chalan ? (
            <Grid container className={classes.container}>
              <Typography
                variant="h1"
                sx={(theme) => ({ color: theme.palette.error.main })}
              >
                You should first fill application form for degree then come here
              </Typography>
            </Grid>
          ) : show_chalan.feeChalan === "" ? (
            <Grid container className={classes.container}>
              <Box className={classes.box}>
                Your fee chalan is not uploaded yet please check it later.
              </Box>
            </Grid>
          ) : (
            <>
              <Grid container className={classes.container}>
                <Box
                  component="img"
                  src={show_chalan.feeChalan}
                  alt="Chalan Form"
                  className={classes.chalanImage}
                />
              </Grid>
              <Stack className={classes.container} direction="row">
                <Typography variant="h4" className={classes.paidChalanText}>
                  Upload your paid chalan form &rarr;
                </Typography>
                <IconButton
                  color="secondary"
                  onClick={() =>
                    navigate(`/update/upload-paid-chalan/${get_application_id}`)
                  }
                >
                  <Upload />
                </IconButton>
              </Stack>
            </>
          )}
        </CardContent>
        <Divider />
        {!show_chalan
          ? null
          : show_chalan.feeChalan !== "" && (
              <CardActions>
                <Grid container className={classes.container}>
                  <Button
                    variant="contained"
                    href={show_chalan.feeChalan}
                    download="Fee Chalan"
                    className={classes.whiteText}
                    startIcon={<Download />}
                  >
                    Download Chalan
                  </Button>
                </Grid>
              </CardActions>
            )}
      </Card>
    </>
  );
};

export default DownloadChalan;

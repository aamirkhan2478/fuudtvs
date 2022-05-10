import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Preloader from "../../ReusableComponents/Preloader";
import { showPaidChalan } from "../../../Redux/Actions/chalanAction";

const ShowPaidChalan = () => {
  const { chalan_loading, show_paid_chalan } = useSelector(
    (state) => state.chalan
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  const getPaidChalan = () => {
    dispatch(showPaidChalan(id));
  };
  useEffect(() => {
    getPaidChalan();
  }, []);

  return (
    <>
      {chalan_loading ? (
        <Preloader />
      ) : !show_paid_chalan ? (
        <Typography>Document is not available</Typography>
      ) : (
        <Box
          component="embed"
          type="image/jpeg"
          src={show_paid_chalan.paidChalan}
          sx={{ width: "100%" }}
        />
      )}
    </>
  );
};

export default ShowPaidChalan;

import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showDocuments } from "../../../Redux/Actions/documentAction";
import Preloader from "../../ReusableComponents/Preloader";

const ShowDocuments = () => {
  const { document_loading, show_document } = useSelector(
    (state) => state.document
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  const getDocument = () => {
    dispatch(showDocuments(id));
  };
  useEffect(() => {
    getDocument();
  }, []);

  return (
    <>
      {document_loading ? (
        <Preloader />
      ) : !show_document ? (
        <Typography>Document is not available</Typography>
      ) : (
        <Box
          component="div"
          sx={{
            width: "100%",
            height: "800px",
            backgroundColor: "#e4e4e4",
            overflowY: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="embed"
            type="application/pdf"
            src={show_document.documents}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>
      )}
    </>
  );
};

export default ShowDocuments;

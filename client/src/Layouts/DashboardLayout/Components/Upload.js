import { Box } from "@mui/material";
import React from "react";
import useStyles from "../Assets/Styles/applyApplicationStyles";

const Upload = ({ image, imageref }) => {
  const classes = useStyles();
  return (
    <>
      <Box
        component="img"
        src={image}
        alt="preview"
        className={classes.addImage}
        onClick={(e) => {
          e.preventDefault();
          imageref.current.click();
        }}
      />
    </>
  );
};

export default Upload;

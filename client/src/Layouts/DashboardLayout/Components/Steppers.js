import React, { useEffect } from "react";
import {
  Box,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import useStyles from "../Assets/Styles/viewStatusStyles";
import { Warning } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { showStatus } from "../../../Redux/Actions/statusAction";

const Steppers = () => {
  const classes = useStyles();
  const { show_status } = useSelector((state) => state.status);
  const dispatch = useDispatch();

  const getStatus = () => {
    dispatch(showStatus());
  };

  useEffect(() => {
    getStatus();
  }, []);

  const Steps =
    show_status.status === "Admin"
      ? [
          {
            id: "1",
            label: "Admin",
            description: show_status.description,
            date: show_status.updatedDate,
            active: true,
            completed: false,
          },
          {
            id: "2",
            label: "Fee Section",
            description: show_status.description,
            active: false,
            completed: false,
          },
        ]
      : show_status.status === "Not Approved"
      ? [
          {
            id: "1",
            label: "Admin",
            description: show_status.description,
            date: show_status.updatedDate,
            active: true,
            completed: false,
            icon: <Warning color="error" />,
            error: true,
          },
          {
            id: "2",
            label: "Fee Section",
            description: show_status.description,
            active: false,
            completed: false,
          },
        ]
      : show_status.status === "Approved"
      ? [
          {
            id: "1",
            label: "Admin",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "2",
            label: "Fee Section",
            description: show_status.description,
            date: show_status.updatedDate,
            active: true,
            completed: false,
          },
          {
            id: "3",
            label: "Head Of Department",
            description: show_status.description,
            active: false,
            completed: false,
          },
        ]
      : show_status.status === "Due Fee"
      ? [
          {
            id: "1",
            label: "Admin",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "2",
            label: "Fee Section",
            description: show_status.description,
            date: show_status.updatedDate,
            active: true,
            completed: false,
            icon: <Warning color="error" />,
            error: true,
          },
          {
            id: "3",
            label: "Head Of Department",
            description: show_status.description,
            active: false,
            completed: false,
          },
        ]
      : show_status.status === "Library"
      ? [
          {
            id: "1",
            label: "Admin",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "2",
            label: "Fee Section",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "3",
            label: "Head Of Department",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "4",
            label: "Library",
            description: show_status.description,
            date: show_status.updatedDate,
            active: true,
            completed: false,
          },
          {
            id: "5",
            label: "Incharge Campus",
            description: show_status.description,
            active: false,
            completed: false,
          },
        ]
      : show_status.status === "Book Not Returned"
      ? [
          {
            id: "1",
            label: "Admin",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "2",
            label: "Fee Section",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "3",
            label: "Head Of Department",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "4",
            label: "Library",
            description: show_status.description,
            date: show_status.updatedDate,
            active: true,
            completed: false,
            icon: <Warning color="error" />,
            error: true,
          },
          {
            id: "5",
            label: "Incharge Campus",
            description: show_status.description,
            active: false,
            completed: false,
          },
        ]
      : show_status.status === "Incharge Campus"
      ? [
          {
            id: "1",
            label: "Admin",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "2",
            label: "Fee Section",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "3",
            label: "Head Of Department",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "4",
            label: "Library",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "5",
            label: "Incharge Campus",
            description: show_status.description,
            date: show_status.updatedDate,
            active: true,
            completed: false,
          },
          {
            id: "6",
            label: "Examination Department",
            description: show_status.description,
            active: false,
            completed: false,
          },
        ]
      : show_status.status === "Issues"
      ? [
          {
            id: "1",
            label: "Admin",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "2",
            label: "Fee Section",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "3",
            label: "Head Of Department",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "4",
            label: "Library",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "5",
            label: "Incharge Campus",
            description: show_status.description,
            date: show_status.updatedDate,
            active: true,
            completed: false,
            icon: <Warning color="error" />,
            error: true,
          },
          {
            id: "6",
            label: "Examination Department",
            description: show_status.description,
            active: false,
            completed: false,
          },
        ]
      : show_status.status === "Examination Department"
      ? [
          {
            id: "1",
            label: "Admin",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "2",
            label: "Fee Section",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "3",
            label: "Head Of Department",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "4",
            label: "Library",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "5",
            label: "Incharge Campus",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "6",
            label: "Examination Department",
            description: show_status.description,
            date: show_status.updatedDate,
            active: true,
            completed: false,
          },
          {
            id: "7",
            label: "Degree Printing",
            description: show_status.description,
            active: false,
            completed: false,
          },
        ]
      : show_status.status === "Issue"
      ? [
          {
            id: "1",
            label: "Admin",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "2",
            label: "Fee Section",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "3",
            label: "Head Of Department",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "4",
            label: "Library",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "5",
            label: "Incharge Campus",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "6",
            label: "Examination Department",
            description: show_status.description,
            date: show_status.updatedDate,
            active: true,
            completed: false,
            icon: <Warning color="error" />,
            error: true,
          },
          {
            id: "7",
            label: "Degree Printing",
            description: show_status.description,
            active: false,
            completed: false,
          },
        ]
      : show_status.status === "Degree Printing"
      ? [
          {
            id: "1",
            label: "Admin",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "2",
            label: "Fee Section",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "3",
            label: "Head Of Department",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "4",
            label: "Library",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "5",
            label: "Incharge Campus",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "6",
            label: "Examination Department",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "7",
            label: "Degree Printing",
            description: show_status.description,
            date: show_status.updatedDate,
            active: true,
            completed: false,
          },
          {
            id: "8",
            label: "Degree Printed",
            description: show_status.description,
            active: false,
            completed: false,
          },
        ]
      : show_status.status === "Degree Printed"
      ? [
          {
            id: "1",
            label: "Admin",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "2",
            label: "Fee Section",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "3",
            label: "Head Of Department",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "4",
            label: "Library",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "5",
            label: "Incharge Campus",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "6",
            label: "Examination Department",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "7",
            label: "Degree Printing",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "8",
            label: "Degree Printed",
            description: show_status.description,
            date: show_status.updatedDate,
            active: true,
            completed: false,
          },
          {
            id: "9",
            label: "Degree Received",
            description: show_status.description,
            active: false,
            completed: false,
          },
        ]
      : show_status.status === "Degree Received"
      ? [
          {
            id: "1",
            label: "Admin",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "2",
            label: "Fee Section",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "3",
            label: "Head Of Department",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "4",
            label: "Library",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "5",
            label: "Incharge Campus",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "6",
            label: "Examination Department",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "7",
            label: "Degree Printing",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "8",
            label: "Degree Printed",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "9",
            label: "Degree Received",
            description: show_status.description,
            date: show_status.updatedDate,
            active: true,
            completed: true,
          },
        ]
      : show_status.status === "Any Issue"
      ? [
          {
            id: "1",
            label: "Admin",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "2",
            label: "Fee Section",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "3",
            label: "Head Of Department",
            description: show_status.description,
            date: show_status.updatedDate,
            active: true,
            completed: false,
            icon: <Warning color="error" />,
            error: true,
          },
          {
            id: "4",
            label: "Library",
            description: show_status.description,
            active: false,
            completed: false,
          },
        ]
      : [
          {
            id: "1",
            label: "Admin",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "2",
            label: "Fee Section",
            description: show_status.description,
            active: false,
            completed: true,
          },
          {
            id: "3",
            label: "Head Of Department",
            description: show_status.description,
            date: show_status.updatedDate,
            active: true,
            completed: false,
          },
          {
            id: "4",
            label: "Library",
            description: show_status.description,
            active: false,
            completed: false,
          },
        ];

  return (
    <>
      <Box className={classes.container}>
        <Stepper orientation="vertical">
          {Steps.map((s) => (
            <Step completed={s.completed} active={s.active} key={s.id}>
              <StepLabel icon={s.icon} error={s.error}>
                {s.label}
              </StepLabel>
              <StepContent>
                <Typography>{s.description}</Typography>
                <Typography variant="caption">{s.date}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
};

export default Steppers;

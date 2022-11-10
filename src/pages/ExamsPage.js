import { makeStyles } from "@material-ui/core/styles";
import { Fragment, useState } from "react";
import React from "react";
import {
  Button,
  FormControlLabel,
  FormGroup,
  Grid, LinearProgress,
  Switch,
  Typography, useMediaQuery,
} from "@material-ui/core";
import { DataGrid, GridOverlay } from "@material-ui/data-grid";
import theme from "../components/ui/Theme";

const useStyles = makeStyles((theme) => ({
  gridDataContainer: {
    padding: "0 20px",
    width: "1100px",
    marginTop: "2rem",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  deleteExamsButton: {
    // width: "10rem",
    height: "1rem",
    backgroundColor: "wheat",
    borderRadius: "25px",
    fontFamily: "Aldrich",
    padding: "25px",
    border: `1px solid wheat`,
    marginTop: "1rem",
    "&:hover": {
      border: `1px solid ${theme.palette.common.cyan}`,
      color: "white",
    },
  },
  noContentOverlay: {
    flexDirection: "column",
    "& .ant-empty-img-1": {
      fill: theme.palette.type === "light" ? "#aeb8c2" : "#262626",
    },
    "& .ant-empty-img-2": {
      fill: theme.palette.type === "light" ? "#f5f5f7" : "#595959",
    },
    "& .ant-empty-img-3": {
      fill: theme.palette.type === "light" ? "#dce0e6" : "#434343",
    },
    "& .ant-empty-img-4": {
      fill: theme.palette.type === "light" ? "#fff" : "#1c1c1c",
    },
    "& .ant-empty-img-5": {
      fillOpacity: theme.palette.type === "light" ? "0.8" : "0.08",
      fill: theme.palette.type === "light" ? "#f5f5f5" : "#fff",
    },
  },
  label: {
    marginTop: theme.spacing(1),
  },
  formGroup:{
    [theme.breakpoints.down("xs")]:{
      width: "90%",
      margin: "0 auto",
      padding: "0 15px"
    },
  },
}));

const DUMMY_EXAMS = [
  {
    id: "1",
    courseId: "1",
    courseName: "Analiza 1",
    examDate: "2022-11-07T11:25:34",
    status: "o",
    points: "56",
    grade: "6",
  },
  {
    id: "2",
    courseId: "2",
    courseName: "Razvoj Softvera",
    examDate: "2022-10-05T17:25:34",
    status: "o",
    points: "78",
    grade: "8",
  },
  {
    id: "3",
    courseId: "3",
    courseName: "Algebra 1",
    examDate: "2021-07-14T09:25:34",
    status: "n",
    points: null,
    grade: null,
  },
  {
    id: "4",
    courseId: "4",
    courseName: "Operativni Sistemi",
    examDate: "2021-01-11T14:00:00",
    status: "o",
    points: "46",
    grade: "5",
  },
  {
    id: "5",
    courseId: "4",
    courseName: "Operativni Sistemi",
    examDate: "2021-02-11T14:00:00",
    status: "o",
    points: "87",
    grade: "9",
  },
  {
    id: "6",
    courseId: "3",
    courseName: "Algebra 1",
    examDate: "2021-07-23T09:25:34",
    status: "o",
    points: 78,
    grade: 8,
  },
];

const columns = [
  // {
  //   field: "id",
  //   headerName: "ID",
  //   description: "Sorting ID",
  //   sortable: true,
  //   width: 100,
  // },
  {
    field: "courseId",
    headerName: "Course ID",
    description: "ID of the course in the register",
    sortable: true,
    width: 150,
  },
  {
    field: "courseName",
    headerName: "Course Name",
    description: "Name of the course",
    sortable: true,
    width: 220,
  },
  {
    field: "examDate",
    headerName: "Exam Date",
    description: "Date of the exam taking",
    sortable: true,
    width: 200,
  },
  {
    field: "status",
    headerName: "Exam Status",
    description: "Status of the exam(passed,failed...)",
    sortable: true,
    width: 180,
  },
  {
    field: "points",
    headerName: "Points",
    description: "Points achieved on exam",
    sortable: true,
    width: 130,
  },
  {
    field: "grade",
    headerName: "Grade",
    description: "Given grade",
    sortable: true,
    width: 120,
  },
];


const ExamsPage = (props) => {
  const classes = useStyles();
  const [selectionModel, setSelectionModel] = useState([]);
  const [rows, setRows] = useState(DUMMY_EXAMS);
  const matchesSM = useMediaQuery(theme.breakpoints.down("700"));
  // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const CustomNoRowsOverlay = (props) => {
    return (
      <GridOverlay className={classes.noContentOverlay}>
        <svg
          width="120"
          height="100"
          viewBox="0 0 184 152"
          aria-hidden
          focusable="false"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(24 31.67)">
              <ellipse
                className="ant-empty-img-5"
                cx="67.797"
                cy="106.89"
                rx="67.797"
                ry="12.668"
              />
              <path
                className="ant-empty-img-1"
                d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
              />
              <path
                className="ant-empty-img-2"
                d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
              />
              <path
                className="ant-empty-img-3"
                d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
              />
            </g>
            <path
              className="ant-empty-img-3"
              d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
            />
            <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
              <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
              <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
            </g>
          </g>
        </svg>
        <div className={classes.label}>No Exams</div>
      </GridOverlay>
    );
  };
  const CustomLoadingOverlay = (props) => {
    return (
      <div style={{width: "100%", backgroundColor: "black"}}>
        <LinearProgress color='secondary'/>
      </div>);
  };

  console.log(selectionModel);

  const deleteExamEntriesHandler = () => {
    const fiteredExams = rows.filter(
      (ex) => !selectionModel.selectionModel.includes(ex.id)
    );
    setRows(fiteredExams);
    setSelectionModel([]);
  };

  return (
    <Fragment>
      <Grid container direction="column" alignItems="center" style={{marginBottom:"10rem"}}>
        <Grid item style={{ marginTop: "3rem" }}>
          <Typography align="center" variant="h2">
            Exams
          </Typography>
        </Grid>
        <Grid item>
          {/* switches for some actions */}
          <FormGroup
            row
            style={{
              backgroundColor: theme.palette.common.ming,
              borderRadius: "5px",
            }}
            className={classes.formGroup}
          >
            <FormControlLabel
              style={{ marginRight: "5rem", marginLeft: matchesSM ? undefined :"5rem"}}
              control={<Switch color="primary" />}
              label="Valid"
            />
            <FormControlLabel
              style={{ marginRight: "5rem" }}
              control={<Switch color="primary" />}
              label="Passed"
            />
            <FormControlLabel
              style={{ marginRight: "5rem" }}
              control={<Switch color="primary" />}
              label="Grade 7+"
            />
          </FormGroup>
        </Grid>
        <Grid item className={classes.gridDataContainer}>
          <DataGrid
            columns={columns}
            rows={rows}
            loading={rows.length === 1}
            pageSize={4}
            checkboxSelection={!!rows.length}
            disableSelectionOnClick
            autoHeight
            components={{
              NoRowsOverlay: CustomNoRowsOverlay,
              LoadingOverlay: CustomLoadingOverlay,
            }}
            onSelectionModelChange={(newModel) => setSelectionModel(newModel)}
            keepNonExistentRowsSelected
          />
        </Grid>
        <Grid item container justify="center">
          <Grid item>
            {selectionModel.length !== 0 &&
              selectionModel.selectionModel.length !== 0 && (
                <Button
                  className={classes.deleteExamsButton}
                  onClick={deleteExamEntriesHandler}
                >
                  Delete Entries
                </Button>
              )}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ExamsPage;

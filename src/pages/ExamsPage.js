import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";
import React from "react";
import {FormControlLabel, FormGroup, Grid, Switch, Typography} from "@material-ui/core";
import {DataGrid} from "@material-ui/data-grid";
import theme from "../components/ui/Theme";

const useStyles = makeStyles((theme) => ({
  gridDataContainer: {
    padding: "0 20px",
    height: "50rem",
    width: "1200px",
    marginTop: "2rem",
    [theme.breakpoints.down('md')]:{
      width: "100%",
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
    points: "87",
    grade: "9",
  },
];

const columns = [
  {
    field: "id",
    headerName: "ID",
    description: "Sorting ID",
    sortable: true,
    width: 100,
  },
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

console.log(new Date("2022-11-07T11:25:34").toLocaleString());

const ExamsPage = (props) => {
  const classes = useStyles();


  return (
    <Fragment>
      <Grid container direction="column" alignItems='center'>
        <Grid item style={{ marginTop: "3rem" }}>
          <Typography align='center' variant="h2">Exams</Typography>
        </Grid>
        <Grid item>
          {/* switches for some actions */}
          <FormGroup row style={{backgroundColor: theme.palette.common.ming, borderRadius:"5px"}}>
            <FormControlLabel style={{ marginRight: "5rem", marginLeft: "5rem" }} control={<Switch color='primary' />} label='Valid'/>
            <FormControlLabel style={{ marginRight: "5rem" }} control={<Switch color='primary' />} label='Valid'/>
            <FormControlLabel style={{ marginRight: "5rem" }} control={<Switch color='primary' />} label='Valid'/>
            <FormControlLabel style={{ marginRight: "5rem" }} control={<Switch color='primary' />} label='Valid'/>
            <FormControlLabel style={{ marginRight: "5rem" }} control={<Switch color='primary' />} label='Valid'/>
          </FormGroup>
        </Grid>
        <Grid item className={classes.gridDataContainer}>
          <DataGrid
            columns={columns}
            rows={DUMMY_EXAMS}
            pageSize={3}
            checkboxSelection
            disableSelectionOnClick
            autoHeight
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ExamsPage;

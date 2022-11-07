import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";
import { Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
// import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles((theme) => ({

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
    width: 120,
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
      <Typography variant="h2">Exams</Typography>
      <div style={{ height: 300}}>
      <DataGrid
        columns={columns}
        rows={DUMMY_EXAMS}
        pageSize={3}
        checkboxSelection
        disableSelectionOnClick
      />
      </div>
    </Fragment>
  );
};

export default ExamsPage;

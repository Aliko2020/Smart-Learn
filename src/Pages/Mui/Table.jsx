import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  "& td, & th": {
    borderBottom: "none",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(CourseName, Status, Action) {
  return { CourseName, Status, Action };
}

const rows = [
  createData("Research Methods", "Completed", "10,08/2024"),
  createData("Programing With VB", "Pending", "10,08/2024"),
  createData("Computer Fundamentals", "Late", "10,08/2024"),
  createData("Operational Research", "Late", "10,08/2024"),
];

export default function AssigmentList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell >
              <span className="font-semibold">CourseName</span>
            </StyledTableCell>
            <StyledTableCell align="right">
              <span className="font-semibold">Date</span>
            </StyledTableCell>
            <StyledTableCell align="right">
              <span className="font-semibold">Status</span>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.CourseName}
              </StyledTableCell>

              <StyledTableCell align="right">{row.Action}</StyledTableCell>
              <StyledTableCell
                      align="right"
                      style={{
                        color:
                          row.Status === "Completed"
                            ? "green"
                            : row.Status === "Pending"
                            ? "orange"
                            : "red",
                      }}
                    >
                      {row.Status}
                    </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

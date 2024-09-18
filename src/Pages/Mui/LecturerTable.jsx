import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";




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

function createData(StudentName, Status, Action) {
  return { StudentName, Status, Action };
}

const rows = [
  createData("Aliko Amos", "seen", "10,08/2024"),
  createData("John Doe", "late", "10,08/2024"),
  createData("Albert Naya", "seen", "10,08/2024"),
  createData("Grace Jackson", "seen", "10,08/2024"),
];

export default function AssigmentListLecturer() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell >
              <span className="font-semibold">StudentName</span>
            </StyledTableCell>
            <StyledTableCell align="right">
              <span className="font-semibold">Date Submitted</span>
            </StyledTableCell>
            <StyledTableCell align="right">
              <span className="font-semibold">Mark as seen</span>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.StudentName}
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

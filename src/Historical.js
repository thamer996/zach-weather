import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const Historical = () => {
  const rows = [
    {
      datetime: "2024-04-01T12:00:00Z",
      date: "2024-04-01TZ",
      // Assuming placeholder values for missing weather data
      temp: 22,
      feelslike: 22,
      humidity: 55,
      dew: 10,
      precip: 0,
      precipprot: 0,
      snow: 0,
      snowdepth: 0,
      preciptype: "none",
      windgust: 18,
      winspeed: 12,
      winddir: "NW",
      pressure: 1018,
      visibility: 10,
      cloudcover: 20,
      solarradiation: 550,
      solarenergy: 6,
      uvindex: 7,
      windspeed50: 16,
      windspeed80: 11,
      windspeed100: 6,
      winddir100: "NW",
      ghiradiation: 460,
      difradiation: 40,
      sunelevation: 50,
      severerisk: 5,
    },
    {
      datetime: "2024-04-01T12:00:00Z",
      date: "2024-04-01TZ",
      // Assuming placeholder values for missing weather data
      temp: 22,
      feelslike: 22,
      humidity: 55,
      dew: 10,
      precip: 0,
      precipprot: 0,
      snow: 0,
      snowdepth: 0,
      preciptype: "none",
      windgust: 18,
      winspeed: 12,
      winddir: "NW",
      pressure: 1018,
      visibility: 10,
      cloudcover: 20,
      solarradiation: 550,
      solarenergy: 6,
      uvindex: 7,
      windspeed50: 16,
      windspeed80: 11,
      windspeed100: 6,
      winddir100: "NW",
      ghiradiation: 460,
      difradiation: 40,
      sunelevation: 50,
      severerisk: 5,
    },
    // ... more rows
  ];

  const columns = [
    { id: "datetime", label: "datetime", minWidth: 150 },
    { id: "date", label: "date", minWidth: 50 },
    { id: "tetimeEpc", label: "tetimeEpc", minWidth: 50 },
    { id: "temp", label: "temp", minWidth: 50 },
    { id: "feelslike", label: "feelslike", minWidth: 50 },
    { id: "humidity", label: "humidity", minWidth: 50 },
    { id: "dew", label: "dew", minWidth: 50 },
    { id: "precip", label: "precip", minWidth: 50 },
    { id: "precipprot", label: "precipprot", minWidth: 50 },
    { id: "snow", label: "snow", minWidth: 50 },
    { id: "snowdepth", label: "snowdepth", minWidth: 50 },
    { id: "preciptype", label: "preciptype", minWidth: 50 },
    { id: "windgust", label: "windgust", minWidth: 50 },
    { id: "winspeed", label: "winspeed", minWidth: 50 },
    { id: "winddir", label: "winddir", minWidth: 50 },
    { id: "pressure", label: "Apressuree", minWidth: 50 },
    { id: "visibility", label: "visibility", minWidth: 50 },
    { id: "cloudcover", label: "cloudcover", minWidth: 50 },
    { id: "solarradiation", label: "solarradiation", minWidth: 50 },
    { id: "solarenergy", label: "solarenergy", minWidth: 50 },
    { id: "winddir", label: "winddir", minWidth: 50 },
    { id: "pressure", label: "pressure", minWidth: 50 },
    { id: "visibility", label: "visibility", minWidth: 50 },
    { id: "cloudcover", label: "cloudcover", minWidth: 50 },
    { id: "solarradiation", label: "Agsolarradiatione", minWidth: 50 },
    { id: "solarenergy", label: "solarenergy", minWidth: 50 },
    { id: "uvindex", label: "windspeed50", minWidth: 50 },
    { id: "windspeed50", label: "pressure", minWidth: 50 },
    { id: "windspeed80", label: "windspeed80", minWidth: 50 },
    { id: "windspeed100", label: "windspeed100", minWidth: 50 },
    { id: "winddir100", label: "winddir100", minWidth: 50 },
    { id: "ghiradiation", label: "ghiradiation", minWidth: 50 },
    { id: "difradiation", label: "difradiation", minWidth: 50 },
    { id: "sunelevation", label: "sunelevation", minWidth: 50 },
    { id: "severerisk", label: "severerisk", minWidth: 50 },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(-1); // Display all rows

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.datetime}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.tetimeEpc}</TableCell>
                <TableCell>{row.temp}</TableCell>
                <TableCell>{row.feelslike}</TableCell>
                <TableCell>{row.humidity}</TableCell>
                <TableCell>{row.dew}</TableCell>
                <TableCell>{row.precip}</TableCell>
                <TableCell>{row.precipprot}</TableCell>
                <TableCell>{row.snow}</TableCell>
                <TableCell>{row.snowdepth}</TableCell>
                <TableCell>{row.preciptype}</TableCell>
                <TableCell>{row.windgust}</TableCell>
                <TableCell>{row.winspeed}</TableCell>
                <TableCell>{row.winddir}</TableCell>
                <TableCell>{row.pressure}</TableCell>{" "}
                {/* Corrected from "Apressuree" */}
                <TableCell>{row.visibility}</TableCell>
                <TableCell>{row.cloudcover}</TableCell>
                <TableCell>{row.solarradiation}</TableCell>{" "}
                {/* Assuming "solarradiation" is correct */}
                <TableCell>{row.solarenergy}</TableCell>
                <TableCell>{row.uvindex}</TableCell>
                <TableCell>{row.windspeed50}</TableCell>
                <TableCell>{row.windspeed80}</TableCell>
                <TableCell>{row.windspeed100}</TableCell>
                <TableCell>{row.winddir100}</TableCell>
                <TableCell>{row.ghiradiation}</TableCell>
                <TableCell>{row.difradiation}</TableCell>
                <TableCell>{row.sunelevation}</TableCell>
                <TableCell>{row.severerisk}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 100, { value: -1, label: "All" }]} // Add 'All' option
      />
    </TableContainer>
  );
};

export default Historical;

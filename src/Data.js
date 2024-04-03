import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import axios from "axios";

import {
  faCloudShowersHeavy,
  faSnowflake,
  faWind,
  faTemperatureHigh,
  faSun,
  faCloud,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function Data() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const [selectedOption, setSelectedOption] = useState(""); // Maintient l'option sélectionnée

  const [weatherData, setWeatherData] = useState([]);
  const options = [
    "C Coast North",
    "C Coast South",
    "C Coast Tip",
    "C Corpus Christi",
    "E East Ex",
    "Houston Central",
    "Houston North",
    "Houston South",
    "N Far East",
    "N Seymour",
    "N Sherman",
    "N Wichita Falls",
    "NC Dallas Central",
    "NC Dallas East",
    "NC Dallas South",
    "NC Fort Worth",
    "NC West",
    "PH Amarillo NE",
    "PH Amarillo NW",
    "PH Amarillo S",
    "PH Plainview",
    "S NELOB",
    "S NELOB 2",
    "S San Antonio",
    "SC Austin Central",
    "SC Austin South",
    "SC Killeen",
    "W Abilene",
    "W Bigspring",
    "W Brady",
    "W Del Rio",
    "W Far Fort Stockton",
    "W Lubbock",
    "W McCamey",
    "W Odessa",
    "W San Angelo",
  ];

  const currentDate = new Date();

  const nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);

  const getDayOfWeek = (date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = async (event) => {
    const selectedPointName = event.target.value;
    setSelectedOption(selectedPointName);
    if (selectedPointName) {
      try {
        const response = await axios.post(
          "http://localhost:5000/download-weather",
          {
            point_name: selectedPointName,
          }
        );
        if (
          response.data &&
          response.data.days &&
          Array.isArray(response.data.days)
        ) {
          // Extraction des données météorologiques à partir du tableau 'days'
          const weatherDataFromDays = response.data.days
            .map((day) => day.hours)
            .flat();
          setWeatherData(weatherDataFromDays);
        } else {
          console.error("Invalid weather data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    } else {
      setWeatherData([]);
    }
  };

  const columns = [
    { id: "name", label: "Hour" },
    {
      id: "one",
      label: "Cloud Cover",
      minWidth: 15,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "two",
      label: "Solar Radiation",
      minWidth: 15,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "three",
      label: "Wind Gust",
      minWidth: 15,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "four",
      label: "Windspped",
      minWidth: 15,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "five",
      label: "Windspped50",
      minWidth: 15,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "six",
      label: "Windspped80",
      minWidth: 15,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "seven",
      label: "Windspped100",
      minWidth: 15,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    // Ajoutez d'autres colonnes ici selon vos besoins
  ];

  // Fonction pour créer les lignes de données à partir des données de l'API
  const createData = (hourData) => {
    return {
      name: hourData.datetime,
      one: hourData.cloudcover,
      two: hourData.solarradiation,
      three: hourData.windgust,
      four: hourData.windspeed,
      five: hourData.windspeed50,
      six: hourData.windspeed80,
      seven: hourData.windspeed100,

      // Ajoutez d'autres propriétés ici selon vos besoins
    };
  };

  // Créez le tableau rows à partir des données de l'API
  const rows = weatherData.map((hourData) => createData(hourData));

  return (
    <Paper style={{ width: "100%", overflow: "auto" }}>
      <FormControl fullWidth style={{ marginBottom: "20px" }}>
        <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
        <div>
          <select value={selectedOption} onChange={handleChange}>
            <option value="">Select a location</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </FormControl>
      <TableContainer style={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    padding: "5px",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ padding: "2px" }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[16, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default Data;

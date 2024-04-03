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
      label: "1",
      minWidth: 15, // Adjusted minWidth for Population
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "two",
      label: "2",
      minWidth: 15, // Adjusted minWidth for Population
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "three",
      label: "3",
      minWidth: 15, // Adjusted minWidth for Size
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "four",
      label: "4	",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "five",
      label: "5",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "six",
      label: "6",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "seven",
      label: "7",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "height",
      label: "8",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "nine",
      label: "9",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "ten",
      label: "10",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "eleven",
      label: "11",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "twelve",
      label: "12",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "therteen",
      label: "13",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "fourteen",
      label: "14",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "fifteen",
      label: "15",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "sixteen",
      label: "16",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "seventeen",
      label: "17",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "heighteen",
      label: "18",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "nineteen",
      label: "19",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "twenty",
      label: "20",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "twentyone",
      label: "21",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "twentytwo",
      label: "22",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "twentythree",
      label: "23",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "zero",
      label: "0",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "next day",
      label: "|",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "one",
      label: "1",
      minWidth: 1, // Adjusted minWidth for Population
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "two",
      label: "2",
      minWidth: 15, // Adjusted minWidth for Population
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "three",
      label: "3",
      minWidth: 15, // Adjusted minWidth for Size
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "four",
      label: "4	",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "five",
      label: "5",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "six",
      label: "6",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "seven",
      label: "7",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "height",
      label: "8",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "nine",
      label: "9",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "ten",
      label: "10",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "eleven",
      label: "11",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "twelve",
      label: "12",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "therteen",
      label: "13",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "fourteen",
      label: "14",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "fifteen",
      label: "15",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "sixteen",
      label: "16",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "seventeen",
      label: "17",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "heighteen",
      label: "18",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "nineteen",
      label: "19",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "twenty",
      label: "20",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "twentyone",
      label: "21",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "twentytwo",
      label: "22",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "twentythree",
      label: "23",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "zero",
      label: "0",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "next day",
      label: "|",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "one",
      label: "1",
      minWidth: 15, // Adjusted minWidth for Population
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "two",
      label: "2",
      minWidth: 15, // Adjusted minWidth for Population
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "three",
      label: "3",
      minWidth: 15, // Adjusted minWidth for Size
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "four",
      label: "4	",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "five",
      label: "5",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "six",
      label: "6",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "seven",
      label: "7",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "height",
      label: "8",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "nine",
      label: "9",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "ten",
      label: "10",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "eleven",
      label: "11",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "twelve",
      label: "12",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "therteen",
      label: "13",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "fourteen",
      label: "14",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "fifteen",
      label: "15",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "sixteen",
      label: "16",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "seventeen",
      label: "17",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "heighteen",
      label: "18",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "nineteen",
      label: "19",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "twenty",
      label: "20",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "twentyone",
      label: "21",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "twentytwo",
      label: "22",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "twentythree",
      label: "23",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "zero",
      label: "0",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "next day",
      label: "|",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "one",
      label: "1",
      minWidth: 15, // Adjusted minWidth for Population
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "two",
      label: "2",
      minWidth: 15, // Adjusted minWidth for Population
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "three",
      label: "3",
      minWidth: 15, // Adjusted minWidth for Size
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "four",
      label: "4	",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "five",
      label: "5",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "six",
      label: "6",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "seven",
      label: "7",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "height",
      label: "8",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "nine",
      label: "9",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "ten",
      label: "10",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "eleven",
      label: "11",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "twelve",
      label: "12",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "therteen",
      label: "13",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "fourteen",
      label: "14",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "fifteen",
      label: "15",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "sixteen",
      label: "16",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "seventeen",
      label: "17",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "heighteen",
      label: "18",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "nineteen",
      label: "19",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "twenty",
      label: "20",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "twentyone",
      label: "21",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "twentytwo",
      label: "22",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "twentythree",
      label: "23",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    {
      id: "zero",
      label: "0",
      minWidth: 15, // Adjusted minWidth for Density
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];

  const rows = [
    createData(
      "",
      <FontAwesomeIcon icon={faCloud} className="custom-icon" />,
      <FontAwesomeIcon
        icon={faSun}
        className="custom-icon"
        style={{ color: "yellow" }}
      />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />,
      <FontAwesomeIcon icon={faCloud} className="custom-icon" />,
      <FontAwesomeIcon
        icon={faSun}
        className="custom-icon"
        style={{ color: "yellow" }}
      />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />,
      <FontAwesomeIcon icon={faCloud} className="custom-icon" />,
      <FontAwesomeIcon
        icon={faSun}
        className="custom-icon"
        style={{ color: "yellow" }}
      />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />,
      <FontAwesomeIcon icon={faCloud} className="custom-icon" />,
      <FontAwesomeIcon
        icon={faSun}
        className="custom-icon"
        style={{ color: "yellow" }}
      />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />,
      <FontAwesomeIcon icon={faCloudShowersHeavy} className="custom-icon" />
    ),
    createData(
      <span className="badge badge-success">
        <FontAwesomeIcon icon={faTemperatureHigh} className="custom-icon" /> T°
      </span>,
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°"
    ),
    createData("Rain"),
    createData(
      "Wind",
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        20
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        20
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        20
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        20
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        20
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        20
      </div>,
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
        }}
      >
        5
      </div>,
      <div
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "lightblue",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "lightblue",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      61,
      31,
      31,
      31,
      31,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        20
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        20
      </div>,
      <div
        style={{
          backgroundColor: "lightblue",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        20
      </div>,
      31,
      32,
      2,
      2,
      2,
      2,
      2,
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        20
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        20
      </div>,
      2,
      2,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        20
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        20
      </div>,
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        20
      </div>,
      2,
      2,
      2,
      2,
      2,
      2,
      2
    ),
    createData(
      "Wind guts",
      <div
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        23
      </div>,
      <div
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
        }}
      >
        5
      </div>,
      <div
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>,
      <div
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "2px",
          borderRadius: "5px",
          marginLeft: "3px",
        }}
      >
        2
      </div>
    ),
    createData(
      "Wind dr",
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />,
      <FontAwesomeIcon icon={faArrowLeft} className="custom-icon" />
    ),
    createData(
      <span className="badge badge-success">windspeed </span>,
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°"
    ),
    createData(
      <span className="badge badge-success">pressure</span>,
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°"
    ),
    createData(
      <span className="badge badge-success">cloudcover</span>,
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°"
    ),
    createData(
      <span className="badge badge-success">visibility</span>,
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°"
    ),
    createData(
      <span className="badge badge-success">solarradiation</span>,
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°"
    ),
    createData(
      <span className="badge badge-success">solarenergy</span>,
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°",
      "13°"
    ),
  ];

  function createData(
    name,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    height,
    nine,
    ten,
    eleven,
    twelve,
    therteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    heighteen,
    nineteen,
    twenty,
    twentyone,
    twentytwo,
    twentythree,
    zero
  ) {
    return {
      name,
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      height,
      nine,
      ten,
      eleven,
      twelve,
      therteen,
      fourteen,
      fifteen,
      sixteen,
      seventeen,
      heighteen,
      nineteen,
      twenty,
      twentyone,
      twentytwo,
      twentythree,
      zero,
    };
  }

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
          <div>
            {weatherData.map((data, index) => (
              <div key={index}>
                <p>Date Time: {data.datetime}</p>
                <p>windgust: {data.windgust}</p>
                <p>winddir: {data.winddir}</p>
                <p>winddir50: {data.winddir50}</p>
                <p>winddir80: {data.winddir80}</p>
                <p>winddir100: {data.winddir100}</p>
                <p>windspeed: {data.windspeed}</p>
                <p>windspeed50: {data.windspeed}</p>
                <p>windspeed80: {data.windspeed80}</p>
                <p>windspeed100: {data.windspeed80}</p>
                <p>pressure: {data.pressure}</p>
                <p>cloudcover: {data.cloudcover}</p>
                <p>visibility: {data.visibility}</p>
                <p>solarradiation: {data.solarradiation}</p>
                <p>solarradiation: {data.solarradiation}</p>

                {/* Add other data fields as needed */}
              </div>
            ))}
          </div>
        </div>
      </FormControl>
      <TableContainer style={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          <thead>
            <TableCell
              colSpan={columns.length / 2}
              align="center"
              style={{
                fontWeight: "bold",
                fontSize: "1.2em",
                marginLeft: "200px",
              }}
            >
              {`${getDayOfWeek(
                currentDate
              )}, ${currentDate.toLocaleDateString()}`}{" "}
              {/* Display current day and date */}
            </TableCell>
            <TableCell
              colSpan={columns.length}
              align="center"
              style={{ fontWeight: "bold", fontSize: "1.2em" }}
            >
              {`${getDayOfWeek(nextDay)}, ${nextDay.toLocaleDateString()}`}{" "}
              {/* Display next day and date */}
            </TableCell>
            <TableCell
              colSpan={columns.length / 4.5}
              align="center"
              style={{
                fontWeight: "bold",
                fontSize: "1.2em",
                marginLeft: "200px",
              }}
            >
              {`${getDayOfWeek(
                currentDate
              )}, ${currentDate.toLocaleDateString()}`}{" "}
              {/* Display current day and date */}
            </TableCell>
            <TableCell
              colSpan={columns.length}
              align="center"
              style={{ fontWeight: "bold", fontSize: "1.2em" }}
            >
              {`${getDayOfWeek(nextDay)}, ${nextDay.toLocaleDateString()}`}{" "}
              {/* Display next day and date */}
            </TableCell>
          </thead>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    padding: "5px", // Adjusted horizontal padding
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
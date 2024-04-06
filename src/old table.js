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
import { useEffect } from "react";
import {
  faWalking,
  faRunning,
  faBiking,
  faCar,
  faBus,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCloudShowersHeavy,
  faSnowflake,
  faWind,
  faTemperatureHigh,
  faSun,
  faCloud,
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";

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

  const columns1 = [
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
  ];

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [weatherData1, setWeatherData1] = useState(null);
  const [error, setError] = useState(null);
  const handleChangeLocation = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleChangeDate = (event) => {
    setSelectedDate(event.target.value);
  };
  const [columns, setColumns] = useState([]);
  const fetchData = async (
    selectedLocation,
    selectedDate,
    setWeatherData1,
    setError
  ) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/download-weather",
        {
          point_name: selectedLocation,
          date: selectedDate,
        }
      );

      setWeatherData1(response.data);
      setError(null);
    } catch (error) {
      setError("Error fetching weather data");
      console.error(error);
    }
  };

  // Utiliser useEffect pour appeler fetchData lors de changements de selectedLocation ou selectedDate
  useEffect(() => {
    if (selectedLocation && selectedDate) {
      fetchData(selectedLocation, selectedDate, setWeatherData1, setError);
    } else {
      setError("Please select a location and date");
    }
  }, [selectedDate, selectedLocation]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedLocation && selectedDate) {
      // Vérifiez si les valeurs sont définies
      fetchData(selectedLocation, selectedDate, setWeatherData1, setError);
    } else {
      setError("Please select a location and date");
    }
  };
  const getWindDirectionIcon = (direction) => {
    if (direction >= 0 && direction < 45) {
      return <FontAwesomeIcon icon={faArrowUp} />;
    } else if (direction >= 45 && direction < 135) {
      return <FontAwesomeIcon icon={faArrowRight} />;
    } else if (direction >= 135 && direction < 225) {
      return <FontAwesomeIcon icon={faArrowDown} />;
    } else if (direction >= 225 && direction < 315) {
      return <FontAwesomeIcon icon={faArrowLeft} />;
    } else {
      return <FontAwesomeIcon icon={faArrowUp} />;
    }
  };
  const getPressureIcon = (pressure) => {
    if (pressure < 1000) {
      // Pression basse
      return (
        <FontAwesomeIcon icon={faTachometerAlt} style={{ color: "blue" }} />
      );
    } else if (pressure >= 1000 && pressure < 1010) {
      // Pression moyenne
      return (
        <FontAwesomeIcon icon={faTachometerAlt} style={{ color: "green" }} />
      );
    } else {
      // Pression élevée
      return (
        <FontAwesomeIcon icon={faTachometerAlt} style={{ color: "red" }} />
      );
    }
  };
  const getVisibilityIcon = (visibility) => {
    if (visibility >= 10) {
      return <FontAwesomeIcon icon={faWalking} />;
    } else if (visibility >= 5 && visibility < 10) {
      return <FontAwesomeIcon icon={faRunning} />;
    } else if (visibility >= 2 && visibility < 5) {
      return <FontAwesomeIcon icon={faBiking} />;
    } else if (visibility >= 1 && visibility < 2) {
      return <FontAwesomeIcon icon={faCar} />;
    } else {
      return <FontAwesomeIcon icon={faBus} />;
    }
  };
  const getWindGustIcon = (windGust) => {
    let color;
    if (windGust < 10) {
      color = "green";
    } else if (windGust >= 10 && windGust < 20) {
      color = "orange";
    } else {
      color = "red";
    }

    return (
      <div
        style={{
          backgroundColor: color,
          color: "white",
          padding: "5px",
          borderRadius: "5px",

          justifyContent: "center",
        }}
      >
        {windGust}
      </div>
    );
  };
  const getWindSpeedStyle = (windspeed) => {
    let color;

    if (windspeed < 10) {
      color = "green";
    } else if (windspeed >= 10 && windspeed < 20) {
      color = "orange";
    } else {
      color = "red";
    }

    return (
      <div
        style={{
          backgroundColor: color,

          padding: "5px",
          borderRadius: "5px",
          justifyContent: "center",
        }}
      >
        {windspeed}
      </div>
    );
  };
  const getHumidityIcon = (humidity) => {
    if (humidity < 30) {
      return <FontAwesomeIcon icon={faTint} style={{ color: "blue" }} />;
    } else if (humidity >= 30 && humidity < 70) {
      return <FontAwesomeIcon icon={faTint} style={{ color: "green" }} />;
    } else {
      return <FontAwesomeIcon icon={faTint} style={{ color: "red" }} />;
    }
  };
  const getDayOfWeek1 = (dateString) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    const dayOfWeekIndex = date.getDay();
    return daysOfWeek[dayOfWeekIndex];
  };

  return (
    <Paper style={{ width: "100%", overflow: "auto" }}>
      <FormControl fullWidth style={{ marginBottom: "20px" }}>
        <InputLabel id="demo-simple-select-label">Select Country</InputLabel>

        <div>
          <form onSubmit={handleSubmit}>
            <div></div>
            <input
              type="date"
              value={selectedDate}
              onChange={handleChangeDate}
              style={{ marginRight: "10px" }}
            ></input>
            <select value={selectedLocation} onChange={handleChangeLocation}>
              <option value="">Select a location</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </form>
          <div>{/* Vos autres éléments d'interface utilisateur */}</div>
        </div>
      </FormControl>
      <TableContainer style={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          {/*<thead>
            <TableCell
              colSpan={columns.length / 2}
              align="center"
              style={{
                fontWeight: "bold",
                fontSize: "1.2em",
                marginLeft: "200px",
              }}
            >
              {weatherData1 &&
              weatherData1.days &&
              weatherData1.days.length > 0 ? (
                <div style={{ display: "flex" }}>
                  {weatherData1.days.map((day) => (
                    <h5 key={day.datetime}>{day.datetime}</h5>
                  ))}
                </div>
              ) : (
                `${getDayOfWeek(
                  currentDate
                )}, ${currentDate.toLocaleDateString()}`
              )}
            </TableCell>
            </thead>*/}

          <TableHead>
            <TableRow>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    <TableCell
                      align="center"
                      colSpan={24}
                      style={{ fontWeight: "bold" }}
                    >
                      {" "}
                      {/* Colspan set to 24 to span all hours */}
                      {`${getDayOfWeek1(day.datetime)}, ${new Date(
                        day.datetime
                      ).toLocaleDateString()}`}
                    </TableCell>
                  </React.Fragment>
                ))}
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Hour</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.datetime}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>

            <TableRow>
              <TableCell>precip</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.precip > 0 ? (
                            <FontAwesomeIcon icon={faCloudShowersHeavy} />
                          ) : hour.cloudcover > 50 ? (
                            <FontAwesomeIcon
                              icon={faCloud}
                              style={{ color: "grey" }}
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faSun}
                              style={{ color: "yellow" }}
                            />
                          )}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell>
                {" "}
                <FontAwesomeIcon icon={faTemperatureHigh} />T
              </TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.temp}&deg;C
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> feelslike</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.feelslike}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> humidity</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {getHumidityIcon(hour.humidity)}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell style={{}}>Dew</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell
                          key={hourIndex}
                          align="right"
                          style={{ color: hour.dew > 20 ? "red" : "green" }}
                        >
                          {hour.dew}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>

            <TableRow>
              <TableCell> snow</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.snow > 0 ? (
                            <FontAwesomeIcon icon={faSnowflake} />
                          ) : (
                            <FontAwesomeIcon icon={faCloud} />
                          )}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> snowdepth</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.snowdepth}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> windgust</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {getWindGustIcon(hour.windgust)}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> windspeed</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {getWindSpeedStyle(hour.windspeed)}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> winddir</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {getWindDirectionIcon(hour.winddir)}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> pressure</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {getPressureIcon(hour.pressure)}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> visibility</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {getVisibilityIcon(hour.visibility)}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> cloudcover</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.cloudcover}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> solarradiation</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.solarradiation}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> solarenergy</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.solarenergy}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> uvindex</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.uvindex}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> severerisk</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.severerisk}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> windspeed50</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.windspeed50}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> winddir50</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.winddir50}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> windspeed80</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.windspeed80}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> winddir80</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.winddir80}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> windspeed100</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.windspeed100}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> winddir100</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.winddir100}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> ghiradiation</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.ghiradiation}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> dniradiation</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.dniradiation}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> difradiation</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.difradiation}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> gtiradiation</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.gtiradiation}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
            <TableRow>
              <TableCell> sunelevation</TableCell>
              {weatherData1 &&
                weatherData1.days &&
                weatherData1.days.length > 0 &&
                weatherData1.days.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    {day.hours &&
                      day.hours.map((hour, hourIndex) => (
                        <TableCell key={hourIndex} align="right">
                          {hour.sunelevation}
                        </TableCell>
                      ))}
                  </React.Fragment>
                ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[16, 25, 100]}
        component="div"
        //count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default Data;

import React, { useState } from "react";
import "../Event/Event.css";

function Event() {
  const [name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Region, setRegion] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [StartTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  function handleRegionChange(event) {
    setRegion(event.target.value);
  }
  function handleStartDateChange(event) {
    setStartDate(event.target.value);
  }
  function handleEndDateChange(event) {
    setEndDate(event.target.value);
  }
  function handleStartTimeChange(event) {
    setStartTime(event.target.value);
  }
  function handleEndTimeChange(event) {
    setEndTime(event.target.value);
  }

  const formData = {
    Name, Description, Region, StartDate, EndDate, StartTime, EndTime
  }

  

  return (
    <div className="Event-conttainer">
      <img
        id="Event-img"
        src="https://darvideo.tv/wp-content/uploads/2019/10/NGO-and-Non-Profit-Video-3.png"
        alt="Event"
      />
      <h1 id="Event-heading"> Create Event</h1>
      <p id="Event-head">Event Submission Form</p>
      <div class="Event-center">
        <form action="" method="post">
          <table>
            <tr>
              <td class="Event-cell">
                {" "}
                <label> Event Name </label>
              </td>
              <td class="Event-cell">
                {" "}
                <input
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={handleNameChange}
                  class="Event-input"
                  required
                />{" "}
              </td>
            </tr>
            <tr>
              <td class="Event-cell">
                {" "}
                <label> Description </label>
              </td>
              <td class="Event-cell">
                {" "}
                <textarea
                  type="text"
                  placeholder="Description"
                  class="Event-input"
                  value={Description}
                  onChange={handleDescriptionChange}
                  required
                />{" "}
              </td>
            </tr>
            <tr>
              <td class="Event-cell">
                {" "}
                <label> Region </label>
              </td>
              <td class="Event-cell">
                {" "}
                <input
                  type="text"
                  placeholder="Region"
                  class="Event-input"
                  value={Region}
                  onChange={handleRegionChange}
                  required
                />{" "}
              </td>
            </tr>
            <tr>
              <td class="Event-cell">
                {" "}
                <label> Start Date </label>
              </td>
              <td class="Event-cell">
                {" "}
                <input
                  type="date"
                  class="Event-input"
                  value={StartDate}
                  onChange={handleStartDateChange}
                  required
                />{" "}
              </td>
            </tr>
            <tr>
              <td class="Event-cell">
                {" "}
                <label> End Date </label>
              </td>
              <td class="Event-cell">
                {" "}
                <input
                  type="date"
                  class="Event-input"
                  value={EndDate}
                  onChange={handleEndDateChange}
                />
              </td>
            </tr>
            <tr>
              <td class="Event-cell">
                {" "}
                <label> Start Time </label>
              </td>
              <td class="Event-cell">
                {" "}
                <input
                  type="time"
                  class="Event-input"
                  value={StartTime}
                  onChange={handleStartTimeChange}
                  required
                />{" "}
              </td>
            </tr>
            <tr>
              <td class="Event-cell">
                {" "}
                <label> End Time </label>
              </td>
              <td class="Event-cell">
                {" "}
                <input
                  type="time"
                  class="Event-input"
                  value={EndTime}
                  onChange={handleEndTimeChange}
                />
              </td>
            </tr>
          </table>
          <button type="submit" name="button" id="Event-button">
            Submit for approval
          </button>
        </form>
      </div>
    </div>
  );
}
export default Event;

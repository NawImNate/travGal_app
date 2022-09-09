import React from "react";
import "../index.css";
import Button from "@mui/material/Button";

const Upload = () => {
  return (
    <div className="uploadContainer">
      <div className="left-wrapper">
        <h1>Show off fun times</h1>
        <Button variant="outlined" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <Button variant="outlined">Gallery</Button>
      </div>
      <div className="right-wrapper">
        {/* <h1>TWO</h1> */}
        <img alt="vaca" src={require("../images/vaca_1.jpg")} />
      </div>
    </div>
  );
};

export default Upload;

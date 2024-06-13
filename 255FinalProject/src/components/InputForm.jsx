import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const InputForm = ({ onSubmit }) => {
  const [formInput, setFormInput] = useState({
    serviceteamName: "",
    serviceteamProject: "",
    serviceteamDescription: "",
    serviceTeamAlarms: "",
    serviceteamDependencies: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formInput);
    setFormInput({
      serviceteamName: "",
      serviceteamProject: "",
      serviceteamDescription: "",
      serviceTeamAlarms: "",
      serviceteamDependencies: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mainform"
      style={{
        maxWidth: "90%",
        display: "block", 
        
      }}
    >

      <Typography variant="h3" sx={{ textAlign: "center", pb: 2 }}>Service team input form.</Typography>
      <Typography variant="h5" sx={{ textAlign: "center", pb: 2 }}>please fill in the information below to the best of your knowledge. </Typography>
      <TextField sx={{ width: "80%", pl: 1 }}
        name="serviceteamName"
        label="Service Team Name"
        value={formInput.serviceteamName}
        onChange={handleChange}
        
        
        className="TextField1"
        
        textAlign= "center"
      />
      <TextField sx={{ width: "80%", pl: 1 }} 
        name="serviceteamProject"
        label="Service Team Project"
        value={formInput.serviceteamProject}
        onChange={handleChange}
        fullWidth
        margin="normal"
        
      />
      <TextField sx={{ width: "80%", pl: 1 }}
        name="serviceteamDescription"
        label="Service Team Description"
        value={formInput.serviceteamDescription}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField sx={{ width: "80%", pl: 1 }}
        name="serviceTeamAlarms"
        label="Service Team Alarms"
        value={formInput.serviceTeamAlarms}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField sx={{ width: "80%", pl: 1 }}
        name="serviceteamDependencies"
        label="Service Team Dependencies"
        value={formInput.serviceteamDependencies}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ m: 5 }} >
        Submit
      </Button>
    </form>
  );
};

InputForm.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
  serviceteamName: PropTypes.string.isRequired,
};

InputForm.PropTypes = {
  onSubmit: "ServiceXYZ",
};

export default InputForm;

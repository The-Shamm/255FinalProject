import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, Typography, Paper, Button, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";
import ServiceTeamTable from "./components/table";
import InputForm from "./components/InputForm";
import Image from "./components/profileImage";

const serviceList = ["Service 1", "Service 2", "Service 3"];

function App() {
  const [formData, setFormData] = useState([]);
  const [mode, setMode] = useState("light");

  const handleSubmit = (formDataItem) => {
    setFormData((prevData) => [...prevData, formDataItem]);
  };

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Box bgcolor={"background.default"} color={"text.secondary"}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode} />
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route 
                path="/service-teams" 
                element={<InputForm onSubmit={handleSubmit} />} 
              />
              <Route path="/Team-Repo" element={<ServiceTeamTable data={formData} />} />
              {/* Add other routes as needed */}
            </Routes>
            
          </Stack>
          <Add />
          <Container>
            
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

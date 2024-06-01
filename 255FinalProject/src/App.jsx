import { useState } from "react";
import ServiceTeamTable from "./components/table";
import InputForm from "./components/InputForm";
import Image from "./components/profileImage";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import Navbar from "./components/Navbar";

const serviceList = ["Service 1", "Service 2", "Service 3"];

function App() {
  const [formData, setFormData] = useState([]);

  const handleSubmit = (formDataItem) => {
    setFormData((prevData) => [...prevData, formDataItem]);
  };

  return (
    <Container>
      <Box>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
         
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
      <Typography
        variant="h1"
        sx={{ my: 4, textAlign: "center", color: "primary.main" }}
      >
        This is a test. How am I doing?
      </Typography>
      <Typography variant="h2"> Overview</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
          pt: 4,
        }}
      >
        {serviceList.map((service) => (
          <Paper elevation={3} sx={{ width: { xs: 1, md: 320 } }}>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h3">{service}</Typography>
              <Typography sx={{ m: 2 }}>
                Lorem Ipsum a;lskdj f=pasdof psaokja sd;lfkj
                asdklofjapsdokfjas;lkdjfl;kj lkj kdjj0nmv woienpsdfoiulei
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, mx: 2, mb: 2, alignContent: "center" }}
                color="secondary"
              >
                {" "}
                Learn More
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
      Hello World
      <div className="app-container">
        <Box sx={{ border: "2px solid grey", bgcolor: "blue", p: 1 }}>
          <Image />
        </Box>

        <div>
          <Typography variant="h1">
            ***Creator notes for future feature releases***
          </Typography>
          <p>Here are some examples of links to other pages</p>
          <nav>
            <ul>
              <li>
                <a href="./profile">Profile page test</a>
                <br />
                <a href="profile">Phonebook page</a>
              </li>
            </ul>
          </nav>
        </div>
        <InputForm onSubmit={handleSubmit} />
        <ServiceTeamTable data={formData} />
      </div>
    </Container>
  );
}

export default App;

import {
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    TextField,
    Tooltip,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  
  import { Add as AddIcon, DateRange } from "@mui/icons-material";
  import { styled } from "@mui/material/styles";
  
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  const Add = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Tooltip
          title="Add"
          onClick={(e) => setOpen(true)}
          sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50% - 25px)", md: 30 },
          }}
        >
          <Fab size="medium" color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
        <StyledModal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            width={400}
            height={280}
            bgcolor="white"
            p={3}
            borderRadius={5}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              variant="h6"
              id="modal-title"
              color="secondary.main"
              textAlign="center"
            >
              Post update
            </Typography>
            <TextField
              id="filled-basic"
              label="What's the update?"
              variant="filled"
              sx={{ width: "100%", marginTop: 2 }}
            />
            <ButtonGroup
              variant="contained"
              sx={{ marginTop: 2 }} 
              textAlign="center"
            >
              <Button>Post</Button>
              <Button>
                <DateRange />
              </Button>
            </ButtonGroup>
          </Box>
        </StyledModal>
      </>
    );
  };
  
  export default Add;
  
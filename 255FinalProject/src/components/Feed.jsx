import { Box } from "@mui/material";
import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

// Define the ExpandMore styled component
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Feed = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box bgcolor="primary.main" flex={4} p={2}>
      <Typography variant="h3" sx={{ textAlign: "center", my: 2 }}>
        Major Updates Feed
      </Typography>

      <Card sx={{ m: 3 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              IdSec
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="ONSR Identity and Security"
          subheader="June 9th, 2024"
        />
        <CardMedia
          component="img"
          height="194" // Changed to a pixel value for proper display
          image="https://images.pexels.com/photos/2743739/pexels-photo-2743739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Head Down"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Announcement, Team X is beginning work on project y, you may
            encounter these specific issues. Please feel free to reach out for
            additional questions, 2 hours of downtime expected
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "secondary.main" }} />} // Corrected syntax for applying secondary color
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>JIRA TICKET:</Typography>
            <Typography paragraph>Current Zoom:</Typography>
            <Typography paragraph>
              Summary: Due to the scope of this work we expect service teams may
              possible experience XYZ when part b is upgraded. This is
              temporary.
            </Typography>
            <Typography variant="caption">
              For further information please contact: Doe John
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ m: 3 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              IdSec
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="ONSR Change Freeze"
          subheader="June 9th, 2024"
        />
        <CardMedia
          component="img"
          height="194" // Changed to a pixel value for proper display
          image="https://images.pexels.com/photos/219837/pexels-photo-219837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Head Down"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Announcement, The following cloud realms are currently being placed
            under change freeze. Please do not implement any tickets unless
            approved by SVP or higher. realms: X, Y, Z
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "secondary.main" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>JIRA TICKET:</Typography>
            <Typography paragraph>Current Zoom:</Typography>
            <Typography paragraph>
              Summary: Do the team X's work some tenancies are experiencing
              problems where XYZ is unresponsive. Due to the widespread and
              likely cause of this happening until a rollback is complete. The a
              change freeze has been issued.
            </Typography>
            <Typography variant="caption">
              ONSR Change management <br></br>
              Contact information: XXX-XXX-XXXX, <br></br>
              Headed by: John Doe
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default Feed;

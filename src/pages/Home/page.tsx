import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Button, Stack, Typography } from "@mui/material";
import {
  mainListItems,
  secondaryListItems,
} from "../../components/ListItem/ListDashboard";
import { AllCategory } from "../../layouts/Category/AllCategory";
import { useState } from "react";
const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function HomePage() {
  const [open] = React.useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            backgroundColor: "whitesmoke",
            pr: "24px",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Button href="/login" variant="contained" color="success">
              Login
            </Button>
            <Button href="/register" variant="outlined" color="success">
              Register
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* list item category */}
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            px: [1],
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
            }}
          >
            TODO LIST
          </Typography>
        </Toolbar>

        <List component="nav">
          {mainListItems({ handleCategoryClick })}
          <Divider />
          {secondaryListItems()}
        </List>
      </Drawer>

      <AllCategory selectedCategory={selectedCategory} />
    </Box>
  );
}

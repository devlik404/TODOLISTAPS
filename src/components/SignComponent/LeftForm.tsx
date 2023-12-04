import { Box, Typography } from "@mui/material";
import todlist from "../../assets/todlist.png";

const LeftComponent = () => {
  return (
    <>
      <Box sx={{ width: "100%", height: "100%", paddingLeft: 2 }}>
        <Box sx={{ width: "383px", height: "286px" }}>
          <Typography className="text" variant="h1" gutterBottom>
            TO DO LIST
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${todlist})`,
            backgroundRepeat: "no-repeat",
            height: "425px",
            width: "659px",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            // Responsive styling using CSS media queries
            "@media (max-width: 960px)": {
              width: "100%",
              height: "auto",
            },
          }}
        />
      </Box>
    </>
  );
};

export default LeftComponent;

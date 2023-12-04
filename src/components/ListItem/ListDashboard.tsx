import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { UseCategory } from "../../features/useTodo";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField, Button } from "@mui/material";

export const mainListItems = ({ handleCategoryClick }:any) => {
  const { category } = UseCategory();

  return (
    <>
      <ListItemButton  onClick={() => handleCategoryClick()}>
        <ListItemText primary="All Tasks" />
      </ListItemButton>
      {category.map((d) => (
        <ListItemButton key={d.id}  onClick={() => handleCategoryClick(d.name_category)}>
          <ListItemText primary={d.name_category} />
        </ListItemButton>
      ))}
    </>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const secondaryListItems = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { postTodoCat, handleChange } = UseCategory();
  return (
    <>
      <ListSubheader  color="inherit" onClick={handleOpen}>
       <Button>+ New Category</Button>
      </ListSubheader>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            noValidate
            onSubmit={postTodoCat}
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            autoComplete="off"
          >
            <TextField
              id="outlined-controlled"
              label="Category Days"
              name="name_category"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Category
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

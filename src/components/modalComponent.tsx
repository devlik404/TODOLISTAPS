import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, MenuItem, TextField } from "@mui/material";
import { UseTodoItem } from "../features/useTodoItem";
import { UseCategory } from "../features/useTodo";

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

const TransitionsModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { postTodoItem, handleChange } = UseTodoItem();
  const { category } = UseCategory();
  return (
    <div>
      <TextField
        onClick={handleOpen}
        margin="normal"
        fullWidth
        type="button"
        label="Add New a Day life"
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box
              component="form"
              noValidate
              onSubmit={postTodoItem}
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              autoComplete="off"
            >
              <TextField
                id="outlined-controlled"
                label="Title Days"
                name="title"
                onChange={handleChange}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Category"
                onChange={handleChange}
                name="category_id"
                helperText="Please select your Category"
              >
                {category.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name_category}
                  </MenuItem>
                ))}
              </TextField>
              <Button
              onClick={handleClose}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                
              >
                Add Days
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;

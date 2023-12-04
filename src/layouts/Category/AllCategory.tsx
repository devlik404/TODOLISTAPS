import {
  Box,
  Toolbar,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  ButtonProps,
  Checkbox,
  styled,
} from "@mui/material";
import TransitionsModal from "../../components/modalComponent";
import { UseTodoItem } from "../../features/useTodoItem";

const StyledCheckbox = styled(Checkbox)({
  "&.Mui-checked + .MuiFormControlLabel-label": {
    textDecoration: "line-through",
    color: "red",
  },
});

export const AllCategory = ({ selectedCategory }: any) => {

  const { listTodo, handleCheckboxChange, handleDelete } = UseTodoItem();

  //Filter the Todo list based on the selected category
  const filteredListTodo = selectedCategory
    ? listTodo.filter(
        (item) => item.category.name_category === selectedCategory
      )
    : listTodo;

    
  // collect id based on checbox status

  const handleDeleteButtonClick = () => {
    const selectedItems = listTodo.filter((item) => item.status);
    if (selectedItems.length > 0) {
      const itemIdsToDelete = selectedItems.map((item) => item.id);
      handleDelete(itemIdsToDelete);
    }
  };

  const getColorByCategory = (categoryName: string): string => {
    switch (categoryName.toLowerCase()) {
      case "sports":
        return "warning";
      case "favorites":
        return "primary";
      case "work":
        return "error";
      case "study":
        return "secondary";
      default:
        return "success";
    }
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />

        {/* right TODO */}
        <Container maxWidth="lg" sx={{ mb: 4 }}>
          <Typography
            color="inherit"
            fontSize={"50px"}
            fontWeight={700}
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {selectedCategory ?? "All Tasks"}
          </Typography>
          {listTodo.some((item) => item.status) && (
            <Button variant="outlined" color="error" onClick={handleDeleteButtonClick}>Delete Selected</Button>
          )}
          <TransitionsModal/>
          {filteredListTodo.map((data) => (
            <FormGroup key={data.id} aria-label="position">
              <FormControlLabel
                value="end"
                control={
                  <StyledCheckbox
                    checked={data.status}
                    onChange={() => handleCheckboxChange(data.id)}
                  />
                }
                label={
                  <>
                    {data.title}
                    <Button
                      variant="contained"
                      color={
                        getColorByCategory(
                          data.category.name_category
                        ) as ButtonProps["color"]
                      }
                      sx={{
                        m: 2,
                        borderRadius: "40px",
                        width: "101px",
                        height: "33px",
                      }}
                    >
                      {data.category.name_category}
                    </Button>
                  </>
                }
                labelPlacement="end"
              />
            </FormGroup>
          ))}
        </Container>
      </Box>
    </>
  );
};

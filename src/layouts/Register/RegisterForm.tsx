import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LeftComponent from "../../components/SignComponent/LeftForm";
import { useRegister } from "../../features/useRegister";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignUpSide() {

  const {handleSubmit,changeHandlerValidate} = useRegister()

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={false} sm={4} md={7}>
      <LeftComponent/>
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
        
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >  <Typography component="h1" variant="h5" mb={2}  fontSize={"20px"} fontWeight={500}>
          Welcome to To Do List 
          </Typography>
          <Typography component="h1" variant="caption" mb={5}>
          Please sign-up to your account, and start manage further
          </Typography>
          
             <Typography component="h1" variant="h5" fontSize={"20px"} fontWeight={500}>
         Sign Up
          </Typography>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              onChange={changeHandlerValidate}
              name="name"
              autoComplete="name"
              size="small"
            />
              <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              onChange={changeHandlerValidate}
              name="phone"
              autoComplete="phone"
              size="small"
            />
         
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              onChange={changeHandlerValidate}
              name="email"
              autoComplete="email"
              size="small"
             
            />
                 <TextField
              margin="normal"
              required
              fullWidth
              id="user_name"
              label="Username"
              onChange={changeHandlerValidate}
              name="user_name"
              autoComplete="user_name"
              size="small"
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={changeHandlerValidate}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              size="small"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="login" variant="body2" underline="none">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2" underline="none">
                  {"Account all Ready? Sign in"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

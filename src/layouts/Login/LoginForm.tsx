import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LeftComponent from "../../components/SignComponent/LeftForm";
import { useLogin } from "../../features/useLogin";

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

export default function SignInSide() {

 const {changeHandlerValidate,submitHandelValidate} = useLogin()

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
            onSubmit={submitHandelValidate}
            sx={{ mt: 1 }}
          >  <Typography component="h1" variant="h5" mb={2}>
          Welcome to To Do List 
          </Typography>
          <Typography component="h1" variant="caption" mb={5}>
          Please sign-in to your account, and start manage further
          </Typography>
          
             <Typography component="h1" variant="h5" fontSize={"20px"}>
         Sign In
          </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              onChange={changeHandlerValidate}
              name="email"
              autoComplete="email"
             
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" underline="none">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2" underline="none">
                  {"Don't have an account? Sign Up"}
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

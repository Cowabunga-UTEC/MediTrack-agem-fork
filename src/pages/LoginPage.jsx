import { Card, CardMedia, Box, TextField } from "@mui/material";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../css/PageLanding.css";
import appLogo from "../assets/MediTrack-logo.png";
import PropTypes from 'prop-types';
//import { useForm, useState } from 'react-hook-form';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function PageLanding() {
  const { loginWithRedirect } = useAuth0();
  const multiLineTitle = "Bienvenido a la aplicación de \n gestión de equipamiento médico";
  //const { setBlockScreen, setToken, setUser, setErrorMessage } = props;
	/*const { register, errors, handleSubmit } = useForm();
	const [validated, setValidated] = useState(false);
	const [loginForm, setLoginForm] = useState({
		'username': '',
		'password': ''
	});
	const requiredField = { required: true };

	const handleChange = (event) => {
		setLoginForm({
			...loginForm,
			[event.target.name]: event.target.value
		});
	};


  const onSubmit = (formData) => {
		
	};*/

  const onSubmit = (formData) => {
		
	};

  const handleChange = (event) => {
		
	};
  const handleSubmit = (event) => {
		
	};

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${appLogo})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "contained",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Bienvenidos a MediTrack 2.0
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
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
                  Ingresar
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
  </Container>
  );
}

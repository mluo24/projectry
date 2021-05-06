import { Button, Grid, InputAdornment, TextField, Typography, Link, Container } from '@material-ui/core';
import React from 'react';
import { AccountCircle, LockRounded } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  maincontent: {
    marginTop: theme.spacing(8),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
}));


const Login: React.FC = () => {

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
        <Grid item
          alignItems="center"
          direction="column"
          justify="space-between"
          className={classes.maincontent}
          >
          <div style={{ display: 'flex', flexDirection: 'column'}}>
              <Typography component="h1" variant="h4" align="center">
                Log In
              </Typography>
              <form  className={classes.form} noValidate>
                <TextField
                  label="Username"
                  margin="normal"
                  fullWidth
                  required
                  InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment> }} />
                <TextField label="Password" type="password" margin="normal" fullWidth
                  InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment> }} />
                <div style={{ height: 20 }} />
                <Button color="primary" variant="contained" fullWidth>
                  Log In
                </Button>
                <div style={{ height: 20 }} />
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      Need an account? Sign up.
                    </Link>
                  </Grid>
                </Grid>
              </form>
          </div>

          {/* <Grid container justify="center" spacing={2}>
            <Grid item>
              <Button>Go Back to Home</Button>
            </Grid>
          </Grid> */}
        </Grid>
      </Container>
  );

}

export default Login;
import { Button, Grid, InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import { AccountCircle, LockRounded } from '@material-ui/icons'


const Login: React.FC = () => {

  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid container item
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: 100 }}>
          <div />
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 300 }}>
            <Grid container justify="center">
              <img src=""  // maybe add a progectry logo?
                width={200}
                alt="logo"
              />
            </Grid>
            <TextField
              label="Username"
              margin="normal"
              InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment> }} />
            <TextField label="Password" margin="normal"
              InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment> }} />
            <div style={{ height: 20 }} />
            <Button color="primary" variant="contained">
              Log In
            </Button>
            <div style={{ height: 20 }} />
            <Button>Sign Up</Button>
          </div>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Button>Go Back to Home</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

}

export default Login;
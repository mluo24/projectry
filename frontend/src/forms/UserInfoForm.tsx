import { Container, Typography } from '@material-ui/core';
import React from 'react';

const UserInfoForm = () => {

    return (
        <Container maxWidth="md">
            <Typography gutterBottom align="center" variant="h3" component="h1">
                Edit User Info
            </Typography>
        </Container>
    );
    
}

export default UserInfoForm;
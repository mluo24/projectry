import { Container, Typography } from '@material-ui/core';
import React from 'react';

const PageNotFound = () => {

    return (
        <Container maxWidth="md">
            <Typography component="h2" variant="h1" align="center">
                404 Not Found
            </Typography>
            <Typography variant="subtitle1" align="center">
                Sorry, we couldn't find that page.
            </Typography>
        </Container>
    );

}

export default PageNotFound;
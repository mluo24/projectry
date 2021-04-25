import { Box, Card, CardContent, Container, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);
    
type category = {
    name : string,
    description : string
}

const CategoryCards = () => {

    const categoryCardList : category[] = [
    ];

    return (
        <div>
            {categoryCardList.map(({name, description}, index) => (
                <Card>
                    <CardContent key={name}>
                        {name}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

const Home = () => {

    return (
        <Box m={5}>
            <Container maxWidth="md">
                <Typography variant="h2" align="center">
                    Welcome to Projectry!
                </Typography>
                <CategoryCards />
            </Container>
        </Box>
    );
    
}

export default Home;
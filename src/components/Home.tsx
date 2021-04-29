import { Card, CardContent, Container, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);

type category = {
    name: string,
    description: string
}

const CategoryCards = () => {

    const categoryCardList: category[] = [
    ];

    return (
        <div>
            {categoryCardList.map(({ name, description }, index) => (
                <Card>
                    {/*for every two cards, start a new line*/}
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
        <Container maxWidth="md">
            <Typography component="h1" variant="h3" align="center">
                Welcome to Projectry!
            </Typography>
            <CategoryCards />
        </Container>
    );

}

export default Home;
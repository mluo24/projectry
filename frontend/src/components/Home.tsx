import { Card, CardContent, CardMedia, Container, Grid, Hidden, Link, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            display: "flex"
        },
        cardDetails: {
            flex: 1
        },
        cardMedia: {
            width: 160
        },
        spacingAdjustment: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        }
    }),
);


const categoryCardList = [
    {
        name: "Design",
        description: "Description placeholder",
        slug: "/projects/design"
    },
    {
        name: "Art",
        description: "Description placeholder",
        slug: "/projects/art"
    },
    {
        name: "Video",
        description: "Description placeholder",
        slug: "/projects/video"
    },
    {
        name: "Music",
        description: "Description placeholder",
        slug: "/projects/music"
    },
    {
        name: "Tech",
        description: "Description placeholder",
        slug: "/projects/tech"
    },
    {
        name: "Other",
        description: "Description placeholder",
        slug: "/proejects/other"
    }
];

const CategoryCards = () => {

    const classes = useStyles();

    return (
        <Grid container spacing={4} className={classes.spacingAdjustment}>
            {categoryCardList.map(({ name, description, slug }, index) => (
                <Grid item key={index} xs={12} md={6}>
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography variant="subtitle1">{name}</Typography>
                                <Typography variant="body2" paragraph>
                                    {description}
                                </Typography>
                                <Typography variant="subtitle2" color="primary">
                                    <Link href={slug}>See projects &rarr;</Link>
                                </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia
                                className={classes.cardMedia}
                                image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                title="Image title"
                            />
                        </Hidden>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

const Home = () => {

    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Typography component="h1" variant="h3" align="center">
                Welcome to Projectry!
        </Typography>
            <Typography component="h2" variant="h5" className={classes.spacingAdjustment}>
                Start exploring through some categories!
        </Typography>
            <CategoryCards />
        </Container>
    );

}

export default Home;
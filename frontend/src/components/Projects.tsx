import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import User, { user } from './User';
import { category } from './Header';

export type post = {
    title: string,
    user: user,
    description: string,
    category: category,
}


const useStyles = makeStyles((theme: Theme) =>

    createStyles({
        card: {
            display: "flex",
            maxWidth: 360,
            maxHeight: 360
        },
        cardDetails: {
            flex: 1
        },
        cardMedia: {
            width: 140,
            height: 140
        },
        spacingAdjustment: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        }
    }),
);



const Projects = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={4} className={classes.spacingAdjustment}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.cardMedia}
                        image=""
                        title="ios App Dev"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            iOS App Dev
            </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Social media app for college students.
                            Looking for technical and marketing team members.
            </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Button size="small" color="primary">
                        Learn More
            </Button>
                </CardActions>

            </Card>
        </Grid>

    );
}

export default Projects;

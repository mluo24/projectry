import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import User, { user } from '../User';
import { category } from '../Header';
import { project } from '../Post';
import { ProjectCardProps } from '../Projects';
import { ProjectCard } from '../Projects';

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
        },
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        }
    }),
);



type ProjectsProps = {
    readonly projects : project[]
}

const OtherProjects = ({projects} : ProjectsProps) => {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Typography gutterBottom align="center" variant="h4" component="h1">
                Other
            </Typography>

        <Grid container spacing={2}>
        {projects.filter(project => 
                project.category.name === "Other").map((project, index) => (
                <Grid item key={index} xs={12} md={4}>
                    <ProjectCard p={project}/>
                </Grid>
            ))}
        </Grid>
        </Container>
    );
}



export default OtherProjects;


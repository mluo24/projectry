import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import User, { user } from './User';
import { category } from './Header';
import { project, projectFirebase } from './Post';
import axios from 'axios';
import { useParams } from 'react-router';
import Main from './Main';

export type post = {
    title: string,
    user: user,
    description: string,
    category: category,
}

export type ProjectCardProps = {
    readonly p : projectFirebase
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
        },
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        }
    }),
);

// slugify title
function slugify(string : string) {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')
  
    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  }

export const ProjectCard = ({p} : ProjectCardProps) => {

    const classes = useStyles();

    const url = "/projects/" + p.id + "/" + slugify(p.title);

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                className={classes.media}
                image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                title="Image title"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {p.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {p.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={url}>
            Learn More
          </Button>
        </CardActions>
        </Card>
    );
}

type ParamTypes = {
    id : string,
    category : string
}

const Projects = () => {

    const {id, category} = useParams<ParamTypes>();

    const [projects, setProjects] = useState<readonly projectFirebase[]>([]);

    useEffect(() => {
        if (!id) {
            axios.get<readonly projectFirebase[]>('/getAllProjects').then(response => {
                setProjects(response.data);
            })
        }
        else {
            axios.get<readonly projectFirebase[]>(`/getProjectsByCategory/${id}`).then(response => {
                setProjects(response.data);
            })
        }
    }, [projects]);

    const classes = useStyles();

    return (
        <Main>
            <Container maxWidth="md">
                <Typography gutterBottom align="center" variant="h3" component="h1">
                    {!id ? "Project List" : "Projects from " + category.charAt(0).toUpperCase() + category.slice(1) }
                </Typography>

            <Grid container spacing={2}>
                {projects.map((project, index) => (
                    <Grid item key={index} xs={12} md={4}>
                        <ProjectCard p={project}/>
                    </Grid>
                ))}
            </Grid>
            </Container>
        </Main>
    );
}

export default Projects;


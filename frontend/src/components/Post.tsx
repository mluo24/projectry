// import type { Timestamp } from '@firebase/firestore-types';
import { Container, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import axios from 'axios';
import { firestore } from 'firebase-admin';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectNoID } from '../forms/CreateProjectForm';
import { category } from './Header';
import { user } from './User';

export type project = {
    id: string,
    title: string,
    user: user,
    description: string,
    category: category,
    timeCommitment: string,
    teamSize: number,
    toolsUsed: string,
    paid: boolean,
    fulfilled: boolean,
    dateCreated: string
}

export type projectFirebase = ProjectNoID & {
    id: string
}


// type Props = {
//     p: projectFirebase
// }

const Post = () => {

    const { id } = useParams<{ id: string }>();

    const [projectPost, setProjectPost] = useState<projectFirebase>({} as projectFirebase);
    const [user, setUser] = useState<user>({} as user);

    useEffect(() => {
        axios.get<projectFirebase>(`/getProjectById/${id}`).then(response => {
            setProjectPost(response.data);
        });
    }, [projectPost]);

    // useEffect(() => {
    //     axios.get<user>(`/getUserInfo/${projectPost.uid}`).then(response => {
    //         setUser(response.data);
    //     });
    // }, [user]);

    return (
        <Container maxWidth="md">
            <Typography component="h1" variant="h4" align="center">
                {projectPost.title}
            </Typography>
            {/* <Typography variant="subtitle2">
                Made on {projectPost.dateCreated.toDate().toString()}
            </Typography> */}
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Typography variant="body1">
                        {projectPost.description}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h5">
                        Additional Information
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText>
                                Time Commitment: {projectPost.timeCommitment}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Team Size: {projectPost.teamSize} {projectPost.teamSize === 1 ? "person" : "people"}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Tools Used: {projectPost.toolsUsed}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Paid?: {projectPost.paid ? "Yes" : "No"}
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    );

}

export default Post;
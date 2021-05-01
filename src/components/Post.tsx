import { Container, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import { category } from './Header';
import { user } from './User';

export type project = {
    id : number,
    title : string,
    user : user,
    description : string,
    category : category,
    timeCommitment : string,
    teamSize : number,
    toolsUsed : string,
    paid : boolean,
    fulfilled : boolean,
    dateCreated : string
}


type Props = {
    p : project
}

const Post = ({p} : Props) => {

    return (
        <Container maxWidth="md">
            <Typography component="h1" variant="h4" align="center">
                {p.title}
            </Typography>
            <Typography variant="subtitle2">
                Made by {p.user.firstName} {p.user.lastName} on {p.dateCreated}
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Typography variant="body1">
                        {p.description}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h5">
                        Additional Information
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText>
                                Time Commitment: {p.timeCommitment}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Team Size: {p.teamSize} {p.teamSize === 1 ? "person" : "people"}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Tools Used: {p.toolsUsed}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Paid?: {p.paid}
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    );

}

export default Post;
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import firebase from 'firebase';
import { firestore } from 'firebase-admin';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { category } from '../components/Header';
import { project, projectFirebase } from '../components/Post';


export type ProjectNoID = {
    title: string,
    uid: string,
    description: string,
    catid: string,
    timeCommitment: string,
    teamSize: number,
    toolsUsed: string[],
    paid: boolean,
    fulfilled: boolean,
    dateCreated: firestore.Timestamp
}

const CreateProjectForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [catid, setCatID] = useState("");
    const [timeCommitment, setTimeCommitment] = useState("");
    const [teamSize, setTeamSize] = useState(0);
    const [toolsUsed, setToolsUsed] = useState<string[]>([]);
    const [paid, setPaid] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");
    const [newProj, setNewProj] = useState<projectFirebase>({} as projectFirebase)

    const [categories, setCategories] = useState<category[]>([]);

    useEffect(() => {
        axios.get<category[]>('/getCategories').then(response => {
            setCategories(response.data);
        })
    }, [categories]);

    const createProject = async () => {
        const uid = firebase.auth().currentUser!.uid ? firebase.auth().currentUser!.uid : "";
        const newProject : ProjectNoID = {
            title: title,
            uid: uid,
            description: description,
            catid: catid,
            timeCommitment: timeCommitment,
            teamSize: teamSize,
            toolsUsed: toolsUsed,
            paid: paid,
            fulfilled: false,
            dateCreated: firestore.Timestamp.fromDate(new Date())
        };
        const {data} = await axios.post<string>('/createProject', newProject);
        if (data) {setRedirect(true); setNewProj({...newProject, id : data})}
        else {setError("An error occured.")}
    }

    if (redirect) {
        const id = newProj.id;
        const title = newProj.title;
        const url = "/projects/" + id + "/" + title
        return (
            <Redirect to={url} />
        )
    }

    else {
    return (
        <Container maxWidth="md">
            <Typography gutterBottom align="center" variant="h3" component="h1">
                Create New Project
            </Typography>
            <form noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <TextField name="title" label="Title" variant="outlined" autoFocus required fullWidth onChange={(e) => setTitle(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField name="description" label="Description" variant="outlined" multiline required fullWidth onChange={(e) => setDescription(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="category" label="Category" variant="outlined" SelectProps={{native: true}} select fullWidth onChange={(e) => setCatID(e.target.value)}>
                            {
                                categories.map((category) => {
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                })
                            }
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="timeCommitment" label="Time Commitment" variant="outlined" required fullWidth onChange={(e) => setTimeCommitment(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField name="teamSize" type="number" label="Team Size (people)" variant="outlined" required fullWidth onChange={(e) => setTeamSize(parseInt(e.target.value))}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField name="toolsUsed" label="Tools Used" variant="outlined" helperText="Separate multiple values with a comma" required fullWidth onChange={(e) => setToolsUsed(e.target.value.split(","))}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField name="paid" label="Paid?" variant="outlined" SelectProps={{native: true}} select required fullWidth onChange={(e) => setPaid(e.target.value == "true" ? true : false)}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </TextField>
                    </Grid>
                </Grid>
                <Button
                variant="contained"
                color="primary"
                onClick={() => createProject()}
                >
                Submit
                </Button>
            </form>
        </Container>
    );
                        }

}

export default CreateProjectForm;
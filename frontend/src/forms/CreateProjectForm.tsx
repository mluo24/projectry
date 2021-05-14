import { Container, Typography } from '@material-ui/core';
import firebase from 'firebase';
import React, { useState } from 'react';

const CreateProjectForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [catid, setCatID] = useState("");
    const [timeCommitment, setTimeCommitment] = useState("");
    const [teamSize, setTeamSize] = useState(0);
    const [toolsUsed, setToolsUsed] = useState([]);
    const [paid, setPaid] = useState(false);

    const createProject = async () => {
        const newProject = {};
    }

    return (
        <Container maxWidth="md">
            <Typography gutterBottom align="center" variant="h3" component="h1">
                Create New Project
            </Typography>
        </Container>
    );

}

export default CreateProjectForm;
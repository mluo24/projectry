import React from 'react';
//import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, Typography } from '@material-ui/core';

export type user = {
    id: number,
    firstName: string,
    lastName: string,
    password: string,
    interest: string,
    skills: string[],
    linkedInURL: string,
    dateAccountMade: string
}


const useStyles = makeStyles({
    tableContainer: {
        minWidth: 800,
        margin: "auto",
        marginTop: "5vh",
        borderWidth: 2,
        borderColor: "black",
        borderStyle: "solid",
    },

});

function createData(
    id: number,
    firstName: string,
    lastName: string,
    password: string,
    interest: string,
    skills: string,
    linkedInURL: string,
    dateAccountMade: string) {
    return { id, firstName, lastName, password, interest, skills, linkedInURL, dateAccountMade };
}


const rows = [
    createData(123456, "Andy", "Rotherom", "xxxxx", "music", "production", "www.linkedin.com/andy-rotherom", "08/11/2019")
];

const User = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Typography component="h1" variant="h4" align="center">
                User Profile
              </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.tableContainer} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User</TableCell>
                            <TableCell align="center">First Name</TableCell>
                            <TableCell align="center">Last Name</TableCell>
                            <TableCell align="center">Password</TableCell>
                            <TableCell align="center">Interest</TableCell>
                            <TableCell align="center">Skills</TableCell>
                            <TableCell align="center">LinkedIn</TableCell>
                            <TableCell align="center">Date Account Created</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center">{row.firstName}</TableCell>
                                <TableCell align="center">{row.lastName}</TableCell>
                                <TableCell align="center">{row.password}</TableCell>
                                <TableCell align="center">{row.interest}</TableCell>
                                <TableCell align="center">{row.skills}</TableCell>
                                <TableCell align="center">{row.linkedInURL}</TableCell>
                                <TableCell align="center">{row.dateAccountMade}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default User;
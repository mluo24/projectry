import React from 'react';
import admin from 'firebase-admin';
import firebase from 'firebase/app';
import express from 'express';

const serviceAccount = require('../service-account.json');

// initialize firebase app
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const Authentication = () => {

    return (
        <div>
        </div>
    );

}

export default Authentication;
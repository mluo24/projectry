import admin from 'firebase-admin';
import express from 'express';

const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
const port = 8080;
app.use(express.json());
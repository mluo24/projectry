"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import type { Timestamp } from '@firebase/firestore-types';
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const express_1 = __importDefault(require("express"));
const serviceAccount = require('../service-account.json');
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
});
const db = firebase_admin_1.default.firestore();
const app = express_1.default();
const port = 8080;
app.use(express_1.default.json());
// dbs
const usersCollection = db.collection('users');
const ratingsCollection = db.collection('ratings');
const projectsCollection = db.collection('projects');
const categoriesCollection = db.collection('categories');
// check connections
app.get('/', (_, res) => {
    res.send('connected!');
});
// endpoints
app.get('/getAllProjects', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projectsSnapshot = yield projectsCollection.where("fulfilled", "==", false).orderBy('dateCreated', 'desc').get();
    const allProjectsDoc = projectsSnapshot.docs;
    const projects = [];
    for (let doc of allProjectsDoc) {
        const project = doc.data();
        project.id = doc.id;
        projects.push(project);
    }
    res.send(projects);
}));
app.get('/getCategories', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoriesSnapshot = yield categoriesCollection.get();
    const allCategoriesDoc = categoriesSnapshot.docs;
    const categories = [];
    for (let doc of allCategoriesDoc) {
        const category = doc.data();
        category.id = doc.id;
        categories.push(category);
    }
    res.send(categories);
}));
app.get('/getProjectsByCategory/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const catid = req.params.id;
    const projectsSnapshot = yield projectsCollection.where("catid", "==", catid).orderBy('dateCreated', 'desc').get();
    const projectsDoc = projectsSnapshot.docs;
    const projects = [];
    for (let doc of projectsDoc) {
        const project = doc.data();
        project.id = doc.id;
        projects.push(project);
    }
    res.send(projects);
}));
app.get('/getProjectById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const projectsSnapshot = yield projectsCollection.doc(id).get();
    const project = projectsSnapshot.data();
    console.log(project.dateCreated);
    res.send(project);
}));
// make a new project
app.post('/createProject', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const project = req.body;
    const projectDoc = projectsCollection.doc();
    yield projectDoc.set(project);
    res.send(projectDoc.id);
}));
app.post('/updateProject/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProject = req.body;
    const id = req.params.id;
    yield projectsCollection.doc(id).update(updatedProject);
    res.send(updatedProject);
}));
// delete song
app.delete('/deleteProject/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    yield projectsCollection.doc(id).delete();
    res.send(id);
}));
app.get('/getUserInfo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const usersSnapshot = yield usersCollection.doc(id).get();
    const user = usersSnapshot.data();
    const ratingsSnapshot = yield ratingsCollection.where("uidFor", "==", id).orderBy('dateCreated', 'desc').get();
    const ratingsDoc = ratingsSnapshot.docs;
    const ratings = [];
    for (let doc of ratingsDoc) {
        const rating = doc.data();
        rating.id = doc.id;
        ratings.push(rating);
    }
    user.ratings = ratings;
    const projectsSnapshot = yield projectsCollection.where("uid", "==", id).orderBy('dateCreated', 'desc').get();
    const projectsDoc = projectsSnapshot.docs;
    const projects = [];
    for (let doc of projectsDoc) {
        const project = doc.data();
        project.id = doc.id;
        projects.push(project);
    }
    user.projects = projects;
    res.send(user);
}));
app.post('/createUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const userDoc = usersCollection.doc();
    yield userDoc.set(user);
    res.send(userDoc.id);
}));
app.post('/updateUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = req.body;
    const id = req.params.id;
    yield usersCollection.doc(id).update(updatedUser);
    res.send(updatedUser);
}));
app.post('/deleteUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    yield usersCollection.doc(id).delete();
    res.send(id);
}));
app.post('/createRating', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rating = req.body;
    const ratingDoc = ratingsCollection.doc();
    yield ratingDoc.set(rating);
    res.send(ratingDoc.id);
}));
app.post('/getRatingByID/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const ratingsSnapshot = yield ratingsCollection.doc(id).get();
    const rating = ratingsSnapshot.data();
    res.send(rating);
}));
app.post('/updateRating/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedRating = req.body;
    const id = req.params.id;
    yield ratingsCollection.doc(id).update(updatedRating);
    res.send(updatedRating);
}));
app.delete('/deleteRating/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    yield ratingsCollection.doc(id).delete();
    res.send(id);
}));
app.listen(port, () => console.log(`listening on port ${port}!`));

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

// declaring types
type Project = {
  title: string,
  uid: string,
  description: string,
  catid: string,
  timeCommitment: string,
  teamSize: number,
  toolsUsed: string[],
  paid: boolean,
  fulfilled: boolean,
  dateCreated: string
}

type ProjectWithID = Project & {
  id : string
}

type Category = {
  name: string,
  description: string,
  slug: string
}

type CategoryWithID = Category & {
  id : string
}

// dbs
const usersCollection = db.collection('users');
const projectsCollection = db.collection('projects');
const categoriesCollection = db.collection('categories');

// check connections
app.get('/', (_, res) => {
  res.send('connected!');
});

// endpoints
app.get('/getAllProjects', async (_, res) => {
  const projectsSnapshot = await projectsCollection.orderBy('dateCreated', 'asc').get();
  const allProjectsDoc = projectsSnapshot.docs;
  const projects : ProjectWithID[] = [];
  for (let doc of allProjectsDoc) {
    const project : ProjectWithID = doc.data() as ProjectWithID;
    project.id = doc.id;
    projects.push(project);
  }
  res.send(projects);
});

app.get('/getCategories', async (_, res) => {
  const categoriesSnapshot = await categoriesCollection.get();
  const allCategoriesDoc = categoriesSnapshot.docs;
  const categories : CategoryWithID[] = [];
  for (let doc of allCategoriesDoc) {
    const category : CategoryWithID = doc.data() as CategoryWithID;
    category.id = doc.id;
    categories.push(category);
  }
  res.send(categories);
});

app.get('/getProjectsByCategory/:id', async (req, res) => {
  const catid = req.params.id;
  const projectsSnapshot = await projectsCollection.where("catid", "==", catid).orderBy('dateCreated', 'asc').get();
  const projectsDoc = projectsSnapshot.docs;
  const projects : ProjectWithID[] = [];
  for (let doc of projectsDoc) {
    const project : ProjectWithID = doc.data() as ProjectWithID;
    project.id = doc.id;
    projects.push(project);
  }
});

// make a new project
app.post('/createProject', async (req, res) => {
  const project : Project  = req.body;
  const projectDoc = projectsCollection.doc();
  await projectDoc.set(project);
  res.send(projectDoc.id)
});

app.post('/updateProject/:id', async (req, res) => {
  const updatedProject : Project = req.body;
  const id : string = req.params.id;
  await projectsCollection.doc(id).update(updatedProject);
  res.send(updatedProject);
  // // create without the ID
  // const {id, ...updatedRating} = req.body;
  // const songID : string = req.body.id;
  // await songsCollection.doc(songID).update(updatedRating);
  // res.send('updated');
});

// delete song
app.delete('/deleteProject/:id', async (req, res) => {
  const id = req.params.id;
  await projectsCollection.doc(id).delete();
  res.send(id)
});

app.get('/getUserInfo/:id', async (req, res) => {
  
});

app.post('/createRating', async (req, res) => {
  
});

app.post('/updateRating/:id', async (req, res) => {
  
});

app.delete('/deleteRating/:id', async (req, res) => {
  
});

app.listen(port, () => console.log(`listening on port ${port}!`));

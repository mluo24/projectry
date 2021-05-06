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

type Rating = {
  uid : string,
  uidFor : string,
  title : string,
  rating : number,
  body: string,
  type : string,
  dateCreated : string
}

type RatingWithID = Rating & {
  id : string
}

type User = {
  firstname : string,
  lastname: string,
  username : string,
  password: string,
  email : string,
  areaOfInterest : string,
  dateMade: string,
  skills: string[],
  url : string
}

type UserWithID = User & {
  id : string
}


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
app.get('/getAllProjects', async (_, res) => {
  const projectsSnapshot = await projectsCollection.where("fulfilled", "==", false).orderBy('dateCreated', 'desc').get();
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
  const projectsSnapshot = await projectsCollection.where("catid", "==", catid).orderBy('dateCreated', 'desc').get();
  const projectsDoc = projectsSnapshot.docs;
  const projects : ProjectWithID[] = [];
  for (let doc of projectsDoc) {
    const project : ProjectWithID = doc.data() as ProjectWithID;
    project.id = doc.id;
    projects.push(project);
  }
  res.send(projects);
});

app.get('/getProjectById/:id', async (req, res) => {
  const id = req.params.id;
  const projectsSnapshot = await projectsCollection.doc(id).get();
  const project: ProjectWithID = projectsSnapshot.data() as ProjectWithID;
  res.send(project);
});

// make a new project
app.post('/createProject', async (req, res) => {
  const project : Project  = req.body;
  const projectDoc = projectsCollection.doc();
  await projectDoc.set(project);
  res.send(projectDoc.id);
});

app.post('/updateProject/:id', async (req, res) => {
  const updatedProject : Project = req.body;
  const id : string = req.params.id;
  await projectsCollection.doc(id).update(updatedProject);
  res.send(updatedProject);
});

// delete song
app.delete('/deleteProject/:id', async (req, res) => {
  const id = req.params.id;
  await projectsCollection.doc(id).delete();
  res.send(id);
});

app.get('/getUserInfo/:id', async (req, res) => {

  const id = req.params.id;
  const usersSnapshot = await usersCollection.doc(id).get();
  const user: {[k: string]: any} = usersSnapshot.data() as UserWithID;

  const ratingsSnapshot = await ratingsCollection.where("uidFor", "==", id).orderBy('dateCreated', 'desc').get();
  const ratingsDoc = ratingsSnapshot.docs;
  const ratings : RatingWithID[] = [];
  for (let doc of ratingsDoc) {
    const rating : RatingWithID = doc.data() as RatingWithID;
    rating.id = doc.id;
    ratings.push(rating);
  }
  user.ratings = ratings;

  const projectsSnapshot = await projectsCollection.where("uid", "==", id).orderBy('dateCreated', 'desc').get();
  const projectsDoc = projectsSnapshot.docs;
  const projects : ProjectWithID[] = [];
  for (let doc of projectsDoc) {
    const project : ProjectWithID = doc.data() as ProjectWithID;
    project.id = doc.id;
    projects.push(project);
  }
  user.projects = projects;

  res.send(user);

});

app.post('/createUser', async (req, res) => {
  const user : User  = req.body;
  const userDoc = usersCollection.doc();
  await userDoc.set(user);
  res.send(userDoc.id);
});

app.post('/updateUser', async (req, res) => {
  const updatedUser : User = req.body;
  const id : string = req.params.id;
  await usersCollection.doc(id).update(updatedUser);
  res.send(updatedUser);
});

app.post('/deleteUser', async (req, res) => {
  const id = req.params.id;
  await usersCollection.doc(id).delete();
  res.send(id);
});

app.post('/createRating', async (req, res) => {
  const rating : Rating  = req.body;
  const ratingDoc = ratingsCollection.doc();
  await ratingDoc.set(rating);
  res.send(ratingDoc.id);
});

app.post('/getRatingByID/:id', async (req, res) => {
  const id = req.params.id;
  const ratingsSnapshot = await ratingsCollection.doc(id).get();
  const rating: RatingWithID = ratingsSnapshot.data() as RatingWithID;
  res.send(rating);
});

app.post('/updateRating/:id', async (req, res) => {
  const updatedRating : Rating = req.body;
  const id : string = req.params.id;
  await ratingsCollection.doc(id).update(updatedRating);
  res.send(updatedRating);
});

app.delete('/deleteRating/:id', async (req, res) => {
  const id = req.params.id;
  await ratingsCollection.doc(id).delete();
  res.send(id);
});

app.listen(port, () => console.log(`listening on port ${port}!`));

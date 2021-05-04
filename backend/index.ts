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

// type Song = {
//   name: string;
//   artist: string;
//   rating: number
// };

// type SongWithID = Song & {
// id: string;
// };

// const songsCollection = db.collection('songs');

// check connections
app.get('/', (_, res) => {
  res.send('connected!');
});

app.get('/getAllProjects', async (_,res) => {
  // const songsSnapshot = await songsCollection.get();
  // const allSongsDoc = songsSnapshot.docs;
  // const songs: SongWithID[] = [];
  // for (let doc of allSongsDoc) {
  //     const song: SongWithID = doc.data() as SongWithID;
  //     song.id = doc.id;
  //     songs.push(song);
  // }
  // res.send(songs);
});

// make a new song
app.post('/createProject', async (req, res) => {
  // const song : Song  = req.body;
  // const songDoc = songsCollection.doc();
  // await songDoc.set(song);
  // res.send(songDoc.id)
});

// update song's rating
app.post('/updateProject', async (req, res) => {
  // // create without the ID
  // const {id, ...updatedRating} = req.body;
  // const songID : string = req.body.id;
  // await songsCollection.doc(songID).update(updatedRating);
  // res.send('updated');
});

// delete song
app.delete('/deleteProject', async (req, res) => {
  // const id = req.query.id;
  // await songsCollection.doc(id).delete();
});

app.get('/getUser', async (_,res) => {
  
});

app.post('/createRating', async (req, res) => {
  
});

app.post('/updateRating', async (req, res) => {
  
});

app.delete('/deleteRating', async (req, res) => {
  
});

app.listen(port, () => console.log(`listening on port ${port}!`));

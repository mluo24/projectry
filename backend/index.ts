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

// check connections
app.get('/', (_, res) => {
  res.send('connected!');
});

app.get('/getSongs', async (_,res) => {
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

app.listen(port, () => console.log(`listening on port ${port}!`));

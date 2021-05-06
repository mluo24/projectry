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
app.get('/getAllProjects', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const songsSnapshot = await songsCollection.get();
    // const allSongsDoc = songsSnapshot.docs;
    // const songs: SongWithID[] = [];
    // for (let doc of allSongsDoc) {
    //     const song: SongWithID = doc.data() as SongWithID;
    //     song.id = doc.id;
    //     songs.push(song);
    // }
    // res.send(songs);
}));
// make a new song
app.post('/createProject', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const song : Song  = req.body;
    // const songDoc = songsCollection.doc();
    // await songDoc.set(song);
    // res.send(songDoc.id)
}));
// update song's rating
app.post('/updateProject', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // // create without the ID
    // const {id, ...updatedRating} = req.body;
    // const songID : string = req.body.id;
    // await songsCollection.doc(songID).update(updatedRating);
    // res.send('updated');
}));
// delete song
app.delete('/deleteProject', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const id = req.query.id;
    // await songsCollection.doc(id).delete();
}));
app.get('/getUser', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
app.post('/createRating', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
app.post('/updateRating', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
app.delete('/deleteRating', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
app.listen(port, () => console.log(`listening on port ${port}!`));

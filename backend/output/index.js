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
// check connections
app.get('/', (_, res) => {
    res.send('connected!');
});
app.get('/getSongs', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
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
app.listen(port, () => console.log(`listening on port ${port}!`));

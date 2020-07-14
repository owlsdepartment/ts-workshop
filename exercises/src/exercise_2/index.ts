import moment, { duration } from "moment"
import { play } from "./playSong";
import { Song, Queue, Playlist } from "./models";

const song: Song = {
    name: "Never Gonna Give You Up",
    released: moment().year(1987),
    duration: 213
}
const queue: Queue = [song, song, song]
const playlist: Playlist = {
    name: "Best playlist ever!",
    description: "This playlist will never give you up",
    created: moment(),
    songs: queue
}

export default function main() {
    // TODO: odkomentuj
    // play(song);
    // play(queue);
    // play(playlist);
}

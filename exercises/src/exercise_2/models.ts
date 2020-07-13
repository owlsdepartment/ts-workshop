import { Moment } from "moment";

export interface Song {
    name: string;
    released: Moment;
    duration: number;
}

export type Queue = Song[];

export interface Playlist {
    name: string;
    description: string;
    created: Moment;
    songs: Song[]
}

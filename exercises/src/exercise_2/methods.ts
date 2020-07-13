import { Song, Queue, Playlist } from "./models";

const formatStr = "Do MMM YYYY"

export function printSong({ name, released, duration }: Song) {
    console.log(`Playing song '${name}' from ${released.year()}. Duration: ${duration}`)
}

export function printQueue(queue: Queue) {
    if (queue.length > 0) {
        printSong(queue[0])
    }

    if (queue.length > 1) {
        console.log("In queue:")
        for (const { name, duration } of queue.slice(1)) {
            console.log(` * ${name} | ${duration}`)
        }
    }
}

export function printPlaylist(playlist: Playlist) {
    console.log(`[ Playlist ]`)
    console.log(`${playlist.name}`)
    console.log(`${playlist.description}`)
    console.log(`Created: ${playlist.created.format(formatStr)}`)
    console.log(`Songs: `)
    for (const { name, duration } of playlist.songs) {
        console.log(` * ${name} | ${duration}`)
    }
}

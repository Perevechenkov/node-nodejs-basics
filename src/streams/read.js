import { createReadStream } from 'node:fs';
import path from 'node:path';
import getDir from '../getDir.js';

const { __dirname } = getDir(import.meta.url);

const read = async () => {
    const targetFilePath = path.join(__dirname, 'files', 'fileToRead.txt');

    const rs = createReadStream(targetFilePath);

    rs.on('data', chunk => {
        process.stdout.write(chunk);
    });

    rs.on('error', err => {
        console.log(err);
        process.exit();
    });

    rs.on('end', () => {
        process.exit();
    });
};

await read();

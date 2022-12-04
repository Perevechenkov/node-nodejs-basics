import { readFile } from 'node:fs/promises';
import path from 'node:path';
import getDir from '../getDir.js';

const { __dirname } = getDir(import.meta.url);

const read = async () => {
    const targetFilePath = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        const content = await readFile(targetFilePath, { encoding: 'utf8' });
        console.log(content);
    } catch (err) {
        console.log(err.message);
        if (err.code === 'ENOENT') throw new Error('FS operation failed');
    }
};

await read();

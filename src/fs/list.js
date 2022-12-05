import { readdir } from 'node:fs/promises';
import path from 'node:path';
import getDir from '../getDir.js';

const { __dirname } = getDir(import.meta.url);

const list = async () => {
    const targetDirPath = path.join(__dirname, 'files');

    try {
        const files = await readdir(targetDirPath);

        for (const file of files) {
            console.log(file);
        }
    } catch (err) {
        console.log(err.message);
        if (err.code === 'ENOENT') throw new Error('FS operation failed');
    }
};

await list();

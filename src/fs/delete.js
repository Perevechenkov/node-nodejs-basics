import { unlink } from 'node:fs/promises';
import path from 'node:path';
import getDir from '../getDir.js';

const { __dirname } = getDir(import.meta.url);

const remove = async () => {
    const targetFilePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await unlink(targetFilePath);
    } catch (err) {
        console.log(err.message);
        if (err.code === 'ENOENT') throw new Error('FS operation failed');
    }
};

await remove();

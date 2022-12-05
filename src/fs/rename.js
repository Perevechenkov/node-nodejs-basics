import fs from 'node:fs/promises';
import path from 'node:path';
import getDir from '../getDir.js';

const { __dirname } = getDir(import.meta.url);

const rename = async () => {
    const targetFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newFilePath = path.join(__dirname, 'files', 'properFilename.md');

    try {
        if (await fs.stat(newFilePath)) throw { code: 'EEXIST', message: `${newFilePath} already exists` };;
        await fs.rename(targetFilePath, newFilePath);
    } catch (err) {
        console.log(err.message);
        if (['EEXIST', 'ENOENT'].includes(err.code))
            throw new Error('FS operation failed');
    }
};

await rename();

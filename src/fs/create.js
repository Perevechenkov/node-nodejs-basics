import fs from 'node:fs/promises';
import path from 'node:path';
import getDir from '../getDir.js';

const { __dirname } = getDir(import.meta.url);

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    try {
        await fs.appendFile(filePath, 'I am fresh and young', { flag: 'ax' });
        console.log('new file created');
    } catch (err) {
        console.log(err.message);
        if (err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
    }
};

await create();

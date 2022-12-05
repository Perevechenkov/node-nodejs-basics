import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import getDir from '../getDir.js';

const { __dirname } = getDir(import.meta.url);

const calculateHash = async () => {
    const targetDirPath = path.join(
        __dirname,
        'files',
        'fileToCalculateHashFor.txt'
    );

    const content = await readFile(targetDirPath);

    console.log(createHash('SHA256').update(content).digest('hex'));
};

await calculateHash();

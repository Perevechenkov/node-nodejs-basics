import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import getDir from '../getDir.js';

const { __dirname } = getDir(import.meta.url);
const pipe = promisify(pipeline);

const decompress = async () => {
    const srcFilePath = path.join(__dirname, 'files', 'archive.gz');
    const destFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

    const src = createReadStream(srcFilePath);
    const dest = createWriteStream(destFilePath);
    const gzip = createUnzip();

    try {
        await pipe(src, gzip, dest);
    } catch (err) {
        console.log(err.message);
    }
};

await decompress();

import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import getDir from '../getDir.js';

const { __dirname } = getDir(import.meta.url);
const pipe = promisify(pipeline);

const compress = async () => {
    const srcFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const destFilePath = path.join(__dirname, 'files', 'archive.gz');

    const src = createReadStream(srcFilePath);
    const dest = createWriteStream(destFilePath);
    const gzip = createGzip();

    await pipe(src, gzip, dest);
};

await compress();

import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

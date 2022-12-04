import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const targetFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newFilePath = path.join(__dirname, 'files', 'properFilename.md');

    try {
        if (existsSync(newFilePath)) throw { code: 'EEXIST', message: `${newFilePath} already exists` };
        await fs.rename(targetFilePath, newFilePath);
    } catch (err) {
        console.log(err.message);
        if (['EEXIST', 'ENOENT'].includes(err.code))
            throw new Error('FS operation failed');
    }
};

await rename();

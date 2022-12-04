import { unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

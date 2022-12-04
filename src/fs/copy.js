import { cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const srcDirPath = path.join(__dirname, 'files');
    const destDirPath = path.join(__dirname, 'files_copy');

    try {
        await cp(srcDirPath, destDirPath, {
            errorOnExist: true,
            force: false,
            recursive: true,
        });
    } catch (err) {
        console.log(err.message);
        if (['ERR_FS_CP_EEXIST', 'ENOENT'].includes(err.code))
            throw new Error('FS operation failed');
    }
};

copy();

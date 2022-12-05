import { cp } from 'node:fs/promises';
import path from 'node:path';
import getDir from '../getDir.js';

const { __dirname } = getDir(import.meta.url);

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

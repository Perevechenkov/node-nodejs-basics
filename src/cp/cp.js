import { fork } from 'node:child_process';
import path from 'node:path';
import getDir from '../getDir.js';

const { __dirname } = getDir(import.meta.url);

const spawnChildProcess = async args => {
    const childScriptPath = path.join(__dirname, 'files', 'script.js');

    const cp = fork(childScriptPath, args);

    cp.on('spawn', () => {
        console.log('Successfully spawned');
    });

    cp.on('error', err => {
        console.error(err.message);
    });

    cp.on('close', code => {
        if (code !== 0) {
            throw new Error(`err code ${code}`);
        }
        console.log(`Child process exited. Code: ${code}`);
    });
};

spawnChildProcess(['arg1', 'arg2']);

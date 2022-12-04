import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const targetFilePath = path.join(__dirname, 'files', 'fileToWrite.txt');

    const ws = createWriteStream(targetFilePath);

    ws.on('error', err => {
        console.log(err);
        process.exit();
    });

    ws.on('finish', () => {
        console.log('Finished');
        process.exit();
    });

    process.stdin.on('data', data => {
        ws.write(data);
        ws.end();
    });
};

await write();

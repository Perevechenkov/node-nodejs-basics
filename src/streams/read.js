import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const targetFilePath = path.join(__dirname, 'files', 'fileToRead.txt');

    const rs = createReadStream(targetFilePath);

    rs.on('data', chunk => {
        process.stdout.write(chunk);
    });

    rs.on('error', err => {
        console.log(err);
        process.exit();
    });

    rs.on('end', () => {
        process.exit();
    });
};

await read();

import { Transform, pipeline } from 'node:stream';
import { promisify } from 'node:util';
const pipe = promisify(pipeline);

const transform = async () => {
    const myTransform = new Transform({
        transform(chunk, encoding, callback) {
            const chunkStr = chunk.toString().trim();
            const reversedChunk = chunkStr.split('').reverse().join('');

            this.end();
            callback(null, reversedChunk + '\n');
        },
    });

    myTransform.on('finish', () => {
        process.exit();
    });

    try {
        await pipe(process.stdin, myTransform, process.stdout);
    } catch (err) {
        console.log(err.message);
    }
};

await transform();

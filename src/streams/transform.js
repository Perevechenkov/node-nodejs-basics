import { Transform, pipeline } from 'node:stream';

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

    pipeline(process.stdin, myTransform, process.stdout, err => {
        console.log(err);
        process.exit();
    });
};

await transform();

import { Worker } from 'node:worker_threads';
import os from 'node:os';
import path from 'node:path';
import getDir from '../getDir.js';

const { __dirname } = getDir(import.meta.url);

const performCalculations = async () => {
    const cpuData = os.cpus();
    const workerFilePath = path.join(__dirname, 'worker.js');

    const queue = [];

    for (let i = 0; i < cpuData.length; i++) {
        queue.push(
            new Promise((resolve, reject) => {
                const worker = new Worker(workerFilePath, {
                    workerData: 10 + i,
                });

                worker.on('message', resolve);
                worker.on('error', reject);
                worker.on('exit', code => {
                    if (code !== 0)
                        reject(
                            new Error(`Worker stopped with exit code ${code}`)
                        );
                });
            })
        );
    }

    try {
        const result = await Promise.all(
            queue.map(p =>
                p.then(
                    data => ({ status: 'resolved', data }),
                    () => ({ status: 'error', data: null })
                )
            )
        );
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

await performCalculations();

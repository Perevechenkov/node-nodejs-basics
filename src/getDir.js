import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default url => {
    const __filename = fileURLToPath(url);
    const __dirname = path.dirname(__filename);

    return { __filename, __dirname };
};

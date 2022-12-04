const parseEnv = () => {
    for (const variable in process.env) {
        if (/^RSS_/.test(variable)) {
            console.log(`${variable}=${process.env[variable]}`);
        }
    }
};

parseEnv();

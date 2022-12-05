const parseEnv = () => {
    const formattedVars = [];
    for (const variable in process.env) {
        if (/^RSS_/.test(variable)) {
            formattedVars.push(`${variable}=${process.env[variable]}`);
        }
    }

    console.log(formattedVars.join('; '))
};

parseEnv();

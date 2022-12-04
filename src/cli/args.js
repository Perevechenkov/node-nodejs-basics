const parseArgs = () => {
    const args = process.argv;
    for (let i = 2; i < args.length; i++) {
        if (/^--/.test(args[i])) {
            console.log(`${args[i]} is ${args[i + 1]}`);
        }
    }
};

parseArgs();

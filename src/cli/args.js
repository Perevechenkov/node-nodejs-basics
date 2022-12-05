const parseArgs = () => {
    const args = process.argv;
    const formattedArgs = [];
    for (let i = 2; i < args.length; i++) {
        if (/^--/.test(args[i])) {
            formattedArgs.push(
                `${args[i].replace('--', '')} is ${args[i + 1]}`
            );
        }
    }
    console.log(formattedArgs.join(', '));
};

parseArgs();

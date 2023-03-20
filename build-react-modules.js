const { join, resolve } = require("path");
const { readdir } = require("fs");
const { execSync } = require("child_process");

const react_modules_folder = join(__dirname, 'src', 'react');

console.log(react_modules_folder);

readdir('./src/react', { withFileTypes: true })
    .filter(dir_content => dir_content.isDirectory())
    .forEach(sub_dir => {
        try {
            execSync(`cd ./src/react/${sub_dir.name}`)
            execSync('npm run build');
            execSync('ls -l');
        } catch {}
    })
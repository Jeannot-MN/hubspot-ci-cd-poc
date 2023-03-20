const { join, resolve } = require("path");
const { readdir } = require("fs");
const { execSync } = require("child_process");

const react_modules_folder = join('./src', 'react');

console.log(react_modules_folder);

readdir(react_modules_folder, { withFileTypes: true }, (err, files) => {
    files.filter(file => file.isDirectory())
        .forEach(sub_dir => {
            try {
                let sub_dir_path = join(react_modules_folder, sub_dir.name);
                console.log('cd ' + sub_dir_path);
                execSync(`cd ${sub_dir_path}`);
                execSync(`pwd`);
            } catch {}
        })
})
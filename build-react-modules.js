const { join, resolve } = require("path");
const { readdir } = require("fs");
const { execSync } = require("child_process");

const react_modules_folder = join('./src', 'react');

readdir(react_modules_folder, { withFileTypes: true }, (_, files) => {
    files.filter(file => file.isDirectory())
        .forEach(sub_dir => {
            let sub_dir_path = join(react_modules_folder, sub_dir.name);
            if (moduleWasModified(sub_dir_path)) {
                console.log(sub_dir_path + " was changed");
                execSync(`cd ${sub_dir_path} && npm install && npm run build && ls -l`);
            } else {
                console.log(sub_dir_path + " was not changed");
            }
        })
})

function moduleWasModified(module_dir) {
    const moduleChanged = execSync(`git diff --quiet HEAD main -- ${module_dir} || ${true}`).toString();
    console.log({ moduleChanged });
    return !!moduleChanged;
}
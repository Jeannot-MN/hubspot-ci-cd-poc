const { join, resolve } = require("path");
const { readdir } = require("fs");
const { execSync } = require("child_process");

const react_modules_folder = join("./src", "react");

readdir(react_modules_folder, { withFileTypes: true }, (_, files) => {
    files
        .filter((file) => file.isDirectory())
        .forEach((sub_dir) => {
            let sub_dir_path = join(react_modules_folder, sub_dir.name);
            /* if (moduleWasModified(sub_dir_path)) {
              console.log(sub_dir_path + " was changed");
              execSync(`cd ${sub_dir_path} && 
                      npm install && npm run build && 
                      hs upload dist ${sub_dir.name} --use-env HUBSPOT_PORTAL_ID=${script_args.portal} HUBSPOT_PERSONAL_ACCESS_KEY=${script_args.access_key}`);
            } else {
              console.log(sub_dir_path + " was not changed");
            } */
            execSync(`cd ${sub_dir_path} && 
                yarn install && yarn build && 
                yarn hs upload dist ${sub_dir.name} --use-env`);
        });
});

/* function moduleWasModified(module_dir) {
    const moduleChanged = execSync(
        `git diff --quiet HEAD^ ${module_dir} || ${true}`
    ).toString();
    console.log({ moduleChanged });
    return !!moduleChanged;
} */
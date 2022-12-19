import fs from "fs";
export const getDirectories = (path: string) => {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isDirectory();
  });
};

// To run this script, install deno,
// ensure you're in root, and:
// deno run --allow-read linker.js

const packageNames = async () => {
  const PACKAGE_DIR = "./packages";

  const packages = await Deno.readDirSync(PACKAGE_DIR);
  const names = [];

  for (const entry of packages) {
    try {
      const rawPackage = Deno.readTextFileSync(
        `${PACKAGE_DIR}/${entry.name}/package.json`
      );
      const packageJson = JSON.parse(rawPackage);
      names.push(packageJson.name);
    } catch (error) {
      // ignore dirs without package.json
    }
  }

  return names;
};

const allNames = await packageNames();

console.log("In this directory, run:");
console.log("");
console.log("\t npx lerna exec yarn link");
console.log("");
console.log("To use these in target directory, run:");
console.log("");
console.log(`\t yarn link ${allNames.join(" ")}`);
console.log("");
console.log("To stop using these in target directory, run:");
console.log("");
console.log(`\t yarn unlink ${allNames.join(" ")}`);

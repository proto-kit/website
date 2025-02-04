import fs from "fs";
const references = fs
  .readdirSync("./src/pages/docs/reference")
  .filter((reference) =>
    fs.lstatSync(`./src/pages/docs/reference/${reference}`).isDirectory()
  );

const sidebarTitles = {
  README: "Overview",
  classes: "Classes",
  functions: "Functions",
  interfaces: "Interfaces",
  "type-aliases": "Type Aliases",
  globals: "Globals",
  variables: "Variables",
};

function categoryToSidebarTitle(category) {
  return sidebarTitles[category];
}

function referenceToSidebarTitle(reference) {
  return `@proto-kit/${reference}`;
}

console.log("generating typedoc meta files...");

references.forEach((reference) => {
  const metaTsxPath = `./src/pages/docs/reference/${reference}/_meta.tsx`;
  fs.rmSync(metaTsxPath, { force: true });

  const categories = fs.readdirSync(
    `./src/pages/docs/reference/${reference}`,
    "utf8"
  );

  const metaTsx = `export default {
  ${categories.map((category) => {
    category = category.replace(".md", "");
    return `"${category}": "${categoryToSidebarTitle(category) ?? category}"`;
  })}
};`;

  console.log(metaTsxPath, metaTsx);

  fs.writeFileSync(metaTsxPath, metaTsx);
});

const metaTsxPath = `./src/pages/docs/reference/_meta.tsx`;
const metaTsx = `export default {
  ${references.map((reference) => {
    return `"${reference}": "${referenceToSidebarTitle(reference)}"`;
  })}
};`;

console.log(metaTsxPath, metaTsx);
fs.writeFileSync(metaTsxPath, metaTsx);

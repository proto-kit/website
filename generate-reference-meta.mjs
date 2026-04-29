import fs from "fs";

const BASE_PATH = "./src/pages/reference";

const references = fs
  .readdirSync(BASE_PATH)
  .filter((reference) =>
    fs.lstatSync(`${BASE_PATH}/${reference}`).isDirectory()
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
  const metaTsxPath = `${BASE_PATH}/${reference}/_meta.tsx`;
  fs.rmSync(metaTsxPath, { force: true });

  const categories = fs.readdirSync(
    `${BASE_PATH}/${reference}`,
    "utf8"
  );

  const metaTsx = `export default {
  ${categories.map((category) => {
    category = category.replace(".md", "");
    return `"${category}": "${categoryToSidebarTitle(category) ?? category}"`;
  })}
};`;

  fs.writeFileSync(metaTsxPath, metaTsx);
});

const metaTsxPath = `${BASE_PATH}/_meta.tsx`;
const metaTsx = `export default {
  ${references.map((reference) => {
    return `"${reference}": "${referenceToSidebarTitle(reference)}"`;
  })}
};`;

fs.writeFileSync(metaTsxPath, metaTsx);

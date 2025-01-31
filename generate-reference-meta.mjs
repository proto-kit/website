import fs from "fs";
const references = fs.readdirSync("./src/pages/docs/reference");

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

references.forEach((reference) => {
  if (fs.lstatSync(`./src/pages/docs/reference/${reference}`).isDirectory()) {
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

    fs.writeFileSync(metaTsxPath, metaTsx);
  }
});

const fs = require("fs");

function generateGlyphMap(inputPath, outputPath) {
  // e.g., rawData format: { "wifi": "f1ed", "heart": "e87d" }
  const codepointsFile = fs.readFileSync(inputPath, "utf8");
  const codepoints = codepointsFile.split("\n").reduce((acc, line) => {
    const [name, hexString] = line.trim().split(" ");
    if (name && hexString) {
      acc[name] = hexString;
    }
    return acc;
  }, {});
  const glyphmap = {};

  for (const [name, hexString] of Object.entries(codepoints)) {
    // Convert hex string to decimal, then to a Unicode character
    glyphmap[name] = String.fromCodePoint(parseInt(hexString, 16));
  }

  fs.writeFileSync(outputPath, JSON.stringify(glyphmap, null, 2));
}

generateGlyphMap(
  "./assets/fonts/MaterialSymbolsOutlined-Regular.codepoints",
  "./assets/fonts/material-symbols.map.json",
);

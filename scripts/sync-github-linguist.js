const fs = require('node:fs');
const path = require('node:path');
const axios = require('axios');
const yaml = require('yaml');

const URL =
  'https://raw.githubusercontent.com/github-linguist/linguist/master/lib/linguist/languages.yml';

const FILE_NAME = 'languages.ts';

const DIR_ROOT = path.join(__dirname, '..');

const FILE_PATH = path.join(DIR_ROOT, 'src', '@generated', FILE_NAME);

const warning = `
/* 🚨🚨🚨 DO NOT EDIT 🚨🚨🚨 */
/* This file is automatically generated. */
`;

axios
  .get(URL)
  .then((response) => {
    const data = yaml.parse(response.data);
    const langs = [];

    function extractCodemirrorModes(obj) {
      for (const key in obj) {
        if (key === 'codemirror_mode') {
          langs.push(obj[key]);
        } else if (typeof obj[key] === 'object') {
          extractCodemirrorModes(obj[key]);
        }
      }
    }

    extractCodemirrorModes(data);

    const content = `export default ${JSON.stringify(langs, null, 2)} as const;`;

    fs.writeFileSync(FILE_PATH, [warning, content].join('\n\n').trimStart());

    console.log(
      `✅ Synced ${langs.length} CodeMirror modes from GitHub Linguist to "src/@generated/${FILE_NAME}"`
    );
  })
  .catch((error) => {
    console.error('Error fetching the YAML file:', error);
  });

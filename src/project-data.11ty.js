// Builds /scripts/project-data.js from src/_data/projects.js, so the homepage
// modals and the standalone project pages read the same content.
module.exports = class {
  data() {
    return {
      permalink: "/scripts/project-data.js",
      eleventyExcludeFromCollections: true,
    };
  }

  render({ projects }) {
    return `export default ${JSON.stringify(projects, null, 2)};\n`;
  }
};

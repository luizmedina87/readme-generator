function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/License-${license.replace(
      "-",
      "%20"
    )}-blue.svg)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `https://opensource.org/licenses/${license}`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License\n${renderLicenseLink(license)}\n\n`;
  }
  return "";
}

function renderDemoSection(git, title, path) {
  if (path) {
    return `## Demo\n![project demo](https://github.com/${git}/${title}/blob/main/${path})\n\n`;
  }
  return "";
}

function renderInstallSection(instructions) {
  if (instructions) {
    return `## Install\n${instructions}\n\n`;
  }
  return "";
}

function renderUsageSection(usage) {
  if (usage) {
    return `## Usage\n${usage}\n\n`;
  }
  return "";
}

function renderContributingSection(contributing) {
  if (contributing) {
    return `## Contributing\n${contributing}\n\n`;
  }
  return "";
}

function renderTestsSection(tests) {
  if (tests) {
    return `## Tests\n${tests}\n\n`;
  }
  return "";
}

function demoLink(info) {
  if (info) {
    return `* [Demo](#demo)\n`;
  }
  return "";
}

function installLink(info) {
  if (info) {
    return `* [Install](#install)\n`;
  }
  return "";
}

function usagelLink(info) {
  if (info) {
    return `* [Usage](#usage)\n`;
  }
  return "";
}

function contributingLink(info) {
  if (info) {
    return `* [Contributing](#contributing)\n`;
  }
  return "";
}

function testsLink(info) {
  if (info) {
    return `* [Tests](#tests)\n`;
  }
  return "";
}

function licenseLink(info) {
  if (info) {
    return `* [License](#license)\n`;
  }
  return "";
}

function generateMarkdown(data) {
  return (
    `# ${data.title}\n` +
    `${renderLicenseBadge(data.license)}\n\n` +
    `## Table of contents\n` +
    `* [Description](#description)\n` +
    `* [Author](#author)\n` +
    `* [Questions](#questions)\n` +
    `${demoLink(data.demo)}` +
    `${installLink(data.installation)}` +
    `${usagelLink(data.usage)}` +
    `${contributingLink(data.contributing)}` +
    `${testsLink(data.tests)}` +
    `${licenseLink(data.license)}` +
    `\n## Description\n` +
    `${data.description}\n\n` +
    `## Author\n` +
    `${data.author}\n\n` +
    `## Questions\n` +
    `https://github.com/${data.github}\n\n` +
    `${renderDemoSection(data.github, data.title, data.demo)}` +
    `${renderInstallSection(data.installation)}` +
    `${renderUsageSection(data.usage)}` +
    `${renderContributingSection(data.contributing)}` +
    `${renderTestsSection(data.tests)}` +
    `${renderLicenseSection(data.license)}`
  );
}

module.exports = generateMarkdown;

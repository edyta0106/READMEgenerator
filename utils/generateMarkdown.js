function renderLicenseBadge(license) {
  if (license != "none") {
    return `![License](https://img.shields.io/badge/license-${license}-blue)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license != "none") {
    return `[License](#license)`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license != "none") {
    return `## License
    ${license}`;
  }
  return "";
}

function renderGitHub(github) {
  return `[GitHub](https://github.com/${github})`;
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * ${renderLicenseLink(data.license)}
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  ${renderGitHub(data.github)}\n
  ${data.email}\n
  ${data.contact}
`;
}

module.exports = generateMarkdown;

// This function will display the badge for the license
function renderLicenseBadge(license) {
  if (license != "none") {
    return `![License](https://img.shields.io/badge/license-${license}-blue)`;
  }
  return "";
}

// This function creates a link in the Table of Contents that will take you to the License section when you click on it
function renderLicenseLink(license) {
  if (license != "none") {
    return `[License](#license)`;
  }
  return "";
}

// This function will create the License section in the README file
function renderLicenseSection(license) {
  if (license != "none") {
    return `## License
    ${license}`;
  }
  return "";
}

// This function will create a link to the user's GitHub profile
function renderGitHub(github) {
  return `[GitHub](https://github.com/${github})`;
}

// This function creates the page layout of the README file
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

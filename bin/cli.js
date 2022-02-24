#! /usr/bin/env node

const chalk = require('chalk');
const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const appName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/asananddevsingh/React-Solution-Structure.git ${appName}`;
const installDepsCommand = `cd ${appName} && npm install`;

console.log(
  chalk.green(
    `Cloning the ${chalk.magenta(
      'React-Solution-Structure'
    )} repository with name ${chalk.cyan(appName)}`
  )
);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  process.exit(-1);
}

console.log(`Installing dependencies ${appName}`);

const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) {
  process.exit(-1);
}

console.log(chalk.green(`Congratulations! You are ready.`));
console.log(`cd ${chalk.cyan(appName)} && run ${chalk.cyan('npm start')} `);

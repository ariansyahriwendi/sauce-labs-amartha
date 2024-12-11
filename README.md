# System Requirement #
- Node.js installed

# Installation #
1. Create folder on your device

2. Open vscode

3. Open > Select folder that you create before

3. Terminal > New Terminal 

4. Clone project from github to vscode with terminal
git clone https://github.com/username/repository-name.git

5. npm install with terminal
npm install

# Run #
npx wdio run wdio.conf.ts --spec login.feature

or

npx wdio run wdio.conf.ts --spec login.feature --cucumberOpts.tags="@login"

# Allure Report #
npx allure generate allure-results --clean -o allure-report && allure open
![GitHub](https://img.shields.io/github/license/fottym/heroku-configs-check?style=for-the-badge)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/fottym/heroku-configs-check/Merge%20into%20master?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/fottym/heroku-configs-check?logoColor=teal&style=for-the-badge)
![GitHub package.json version](https://img.shields.io/github/package-json/v/fottym/heroku-configs-check?style=for-the-badge)

## Why

The reason is simple, to prevent the user from deploying to Heroku then realizing they forgot to add some new environment variables, as a result the app will crash. So, in order to prevent this, we can add a check to make sure the environment variables are set before we deploy to Heroku with this GitHub action.

### Usage

Given you have a file called `configs.js` with the following content, and you add one more environment variable called `MY_VARIABLE`. Then you forget to add this variable in your Heroku environment variables.

```diff
module.exports = {
  AWS_ACCESS_KEY_ID: "obviously_not_set",
  AWS_SECRET_ACCESS_KEY: "aHR0cHM6Ly95b3V0dS5iZS9kUXc0dzlXZ1hjUQ==",
  AWS_REGION: "eu-west-1",
  AWS_BUCKET: "nova core",
+ MY_VARIABLE: "my value"
};
```

_*Example workflow*_

```yaml
name: Check Heroku Environment Variables

on:
  pull_request:
    branches: ["**"]

jobs:
  check-env-vars-with-heroku:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16.x
      - name: Validated variables
        uses: FottyM/heroku-configs-check@v1.4.0
        with:
          heroku-app-name: ${{ secrets.HEROKU_APP_NAME }}
          heroku-api-key: ${{ secrets.HEROKU_API_KEY }}
          config-path: ./configs.js # I can be .ts as well.
```

### Configs

- `heroku-app-name`(required): The name of the Heroku app you want to deploy to.
- `heroku-api-key`(required): The Heroku API key you want to use to deploy to the Heroku app.
- `config-path`(required): The full path from the root of your project.

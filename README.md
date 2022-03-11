# LD Wizard to convert biomedical data to the BioLink model

An online GUI application that makes it easy to create linked data using the [BioLink model](https://biolink.github.io/biolink-model/docs/) from tabular data.

This application uses the [LD Wizard](https://github.com/netwerk-digitaal-erfgoed/LDWizard).

## 🌐 Usage

You can use this application online at https://biolink.wizard.semanticscience.org

## 🐳 Deploy with Docker 

You will need to have [Docker installed](https://docs.docker.com/get-docker/) to deploy the LDWizard.

Build and deploy on http://localhost:4000:

```bash
docker-compose -f ./docker/docker-compose.yml up --build --force-recreate
```

To deploy in production using [nginx-proxy](https://github.com/nginx-proxy/nginx-proxy):

```bash
docker-compose -f ./docker/docker-compose.prod.yml up --build --force-recreate
```

## 📦️ Development

### Change the LDWizard-Core

Clone `LDWizard-Core` locally (next to the `ldwizard-biolink` folder). Make the changes to `LDWizard-Core`, then add the local package to `ldwizard-biolink` (this folder):

```bash
yarn add file:./../LDWizard-Core
```

⚠️ This will change the `package.json` and `yarn.lock`, be careful to not commit them

The original LDWizard version is: `"@netwerkdigitaalerfgoed/ldwizard": "^1.1.0",`

Use a specific branch instead of the published package (to get fixes before new releases):

```bash
yarn add git+https://github.com/vemonet/LDWizard-Core#fix-sparql-autocomplete
```

> You can change the repo and branch used in the `docker/Dockerfile` file

### Build and deploy

Follow these steps to build the application locally:

1. Install [Node.js](https://nodejs.org) (>10 and <=14) with [Yarn](https://yarnpkg.com).

2. Clone this repository and go into its root directory.

3. Install the dependencies:

   ```sh
   yarn
   ```

4. Create the build locally:

   ```sh
   yarn build
   ```

5. Start an HTTP server in the `lib/` subdirectory.  For example:

   ```sh
   cd lib
   http-server .
   ```

6. Visit <http://localhost:4000> in a web browser.

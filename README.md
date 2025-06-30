# cros2026

### Grunt tutorial

- Create the `package.json` file: 
    ```
    npm init
    ```
- Install grunt packages:
    ```
    npm install -g grunt-cli
    npm install grunt --save-dev
    npm install grunt-contrib-uglify --save-dev
    npm install grunt-contrib-jshint --save-dev
    npm install grunt-contrib-htmlmin --save-dev
    npm install grunt-contrib-concat --save-dev
    npm install grunt-htmlhint --save-dev
    npm install grunt-contrib-copy --save-dev
    ```

### Folder structure

- `src`: contains the source code of the library as you author it;
- `dist` contains the distribution, a minified version of the source code.

### Create production ready version

- `cd cros2026`
- `grunt`
- Copy the files from the `dist/*` directory to the webserver


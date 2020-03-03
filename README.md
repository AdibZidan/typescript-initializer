# Instructions on setting up TypeScript

After cloning this project:
`npm i` *Downloads all the needed node modules and configures this project*

1. **Make sure to download [Node.JS](https://nodejs.org/en/) first**
2. `npm init -y` *Initializes a **package.json** file*
3. `npm i -g typescript` *Downloads & Installs the latest version of **TypeScript***
4. `tsc --init` *Creates a TypeScript configuration file called **tsconfig.json***
5. Inside the **tsconfig.json** file:
   - Change the `target` property to `es6` - line 5
   - Uncomment both *outDir* & *rootDir* - lines 15 and 16
   - Use `./dist` for `outDir` & `./src` for `rootDir`
   - Uncomment `moduleResolution` property - line 42
6. Create a **src** folder
7. Inside **package.json** file; below the `"scripts"` object - line 6:
   - Add `"start": "node dist/server.js"` for your server
   - Add `"watch": "tsc -p . --watch"` watches and compiles all your **TypeScript** files into **JavaScript** after you save automatically

## To compile and run

Make sure to have an existing **TypeScript** file to execute the following command:
- To compile TypeScript into JavaScript; use `npm run watch`

## To update npm and install types

- Run `npm i -g npm` to update npm to the latest version
- Run `npm i @types/node` to install node types

## To add unit tests functionality using Jest

1. `npm i -D jest typescript --force` *Downloads **Jest***
2. `npm i -D ts-jest @types/jest` *Downloads **Jest** types*
3. `npx ts-jest config:init` *Creates a **jest.config.js** file*
*You can read further about configuring **jest.config.js** [here](https://huafu.github.io/ts-jest/user/config/diagnostics)*
4. Add `"test": "jest"` inside **package.json**
5. Use `npm run test` to initialize both **JavaScript** and **TypeScript** tests simultaneously

`Updated on the 3rd of March, 2020 @ 9:27 P.M`

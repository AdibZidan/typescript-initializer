# Instructions on setting up TypeScript

1. `npm init -y` *Initializes a **package.json** file*
2. `npm i -g typescript` *Downloads & Installs the latest version of **TypeScript***
3. `tsc --init` *Creates a TypeScript configuration file called **tsconfig.json***
4. Inside the **tsconfig.json** file:
   - Change the `target` property to `es6` - line 5
   - Uncomment both *outDir* & *rootDir* - lines 15 and 16
   - Use `./dist` for `outDir` & `./src` for `rootDir`
   - Uncomment `moduleResolution` property - line 42
5. Create a **src** folder
6. Inside **package.json** file; below the `"scripts"` object - line 6:
   - Add `"start": "node dist/server.js"` for servers
   - Add `"watch": "tsc -p . --watch"` watches and compiles all your **TypeScript** files into **JavaScript** after you save automatically

## To compile and run

Make sure to have an existing **TypeScript** file to execute the following command:
- To compile TypeScript into JavaScript; use `npm run watch`

## To update npm and install types

- Run `npm i -g npm` to update npm to the latest version
- Run `npm i @types/node` to install node types

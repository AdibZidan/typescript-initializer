# Instructions on setting up TypeScript

1. `npm i -g typescript` *Downloads & Installs the latest version of TypeScript*
2. `tsc --init` *Creates a TypeScript configuration file*
3. Inside the *tsconfig.json* file:
   - Change the `target` property to `es6` - line 5
   - Uncomment both *outDir* & *rootDir* - lines 15 and 16
   - *Optional* use `./dist` for `outDir` & `./src` for `rootDir`
   - Uncomment `moduleResolution` property - line 42
4. Create a *src* folder
5. Initialize a *package.json* file using `npm init -y` command
6. Inside *package.json* file; add `"start": "node dist/server.js"` & `"build": "tsc -p ."` below the `"scripts"` object - line 6

## To compile and run

- To compile TypeScript into JavaScript; use `npm run build`

## To update npm and install types

- Run `npm i -g npm` to update npm to the latest version
- Run `npm i @types/node` to install node types

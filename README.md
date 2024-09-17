# use-exit-intent3
The Exit Intent strategy is a great way to increase your conversion rate. That strategy is commonly used to show a modal/popup when the user is about to leave your website.

## Installation

To install the package, use npm:

```bash
pnpm add use-exit-intent3

yarn install use-exit-intent3

npm install use-exit-intent3
```

## Usage

```typescript
import { useExitIntent } from 'use-exit-intent3';

const exiting = useExitIntent();

console.log(exiting ? 'YES' : 'NO');
```

## tsup
Bundle your TypeScript library with no config, powered by esbuild.

https://tsup.egoist.dev/

## How to use this
1. install dependencies
```
# pnpm
$ pnpm install

# yarn
$ yarn install

# npm
$ npm install
```
2. Add your code to `src`
3. Add export statement to `src/index.ts`
4. Test build command to build `src`.
Once the command works properly, you will see `dist` folder.

```zsh
# pnpm
$ pnpm run build

# yarn
$ yarn run build

# npm
$ npm run build
```
5. Publish your package

```zsh
$ npm publish
```


## test package
https://www.npmjs.com/package/use-exit-intent3

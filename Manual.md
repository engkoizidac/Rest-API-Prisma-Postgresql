#Manual

##Steps on Setup ExpressJS with Typescript
mkdir rest-api-prisma
cd rest-api-prisma
npm init
npm i express
npm i -D @types/express
npx tsc --init
npx tsc --build //build project
node ./build/index.js //test run project
npm i -D nodemon //detect file changes
npm i -D ts-node //nodemon dependency

##Steps on Setup Prisma

# Setting Up The React Project

This guide provides instructions on how to set up the React project on your machine.

## Prerequisites

Before you begin, make sure you have Node.js installed on your system. Vite requires Node.js version 18.2.0 and npm version 8.9.0 or higher. You can check your Node.js version and npm version by running `node -v` and `npm --v` in your terminal respectively.

## Step 1: Installing all dependencies

Open your terminal and run the following command:

```bash
npm install
```

## Step 2: Spinning up the dev server

Open your terminal and run the following command:

```bash
npm run dev
```
This will start a dev server at [localhost:5173](http://localhost:5173).

## Step 3: Running unit tests

Open your terminal and run the following command:

```bash
npm run test
```
This will run the test cases in the terminal.

## Step 4: Building the app

Open your terminal and run the following command:

```bash
npm run build
npm run preview
```
The `npm run build` command will build the production app in the `dist/` folder in the project directory and `npm run preview` will run a production preview from the `dist/` folder.

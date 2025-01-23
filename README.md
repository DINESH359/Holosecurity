# HoloSecurity

This project is a Node.js and TypeScript-based application using Express.js for building a backend server. Below are the instructions to build, run, and develop the project.

---

## Prerequisites

Ensure you have the following tools installed on your system:

- **Node.js** (Version 16 or higher recommended)
- **npm** (Comes with Node.js)

---

## Installation

Clone this repository and navigate to its directory:

```bash
git clone <repository-url>
cd holosecurity
```

Install the dependencies:

```bash
npm install
```

---

## Scripts

### 1. **Build the Project**

To compile the TypeScript code into JavaScript, run:

```bash
npm run build
```

This will generate the compiled code in the `dist/` directory.

---

### 2. **Start the Server**

After building the project, you can start the server using:

```bash
npm run start
```

The server will start and listen for requests at `http://localhost:3000` (default).

---

### 3. **Run in Development Mode**

During development, you can use the following command for hot-reloading:

```bash
npm run dev
```

This will run the server using `ts-node-dev`, allowing for live code changes without needing to restart the server manually.

---

## Project Structure

```
.
├── src/              # Source files
│   ├── index.ts      # Main entry point
│   └── ...           # Other source files
├── dist/             # Compiled JavaScript files (after build)
├── package.json      # Project configuration and dependencies
├── tsconfig.json     # TypeScript configuration
└── README.md         # Documentation
```

---

## Notes

- The default port for the server is `3000`. To change it, update the `PORT` variable in your code.
- Ensure TypeScript is correctly set up by verifying the `tsconfig.json` file.

---

## Troubleshooting

1. **Dependencies Issues:**
   If you encounter errors related to missing or incompatible dependencies, try running:
   ```bash
   npm install
   ```

2. **TypeScript Compilation Errors:**
   Check the TypeScript configuration in `tsconfig.json` and ensure your TypeScript code adheres to the specified rules.

---




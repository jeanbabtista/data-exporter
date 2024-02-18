# Node & Express TypeScript Generics and Abstract Classes for Flexible Data Exportation

This repository contains a Node.js and Express application that demonstrates the usage of TypeScript generics and
abstract classes for flexible data exportation. The application showcases how to generate reports in various formats
(CSV, PDF, etc.) using clean and maintainable code principles.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- Utilizes TypeScript generics and abstract classes for flexible data exportation.
- Supports exporting data in multiple formats such as CSV, PDF, JSON, etc.
- Demonstrates clean code practices for modular and extensible software design.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/jeanbabtista/data-exporter.git
    ```

2. Navigate to the project directory:

    ```bash
    cd data-exporter
    ```

3. Install dependencies:

    ```bash
    npm i
    ```

## Usage

To run the application, follow these steps:

1. Start the server:

    ```bash
    npm start
    ```

2. Open a web browser and navigate to `http://localhost:3000/report` to generate a sample user report. You can change
   the export format by modifying the `const exporter = new PdfExporter()` line in the `app.get('/report', ...)` route
   handler in the `src/index.ts` file.

## License

This project is licensed under the [MIT License](LICENSE).
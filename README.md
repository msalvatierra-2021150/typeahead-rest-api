# TYPEAHEAD REST API

[GitHub Repository](https://github.com/msalvatierra-2021150/typeahead-rest-api.git)

## Overview

Custom Typeahead API, powered by Node.js, Express.js, TypeScript, and MySQL, simplifies location data retrieval within the United States via req.params. Streamlined for company-specific needs, it offers fast, accurate, and scalable location search functionality, enhancing user experiences for internal applications.

## Installation

You can install the dependencies with the following command:

```bash
npm install
```

## Configuration

Create a `.env` file in the root of your project and add the following environment variables with their respective values:

```plaintext
PORT=       # The port on which the API should run
DB_HOST=    # The hostname for your MySQL database
USER=       # The username for connecting to your MySQL database
PASSWORD=   # The password for the MySQL user
```

## Run development mode
You can run the project in development mode:

```bash
npm run dev
```

## Run testing
You can run the project in testing mode:

```bash
npm run test
```
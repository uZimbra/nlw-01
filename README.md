# Ecoleta

— A application make with the will to create and share information about recycle and waste menagement

![images/ecoleta.jpg](images/ecoleta.jpg)

## How to Reproduce

Requirements

1. NodeJS

— First of all - You need to download all project dependencies, so you need to open each folder (server, web, mobile), into your command line and type:

```bash
example:~/server$ npm install
```

### Back-end

We gonna setup the back-end by initializing database.

To do it you need to type this into your command line:

```bash
example:~/server$ npm run knex:migrate
```

And

```bash
example:~/server$ npm run knex:seed
```

Now we are ready to start the back-end, to make it run just type:

```bash
example:~/server$ npm run start
```

The back-end will run into [http://localhost:3333](http://localhost:3333) as default.

### Front-end - Web

To run the web app you just need to type:

```bash
example:~/server$ npm run start
```

After this, React will pop up a browser window running in React default port, something like this [http://localhost:3000](http://localhost:3000/).

### Front-end - Mobile

Same as the web app, you just need to type:

```bash
example:~/server$ npm run start
```

and a browser window will pop up on [http://localhost:19002](http://localhost:19002/) as expo default port.

To run the mobile app you just need to scan the QR code with your smartphone (you will need to download the expo app into the store) or run it into an emulator.

---

# Used Technologys

- **Back-end**
    1. **Express** - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
    2. **Cors** - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
    3. **Celebrate** - celebrate is an express middleware function that wraps the joi validation library.
    4. **Multer** - Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.
    5. **SQlite3** - SQLite is a C library that provides a lightweight disk-based database that doesn’t require a separate server process and allows accessing the database using a nonstandard variant of the SQL query language.
    6. **Knex** - Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use.
- **Front-end**
    1. **React** - A JavaScript library for building user interfaces.
    2. **Leaflet** - Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps.
    3. **React Native** - A framework for building native apps using React.
    4. **Axios** - Promise based HTTP client for the browser and node.js.
    5. **Expo** - Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.

The project was made using TypeScript.

The project is my implementation about that was made in Rocketseat - Next Level Week #01

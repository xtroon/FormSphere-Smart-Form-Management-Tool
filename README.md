# FormSphere - Smart Form Management Tool

A modern form management system built with Node.js and Express.

## Project Structure

```
FormSphere/
├── server/
│   ├── src/
│   │   ├── app.js
│   │   └── config/
│   │       └── db.js
│   ├── server.js
│   └── package.json
```

## Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server/` directory:
   ```
   DATABASE_URL=your_database_connection_string
   PORT=5000
   ```

## Running the Server

```bash
npm start
```

The server will start on `http://localhost:5000`

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Supabase

## License

MIT

import express from 'express';
import router from './routes/route.js';
const examGroupRoute = require('./routes/examGroupRoute');


app.use('/', examGroupRoute);

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/', router);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const cors = require('cors');
const connectDB = require('./config/db');
const leadRoutes = require('./routes/leadRoutes');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.get('/', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api', leadRoutes);

app.use(errorHandler);

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection event error:', error);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled promise rejection:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  process.exit(1);
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    const dbConnected = await connectDB();
    if (!dbConnected) {
      console.warn('MongoDB connection failed; server will continue running in degraded mode.');
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

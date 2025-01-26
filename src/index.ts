import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = 3001;

// Custom CORS configuration to allow all origins
const corsOptions = {
    origin: '*',  // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    preflightContinue: false,
    optionsSuccessStatus: 200
};

// Apply CORS middleware globally for all routes
app.use(cors(corsOptions));

// Log every incoming request
app.use((req, res, next) => {
    console.log(`${req.method} request made to: ${req.url}`);
    next();
});

// Ensure CORS for OPTIONS requests (preflight requests)
app.options('*', (req, res) => {
    console.log("Handling OPTIONS request for:", req.url);
    res.setHeader('Access-Control-Allow-Origin', '*');  // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    res.status(200).end();  // Respond to OPTIONS with 200 status
});

// Parse JSON requests
app.use(express.json());

// Define task routes
app.use('/tasks', taskRoutes);

// Catch-all for 404 errors
app.use((_req, res) => {
    console.log("Route not found. Sending 404 error.");
    res.status(404).json({ error: 'Route not found' });
});

// Error handler middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

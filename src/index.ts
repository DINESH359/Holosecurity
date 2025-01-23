import express from 'express';
import taskRoutes from './routes/taskRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/tasks', taskRoutes);


app.use((_req, res) => {
    res.status(404).json({ error: 'Route not found' });
});


app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

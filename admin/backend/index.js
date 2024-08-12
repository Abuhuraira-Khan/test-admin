import express from 'express';
import { configDotenv } from 'dotenv';
import homeRouter from './routes/homepageRoute.js';
configDotenv();

const port = process.env.PORT || 1000;

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specified methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    next(); // Proceed to other middleware/routes
});
app.use(express.json({limit:'1gb'}))
app.use('/home',homeRouter)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
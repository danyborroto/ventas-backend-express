const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const productoRoutes = require('./routes/productosRoute');

// middleware
app.use(express.json());

app.use('/api/productos', productoRoutes)


app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
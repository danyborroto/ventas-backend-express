const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const productoRoutes = require('./routes/productosRoute');
const ventasRoutes = require('./routes/ventasRoute');

// middleware
app.use(express.json());

app.use('/api/productos', productoRoutes);
app.use('/api/ventas', ventasRoutes);


app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
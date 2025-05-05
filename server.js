// Puerto
const PORT = 3000;

// Importar la configuración del servidor
const app = require('./app');

// Poner a escuchar el servidor
app.listen(PORT, (req, res) => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


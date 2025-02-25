const jugador = {
    nombre: "Steve",
    experiencia: 15,
    inventario: {
        Herramienta: "Pico de diamante",
        comida: "Manzana dorada",
        bloques: 64
    }
};

const { nombre, inventario: { Herramienta } } = jugador;

console.log(`Nombre del jugador: ${nombre}, su herramienta principal es ${Herramienta}`);


const nuevoObjeto = {Herramienta_secundaria : "Antorcha"};

const nuevoInventario = { ...jugador.inventario, ...nuevoObjeto };

console.log("Nuevo inventario:", nuevoInventario);

import React, { Component } from 'react';

class Consulares extends Component {
    render() {
        return (
            <div>
                <h2>Asuntos Consulares</h2>
                <p>
                    El Ministerio del Poder Popular para Relaciones Exteriores
                    designo al los consulado de Venezuela en Mexico y en Canadá para que se
                    ocupara de las operaciones consulares de los Venezolanos en EEUU.
                </p>
                <p>
                    Para comunicarse con la sección consular de la Embajada de
                    La República Bolivariana de Venezuela en Mexico.<br>
                    <a href="https://mexico.embajada.gob.ve/">Leer más...</a>
                </p>
                <p>
                    Para comunicarse con la sección consular de la Embajada de
                    La República Bolivariana de Venezuela en Canadá.<br>
                    <a href="http://www.misionvenezuela.org/V2/index.php">Leer más...</a>
                </p>
            </div>
        );
    }
}

export default Consulares;

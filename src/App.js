import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Facturas from "./componentes/Facturas";


function App() {
  const urlApi = "http://localhost:3001/facturas";
  const [datos, setDatos] = useState([]);
  // El hook "busqueda" es para guardar el valor de la busqueda.
  const [busqueda, setBusqueda] = useState("");
  useEffect(() => {
    fetch(urlApi)
      .then(resp => resp.json())
      .then(datosAPI => {
        setDatos(datosAPI);
      });
  }, []);
  return (
    <>
      <Container as="section" fluid className="principal">
        <Row as="header" className="cabecera">
          <Col as="h2">Listado de ingresos</Col>
        </Row>
        <main>
          <Row>
            <Col className="info-listado info-listado-top text-right">
              <label>
                Buscar
                <input type="text" className="form-control form-control-sm" />
              </label>
            </Col>
          </Row>
          <table className="listado table table-striped table-bordered table-hover">
            <Facturas
              busqueda={busqueda}
              datos={datos}
            />
            <tfoot>
              <tr>
                <th className="text-right" colSpan="3">Totales:</th>
                <td className="base-total"></td>
                <td className="iva-total"></td>
                <td className="final-total"></td>
                <td colSpan="2"></td>
              </tr>
            </tfoot>
          </table>
        </main>
      </Container>
    </>
  );
}

export default App;

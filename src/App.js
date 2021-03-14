import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Facturas from "./componentes/Facturas";
import useApi from "./hooks/useApi";


function App() {
  const urlApi = "http://localhost:3001/facturas";
  // El hook "busqueda" es para guardar el valor de la busqueda.
  const [busqueda, setBusqueda] = useState("");
  const datos = useApi(urlApi);
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

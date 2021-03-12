import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


function App() {
  const urlApi = "http://localhost:3001/facturas";
  const [datos, setDatos] = useState(null);
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
            <thead className="thead-light">
              <tr>
                <th className="col-min">Num.</th>
                <th className="col-med">Fecha</th>
                <th className="col-concepto">Concepto</th>
                <th className="col-med">Base</th>
                <th className="col-max">IVA</th>
                <th className="col-med">Total</th>
                <th className="col-max">Estado</th>
                <th className="col-max">Vence</th>
              </tr>
            </thead>
            <tbody className="lista-facturas">
              <tr className="dummy">
                <td className="numero"></td>
                <td className="fecha"></td>
                <td className="concepto"></td>
                <td className="base"></td>
                <td className="iva"></td>
                <td className="total"></td>
                <td className="estado table-success"></td>
                <td className="vence table-success"></td>
              </tr>
            </tbody>
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

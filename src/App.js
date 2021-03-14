import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Facturas from "./componentes/Facturas";
import Buscador from "./components/Buscador";
import Totales from "./components/Totales";
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
              <Buscador cambiarBusqueda={cambiarBusqueda} />
            </Col>
          </Row>
          <table className="listado table table-striped table-bordered table-hover">
            <Facturas
              busqueda={busqueda}
              datos={datos}
            />
            <Totales
              totalBase={totalBase}
              totalIva={totalIva}
              totalTotal={totalTotal} />
          </table>
        </main>
      </Container>
    </>
  );
}



export default App;

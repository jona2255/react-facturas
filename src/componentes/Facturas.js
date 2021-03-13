import PropTypes from "prop-types";
import Factura from "./Factura";

const Facturas = (props) => {
  const { busqueda, datos } = props;
  return (
    <>
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
      <Factura
        busqueda={busqueda}
        datos={datos}
      />
    </>
  );
};

Facturas.propTypes = {
  busqueda: PropTypes.string.isRequired,
  datos: PropTypes.array.isRequired,
};

export default Facturas;

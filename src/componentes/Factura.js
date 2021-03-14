import PropTypes from "prop-types";
const { DateTime } = require("luxon");

const Factura = (props) => {
  const { busqueda, datos } = props;
  const fechaParseada = (fecha) => {
    const fechaModificada = DateTime.fromMillis(parseInt(fecha)).c;
    return `${fechaModificada.day}/${fechaModificada.month}/${fechaModificada.year}`;
  };
  const calcularIva = (precioBase, iva) => (
    `${(precioBase * iva) / 100}€ (${iva}%)`
  );
  const calcularTotal = (precioBase, iva) => {
    const precioIva = (precioBase * iva) / 100;
    return `${precioBase + precioIva}€`;
  };
  const estadoFactura = (estado) => (
    estado ? "table-success" : "table-danger"
  );
  const vencimiento = (factura) => {
    let fechaVencimientoParseada = DateTime.fromMillis(parseInt(factura.vencimiento)).c;
    fechaVencimientoParseada = `${fechaVencimientoParseada.day}/${fechaVencimientoParseada.month}/${fechaVencimientoParseada.year}`;
    const diasFaltantes = Math.trunc((factura.vencimiento - DateTime.now()) / (60 * 60 * 24 * 1000));
    if (factura.abonada) {
      return "-";
    } else {
      return diasFaltantes > 0 ? `${fechaVencimientoParseada} (faltan ${diasFaltantes} días)` : `${fechaVencimientoParseada} (hace ${diasFaltantes * -1} días)`;
    }
  };
  if (datos !== null) {
    return (
      <tbody className="lista-facturas">
        {
          datos
            .filter(factura => factura.tipo === "ingreso" && factura.numero.includes(busqueda))
            .map(factura => (
              <tr key={factura.id}>
                <td>{factura.numero}</td>
                <td>{fechaParseada(factura.fecha)}</td>
                <td>{factura.concepto}</td>
                <td>{`${factura.base}€`}</td>
                <td>{calcularIva(factura.base, factura.tipoIva)}</td>
                <td>{calcularTotal(factura.base, factura.tipoIva)}</td>
                <td className={estadoFactura(factura.abonada)}>{factura.abonada ? "Abonada" : "Pendiente"}</td>
                <td className={estadoFactura(factura.abonada)}>{vencimiento(factura)}</td>
              </tr>
            ))
        }
      </tbody>
    );
  } else {
    return;
  }
};

Factura.propTypes = {
  busqueda: PropTypes.string.isRequired,
  datos: PropTypes.array.isRequired,
};

export default Factura;

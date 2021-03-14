import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const Buscador = props => {
  const { buscar } = props;
  return (
    <Form.Label>
      Buscar
      <Form.Control type="text"
        className="form-control-sm"
        onChange={buscar}
      ></Form.Control>
    </Form.Label>
  );
};

Buscador.propTypes = {
  buscar: PropTypes.func.isRequired
};

export default Buscador;


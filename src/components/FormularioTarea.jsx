import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="Tarea">
          <Form.Control type="text" placeholder="ingrese una tarea" />{" "}
          <Button variant="primary">agregar</Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </>
  );
};

export default FormularioTarea;

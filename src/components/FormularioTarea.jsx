import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);
  return (
    <>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="Tarea">
          <Form.Control
            type="text"
            placeholder="ingrese una tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />{" "}
          <Button variant="primary">agregar</Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </>
  );
};

export default FormularioTarea;

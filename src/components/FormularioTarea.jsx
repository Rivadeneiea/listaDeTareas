import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setListaTareas([...listaTareas, tarea]);
    setTarea("");
  };
  const borrarTarea = (tareaBorrar) => {
    let listaTareasFiltrada = listaTareas.filter(
      (itemTarea) => itemTarea !== tareaBorrar
    );
    setListaTareas(listaTareasFiltrada);
    use;
    useEffect(() => {
      console.log("ejecuta useEffect");
    }, [listaTareas]);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="Tarea">
          <Form.Control
            type="text"
            placeholder="ingrese una tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />{" "}
          <Button variant="primary" type="submit">
            agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas
        propslistaTareas={listaTareas}
        borrarTarea={borrarTarea}
      ></ListaTareas>
    </>
  );
};

export default FormularioTarea;

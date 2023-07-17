import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const ItemTarea = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      ejemplo de tareas
      <Button variant="danger">borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;

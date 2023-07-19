import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const ItemTarea = ({ nombreTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreTarea}
      <Button variant="danger">borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;

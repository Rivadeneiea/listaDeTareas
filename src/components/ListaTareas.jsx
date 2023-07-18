import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ propslistaTareas }) => {
  return (
    <ListGroup>
      {
      propslistaTareas.map(()=> <ItemTarea></ItemTarea>
  )} 
  </ListGroup>)}
  


export default ListaTareas;

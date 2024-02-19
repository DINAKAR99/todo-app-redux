import React, { useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import DisplayCount from "./DisplayCount";
import { connect } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/action/todo";
import EditableText from "./EditableText";

const DisplayTodos = ({ todos, deleteTodo, updateTodo }) => {
  // const [updateState, setUpdateState] = useState(-1);
  // function handleEdit(id) {
  //   setUpdateState(id);
  // }
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <h3>All todos are here</h3>
              <DisplayCount />
              <ListGroup>
                {todos.map((todo, index) => (
                  <ListGroup.Item key={index}>
                    <h4>{todo.title}</h4>
                    <p>{todo.desc}</p>
                    <p>{todo.id}</p>
                    <Button
                      onClick={(e) => deleteTodo(todo.id)}
                      variant="danger"
                      size="sm"
                    >
                      Delete
                    </Button>

                    <EditableText state1={todo} Id={todo.id} />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// function Edit({ todos, todo, setlist }) {
//   return (
//     <>
//       <input type="text" name="name" value={todo.title} />
//       <input type="text" name="desc" value={todo.desc} />
//       <button type="submit">update</button>
//     </>
//   );
// }

const mapStateToProps = (state) => {
  // console.log(state);
  return { todos: state.todos };
};
const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  updateTodo: (todo, id) => dispatch(updateTodo(todo, id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);

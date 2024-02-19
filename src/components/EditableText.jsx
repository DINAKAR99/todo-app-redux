import { useState } from "react";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteTodo, updateTodo } from "../redux/action/todo";
import { connect } from "react-redux";

const EditableText = ({ Id, updateTodo, state1 }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, setState] = useState({ title: "", description: "", id: Id });

  // const handleChange = (e) => setState({ name: e.target.value });
  const idd = Id;
  const handleSubmit = (e) => {
    e.preventDefault();
    setState(state1);

    console.log(state);
    updateTodo(state, Id);

    handleClose();
  };

  return (
    <>
      <Button className="m-2" variant="primary" onClick={handleShow}>
        edit fr
      </Button>

      <Modal show={show} onHide={(e) => handleClose(e)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>title: </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setState({ ...state, title: e.target.value })}
                value={state.title}
                placeholder="enter the title"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>desc: </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setState({ ...state, description: e.target.value })
                }
                value={state.desc}
                placeholder="enter description"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  updateTodo: (todo, id) => dispatch(updateTodo(todo, id)),
  // deleteTodo: (id) => dispatch(deleteTodo(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditableText);

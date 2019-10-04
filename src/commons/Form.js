import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <Button variant="outline-success" onClick={() => setShow(true)}>
        Login
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

const LoginForm = () => (
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);

const AddPublication = () => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <Button variant="outline-success" onClick={() => setShow(true)}>
        Add publication
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add publication
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PublicationForm />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

const EditPublication = props => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <Button variant="outline-success" onClick={() => setShow(true)}>
        Edit publication
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Edit publication
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PublicationForm data={props.data} />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

const PublicationForm = props => {
  const { data } = props;
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Message</Form.Label>
        <Form.Control
          type="string"
          value={data ? data.message : ""}
          placeholder="Enter Message"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Type</Form.Label>
        <Form.Control
          value={data ? data.type : ""}
          type="string"
          placeholder="Enter Type"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control
          value={data ? data.price : ""}
          type="string"
          placeholder="Enter Price"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Weight</Form.Label>
        <Form.Control
          value={data ? data.weight : ""}
          type="string"
          placeholder="Enter Weight"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Geolocation</Form.Label>
        <Form.Control
          value={data ? data.geolocation : ""}
          type="string"
          placeholder="Enter Geolocation"
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Active" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>User</Form.Label>
        <Form.Control
          value={data ? data.userId : ""}
          type="string"
          placeholder="Enter User"
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Deleted at</Form.Label>
        <Form.Control
          value={data ? data.deletedAt : ""}
          type="string"
          placeholder="Deleted at"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export { Login, AddPublication, EditPublication };

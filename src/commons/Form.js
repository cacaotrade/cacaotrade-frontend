import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalButton = props => {
  const [show, setShow] = useState(false);

  const chooseForm = () => {
    switch (props.title) {
      case "Login":
        return <LoginForm />;
      case "Signup":
        return <SignupForm />;
      case "Add publication":
        return <PublicationForm />;
      case "Add offer":
        return <OfferForm />;
    }
  };

  return (
    <React.Fragment>
      <Button variant="outline-success" onClick={() => setShow(true)}>
        {props.title}
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{chooseForm()}</Modal.Body>
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
      Login
    </Button>
  </Form>
);

const SignupForm = () => (
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
      Signup
    </Button>
  </Form>
);

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

const EditOffer = props => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <Button variant="outline-success" onClick={() => setShow(true)}>
        Edit offer
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Edit offer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OfferForm data={props.data} />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

const OfferForm = props => {
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
        <Form.Label>Bid</Form.Label>
        <Form.Control
          value={data ? data.bid : ""}
          type="string"
          placeholder="Enter Type"
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
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Publication</Form.Label>
        <Form.Control
          value={data ? data.publicationId : ""}
          type="string"
          placeholder="Enter Publication"
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
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Timestamp</Form.Label>
        <Form.Control
          value={data ? data.timestamps : ""}
          type="string"
          placeholder="Enter Timestamp"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export { EditPublication, EditOffer, ModalButton };

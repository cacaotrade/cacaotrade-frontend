import React from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import { publications, offers } from "../mocks/tableHeader";
import { AddPublication, EditPublication } from "./Form";
import "./Layout.css";

const Layout = props => (
  <Container id="container">
    <Row style={{ marginBottom: 30 }}>
      <Col md={4}>{props.page}</Col>
      <Col md={{ span: 4, offset: 4 }}>
        <AddPublication />
      </Col>
    </Row>
    <Row>{props.children}</Row>
  </Container>
);

const TablePublications = props => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        {publications.map((pub, index) => (
          <th key={index}>{pub}</th>
        ))}
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      {props.datas.map((data, index) => (
        <tr key={data._id}>
          <td>{index + 1}</td>
          <td>{data.message}</td>
          <td>{data.type}</td>
          <td>{data.price}</td>
          <td>{data.weight}</td>
          <td>{data.geolocation}</td>
          <td>
            <Form.Check disabled checked={data.isActive} />
          </td>
          <td>{data.userId}</td>
          <td>{data.deletedAt}</td>
          <td>
            <EditPublication data={data} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const TableOffers = props => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        {offers.map((off, index) => (
          <th key={index}>{off}</th>
        ))}
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      {props.datas.map((data, index) => (
        <tr key={data._id}>
          <td>{index + 1}</td>
          <td>{data.message}</td>
          <td>{data.bid}</td>
          <td>{data.weight}</td>
          <td>{data.geolocation}</td>
          <td>
            <Form.Check disabled checked={data.isActive} />
          </td>
          <td>{data.userId}</td>
          <td>{data.publicationId}</td>
          <td>{data.deletedAt}</td>
          <td>{data.timestamps}</td>
          <td>
            <EditPublication data={data} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export { Layout, TablePublications, TableOffers };

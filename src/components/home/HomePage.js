import React from "react";
import "../kategorite/App2.css";
import Sidebar from "../Sidebar";
import Form from "react-bootstrap/Form";
import { Button } from "bootstrap";

const HomePage = () => (
  <>
    <Sidebar />
    <div className="Container">Veshtiresi ne llogarite ekonomike?</div>
    <div className="Container" style={{ left: "46%" }}>
      Winance ju ndihmon te menaxhoni shpenzimet dhe kursimet tuaja!
    </div>

    <div className="Container" style={{ left: "71%" }}>
      Winance eshte bere nga Bjorn Fejzaj.
    </div>
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">Ne nuk do ta shperndajme</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  </>
);

export default HomePage;

<p>Winance menaxhon shpenzimet dhe kursimet tuaja</p>;

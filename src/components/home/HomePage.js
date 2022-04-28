import React from "react";
import "../kategorite/App2.css";
import Sidebar from "../Sidebar";
import Form from "react-bootstrap/Form";
import { Button } from "bootstrap";

const HomePage = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const { username, password } = e.target.elements;
    console.log({ username: username.value, password: password.value });
  }

  return (
    <>
      <Sidebar />
      <div className="Container">Vështirësi në llogaritë ekonomike?</div>
      <div className="Container" style={{ left: "46%" }}>
        Winance ju ndihmon të menaxhoni shpenzimet dhe kursimet tuaja!
      </div>

      <div className="Container" style={{ left: "71%" }}>
        Winance ështe ndërtuar nga Bjorn Fejzaj.
      </div>
      <div className="forma">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Të ardhurat tuaja mujore:
              <Form.Text className="text-muted"> (Lekë të reja)</Form.Text>
            </Form.Label>
            <Form.Control type="number" placeholder="" autoComplete="off" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Limiti që doni të shpenzoni:
              <Form.Text className="text-muted">( Nëse keni )</Form.Text>
            </Form.Label>
            <Form.Control type="number" placeholder="" autoComplete="off" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Më lajmëro kur kalohet limiti "
            />
          </Form.Group>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Vazhdo
          </button>
        </Form>
      </div>
    </>
  );
};

export default HomePage;

<p>Winance menaxhon shpenzimet dhe kursimet tuaja</p>;

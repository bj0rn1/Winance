import React, { useState } from "react";
import "../kategorite/App2.css";
import Sidebar from "../Sidebar";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../../../redux/actions/productActions";
import { useHistory } from "react-router-dom";
import "./butoni.css";

const HomePage = () => {
  let teArdhuratInput = React.createRef();
  let limitiInput = React.createRef();

  const defaultUserData = {
    teArdhurat: 0,
    limiti: 0,
  };

  let error = "";
  let showSB = false;

  const dispatch = useDispatch();
  let history = useHistory();
  let userData = useSelector((state) => state.userData);

  function handleSubmit(e) {
    (defaultUserData.teArdhurat = teArdhuratInput.current.value),
      (defaultUserData.limiti = limitiInput.current.value);
    if (defaultUserData.teArdhurat > 0) {
      showSB = true;
      e.preventDefault();

      if (defaultUserData.limiti > defaultUserData.teArdhurat) {
        defaultUserData.limiti = defaultUserData.teArdhurat;
      }
      dispatch(addUserData(defaultUserData));
      (defaultUserData.teArdhurat = 0), (defaultUserData.limiti = 0);
      console.log(userData);

      history.push("/kategorite");
    }
  }

  return (
    <>
      {showSB ? <Sidebar /> : <></>}
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
            <Form.Control
              type="number"
              placeholder=""
              autoComplete="off"
              required="required"
              ref={teArdhuratInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Limiti që doni të shpenzoni:
              <Form.Text className="text-muted">( Nëse keni )</Form.Text>
            </Form.Label>
            <Form.Control
              type="number"
              placeholder=""
              autoComplete="off"
              required="required"
              ref={limitiInput}
            />{" "}
            {error != "" && <span style={{ color: "red" }}>{error}</span>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Më lajmëro kur kalohet limiti "
            />
          </Form.Group>

          <a
            aria-label="Jam gati"
            className="h-button centered"
            data-text=" Jam gati"
            href="#"
            onClick={handleSubmit}
          >
            <span>V</span>
            <span>a</span>
            <span>z</span>
            <span>h</span>
            <span>d</span>
            <span>o</span>
          </a>
        </Form>
      </div>
    </>
  );
};

export default HomePage;

<p>Winance menaxhon shpenzimet dhe kursimet tuaja</p>;

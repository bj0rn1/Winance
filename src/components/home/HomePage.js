import React from "react";
import "../kategorite/App2.css";
import Sidebar from "../Sidebar";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../../../redux/actions/productActions";

const HomePage = () => {
  const teArdhuratInput = React.createRef();
  const limitiInput = React.createRef();

  const defaultUserData = {
    teArdhurat: 0,
    limiti: 0,
  };

  const dispatch = useDispatch();
  let userData = useSelector((state) => state.userData);

  function handleSubmit(e) {
    e.preventDefault();
    (defaultUserData.teArdhurat = teArdhuratInput.current.value),
      (defaultUserData.limiti = limitiInput.current.value);
    dispatch(addUserData(defaultUserData));
    (defaultUserData.teArdhurat = 0), (defaultUserData.limiti = 0);
    console.log(userData);
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
            <Form.Control
              type="number"
              placeholder=""
              autoComplete="off"
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
              ref={limitiInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Më lajmëro kur kalohet limiti "
            />
          </Form.Group>
          <button type="button" className="butoniVazhdo" onClick={handleSubmit}>
            Vazhdo
          </button>
        </Form>
      </div>
    </>
  );
};

export default HomePage;

<p>Winance menaxhon shpenzimet dhe kursimet tuaja</p>;

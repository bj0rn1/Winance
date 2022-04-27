import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App2.css";
import { addRow, showAlert } from "../../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import useTable from "../utility";
import TableFooter from "./TableFooter";
import Alert from "./Alert";
import Sidebar from "../Sidebar";

const KategoriteShpenzimeve = () => {
  const [kategoria2, setKategoria2] = useState("");

  const [leket2, setLeket2] = useState("");

  const dispatch = useDispatch();

  let table = useSelector((state) => state.table);
  let isShow = useSelector((state) => state.isShow);
  const rowsPerPage = 5;

  const [celsi, setCelsi] = useState(0);
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(table, page, rowsPerPage);
  const [id, setID] = useState(3);

  const protoColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = `#${protoColor}`;

  const newRow = {
    id: 0,
    kategoria: "",
    leket: 0,
    color: "",
  };

  const handlSubmit = () => {
    if (kategoria2 && leket2) {
      newRow.id = id;
      newRow.kategoria = kategoria2;
      newRow.leket = leket2;
      newRow.color = color;

      dispatch(addRow(newRow));
      setID(id + 1);
      setLeket2("");
      setKategoria2("");
      console.log(table);
    }
  };

  return (
    <div className="App">
      <Sidebar />
      <table>
        <tbody>
          <tr>
            <th>Kategoria</th>
            <th>Sasia e lekeve</th>
          </tr>
          {slice.map((val, key) => {
            return (
              <tr key={key}>
                <td> {val.kategoria}</td>
                <td>{val.leket}</td>
                <td>
                  <button
                    key={key}
                    className="DeleteButton"
                    type="button"
                    onClick={() => {
                      dispatch(showAlert(true)), setCelsi(key);
                    }}
                  >
                    <div className="Fshij">Delete</div>
                  </button>
                  <div>{isShow ? <Alert celsi={celsi} /> : <></>}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />

      <div>
        <input
          autoComplete="off"
          className="input"
          type="text"
          name="kategoria"
          required="required"
          placeholder="Vendos kategorine..."
          onChange={(event) => setKategoria2(event.target.value)}
          value={kategoria2}
        />
        <input
          style={{ left: "60%" }}
          autoComplete="off"
          className="input"
          type="number"
          name="leket"
          required="required"
          placeholder="Vendos sasine e lekeve..."
          onChange={(event) => setLeket2(parseInt(event.target.value))}
          value={leket2}
        />
      </div>
      <div className="Shto">
        <button type="button" className="btn btn-success" onClick={handlSubmit}>
          Shto Kategori
        </button>
      </div>
    </div>
  );
};

export default KategoriteShpenzimeve;

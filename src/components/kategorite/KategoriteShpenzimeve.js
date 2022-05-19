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

  let bigTable = useSelector((state) => state.table);
  let table = Array.from(bigTable);

  function tableShift(tabela) {
    let x = 0;
    if (x == 0) {
      tabela.shift();
      x = 1;
    } else {
      console.log(0);
    }
  }
  tableShift(table);

  let isShow = useSelector((state) => state.isShow);
  const rowsPerPage = 5;

  const [celsi, setCelsi] = useState(0);
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(table, page, rowsPerPage);
  const [id, setID] = useState(1);

  const protoColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = `#${protoColor}`;

  const newRow = {
    id: 0,
    kategoria: "",
    leket: 0,
    color: "",
  };

  const handleSubmit = () => {
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
      {<Sidebar />}

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
                    <div className="Fshij">Fshi </div>
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

      <button type="button" className="Shto" onClick={handleSubmit}>
        Shto Kategori
      </button>
    </div>
  );
};

export default KategoriteShpenzimeve;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App2.css";
import { addRow } from "../../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import useTable from "../utility";
import TableFooter from "./TableFooter";
import Alert from "./Alert";

const KategoriteShpenzimeve = () => {
  const [kategoria2, setKategoria2] = useState("");

  const [isShow, setIsShow] = useState(false);

  const [leket2, setLeket2] = useState("");

  const dispatch = useDispatch();

  const newRow = {
    kategoria: "",
    leket: "",
  };
  let table = useSelector((state) => state.table);

  const rowsPerPage = 5;

  const [page, setPage] = useState(1);
  const { slice, range } = useTable(table, page, rowsPerPage);

  const handlSubmit = () => {
    if (kategoria2 && leket2) {
      newRow.kategoria = kategoria2;
      newRow.leket = `${leket2} leke te reja`;
      dispatch(addRow(newRow));

      setLeket2("");
      setKategoria2("");
      console.log(table);
    }
  };

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>Kategoria</th>
            <th>Sasia e lekeve</th>
          </tr>
          {slice.map(
            (
              val,

              key
            ) => {
              return (
                <tr key={key}>
                  <td> {val.kategoria}</td>
                  <td>{val.leket}</td>
                  <td>
                    <button
                      className="DeleteButton"
                      type="button"
                      onClick={() => setIsShow(!isShow)}
                    >
                      {" "}
                      {isShow && <Alert val={val.kategoria} key={key} />}
                      <div className="Fshij">Delete</div>
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />

      <div>
        <h2>Shto nje kategori</h2>
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
          onChange={(event) => setLeket2(event.target.value)}
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

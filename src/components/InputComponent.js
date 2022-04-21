import React from "react";

function InputComponent() {
  return (
    <tr>
      <td>
        <input
          autoComplete="off"
          type="text"
          required="required"
          placeholder="Vendos nje kategori..."
        />
      </td>{" "}
      <td>
        <input
          autoComplete="off"
          type="number"
          required="required"
          placeholder="Vendos sasine e lekeve..."
        />
      </td>
    </tr>
  );
}

export default InputComponent;

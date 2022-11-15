import React from "react";
import { useState } from "react";
import Props from "./Props";
function Todo() {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [toggleSubmit, setToggleSubmit] = useState(true);

  const handleSubmit = () => {
    setToggleSubmit(true);
    //toggle submit suru ma true cha so yo muni ko if run huncha

    if (toggleSubmit) {
      // harek items haru lai hamle id assign gareko and display gareko
      const itemsWithID = { id: new Date().getTime().toString(), name: input };
      setDisplay((oldvalues) => {
        return [...oldvalues, itemsWithID];
      });
    } else {
      //toggle submit false yani edit button dekhako cha vaney
      // display bata  item search gara jasko id chai edit click gareko wala todo item ko id sanga match garcha
      setDisplay(
        display.map((item) => {
          if (item.id === editTodo) {
            return { ...item, name: input };
          } else return item;
        })
      );
    }
    setInput("");
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* <FormValidation /> */}
      {/* <ContextAPI /> */}
      <div>
        <form onSubmit={() => submitHandler()}>
          <input
            type="text"
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
      <Props
        input={input}
        setInput={setInput}
        display={display}
        setDisplay={setDisplay}
        handleSubmit={handleSubmit}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        toggleSubmit={toggleSubmit}
        setToggleSubmit={setToggleSubmit}
      />
    </>
  );
}

export default Todo;

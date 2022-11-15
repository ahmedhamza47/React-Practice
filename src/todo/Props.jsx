import React from "react";

const Props = ({
  display,
  setDisplay,
  setInput,
  input,
  handleSubmit,
  editTodo,
  setEditTodo,
  toggleSubmit,
  setToggleSubmit,
}) => {
  const handleEdit = (id) => {
    console.log(id);
    setToggleSubmit(false);
    //tyo item find gara jasko id chai pass gareko id sanga match garcha
    const editItem = display.find((item) => {
      return item.id === id;
    });
    console.log(editItem);
    setInput(editItem.name);
    setEditTodo(editItem.id);
  };

  const handleDelete = (id) => {
    setDisplay(
      display.filter((item) => {
        return item.id !== id;
      })
    );
  };
  return (
    <>
      <div>
        {toggleSubmit ? (
          <button type="submit" onClick={handleSubmit}>
            {" "}
            Enter
          </button>
        ) : (
          <button type="submit" onClick={handleSubmit}>
            {" "}
            Save
          </button>
        )}

        {display.map((item) => {
          return (
            <div key={item.id}>
              <li>
                {item.name}
                <button type="button" onClick={() => handleEdit(item.id)}>
                  Edit
                </button>
                <button type="button" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </li>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Props;

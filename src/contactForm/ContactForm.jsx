import React, { useState } from "react";

const ContactForm = () => {
  const [input, setInput] = useState({
    name: "",
    roll: "",
  });
  const [displayContact, setDisplayContact] = useState([]);
  const [editContact, setEditContact] = useState(null);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const handleSubmit = () => {
    if (!editContact) {
      const contactWithID = {
        id: new Date().getTime().toString(),
        contactName: input.name,
        contactRoll: input.roll,
      };
      //console.log(contactWithID);
      setDisplayContact((oldContact) => {
        return [...oldContact, contactWithID];
      });
    } else {
      setDisplayContact(
        displayContact.map((item) => {
          if (item.id === editContact) {
            return {
              ...item,
              contactName: input.name,
              contactRoll: input.roll,
            };
          } else return item;
        })
      );
      setEditContact(null);
    }
    setInput({ name: "", roll: "" });
    setToggleSubmit(true);
  };
  const handleEdit = (id) => {
    console.log(id);
    const editContactData = displayContact.find((item) => {
      return item.id === id;
    });
    setInput({
      name: editContactData.contactName,
      roll: editContactData.contactRoll,
    });
    setEditContact(id);
    setToggleSubmit(false);
  };
  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={input.name}
            placeholder="Enter Name"
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />

          <input
            type="number"
            value={input.roll}
            placeholder="Enter Roll"
            onChange={(e) => setInput({ ...input, roll: e.target.value })}
          />
          {toggleSubmit ? (
            <button type="submit" onClick={() => handleSubmit()}>
              {" "}
              Add contact
            </button>
          ) : (
            <button type="submit" onClick={() => handleSubmit()}>
              {" "}
              Save
            </button>
          )}
        </form>

        <div className="display">
          {displayContact.map((item) => {
            return (
              <div key={item.id}>
                <li>
                  Name: {item.contactName} <br /> Roll :{item.contactRoll}
                  <button type="button" onClick={() => handleEdit(item.id)}>
                    Edit{" "}
                  </button>
                </li>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ContactForm;

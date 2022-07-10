import { useState } from "react";
import PropTypes from "prop-types";
import s from "./Form.module.css";

function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "name" ? setName(value) : setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, number);
    resetInput();
  };

  const resetInput = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Ivan Ivanov"
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          value={number}
          type="tel"
          onChange={handleChange}
          name="number"
          pattern="\+38\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}"
          placeholder="+380 (__) ___-__-__"
          required
        />
      </label>

      <button type="submit" className={s.btnSubmit}>
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;

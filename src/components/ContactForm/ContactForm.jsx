import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button, Wrapper } from './ContactForm.styled';
import propTypes from 'prop-types';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid(7);
  const numberInputid = nanoid(7);

  const inputHandler = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else setNumber(e.target.value);
  };

  const resetFormFields = () => {
    setName('');
    setNumber('');
  };

  const submitHandler = e => {
    e.preventDefault();

    addContact({ name, number, id: nanoid(10) });
    resetFormFields();
  };

  return (
    <Form onSubmit={submitHandler}>
      <Wrapper>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          id={nameInputId}
          value={name}
          onChange={inputHandler}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor={numberInputid}>Number</Label>
        <Input
          id={numberInputid}
          value={number}
          onChange={inputHandler}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add Contact</Button>
      </Wrapper>
    </Form>
  );
};

ContactForm.propTypes = {
  addContact: propTypes.func.isRequired,
};

export default ContactForm;

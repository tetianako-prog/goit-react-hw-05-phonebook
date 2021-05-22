import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook-actions';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ContactFormStyled from './ContactFormStyled';
import FormButtonStyled from './FormButtonStyled';

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = v4();
  numberInputId = v4();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactFormStyled onSubmit={this.handleSubmit}>
        <label className="label" htmlFor={this.nameInputId}>
          Name
        </label>
        <input
          className="input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id={this.nameInputId}
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label className="label" htmlFor={this.numberInputId}>
          Number
        </label>
        <input
          className="input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          id={this.numberInputId}
          value={this.state.number}
          onChange={this.handleChange}
        />
        <FormButtonStyled>Add contact</FormButtonStyled>
      </ContactFormStyled>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addContact: obj => dispatch(actions.addContact(obj)),
});
export default connect(null, mapDispatchToProps)(ContactForm);

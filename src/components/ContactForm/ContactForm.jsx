import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
    render() {
        const { onFormSubmit, inputHandler } = this.props;
        return (
            <form className={styles['from']} onSubmit={onFormSubmit}>
                <label>
                    Name:
                    <input
                        className={styles['input']}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        onChange={inputHandler}
                        required
                    />
                </label>
                <label>
                    Number:
                    <input
                        className={styles['input']}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        onChange={inputHandler}
                        required
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    onFormSubmit: PropTypes.func,
    inputHandler: PropTypes.func,
};

export default ContactForm;

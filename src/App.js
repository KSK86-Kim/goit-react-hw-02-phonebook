import React, { Component, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

//////
import contats from './json/contacts.json';

//////
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Container from './components/Container';
import Section from './components/Section';

//////
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
    state = {
        contacts: contats,
        filter: '',
        name: '',
        number: '',
    };

    onFormSubmit = event => {
        event.preventDefault();
        if (this.state.contacts.some(({ name }) => name === this.state.name)) {
            alert(`${this.state.name} is already in contacts.`);
            event.currentTarget.reset();
            return;
        }
        this.setState(prevState => {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        name: prevState.name,
                        number: prevState.number,
                        id: uuidv4(),
                    },
                ],
            };
        });
        event.currentTarget.reset();
    };

    handleInputChange = event => {
        const fieldType = event.target.name;
        const fieldContent = event.target.value;
        this.setState({ [fieldType]: fieldContent });
    };

    handleFilterChange = event => {
        const filterValue = event.target.value.toLowerCase();
        this.setState({ filter: filterValue });
    };

    getFilteredContacts = () => {
        const { contacts, filter } = this.state;
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter),
        );
    };

    deleteConact = id => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== id),
        }));
    };

    render() {
        return (
            <Fragment>
                <Header />
                <Main>
                    <Section title="Phonebook">
                        <Container>
                            <ContactForm
                                onFormSubmit={this.onFormSubmit}
                                inputHandler={this.handleInputChange}
                            />
                        </Container>
                        <Container>
                            <h2>Filter</h2>
                            <Container>
                                <Filter
                                    filterHandler={this.handleFilterChange}
                                />
                            </Container>
                            <h2>Contacts</h2>
                            <ContactList
                                contacts={this.getFilteredContacts()}
                                deleteContactHandler={this.deleteConact}
                            ></ContactList>
                        </Container>
                    </Section>
                </Main>
                <Footer />
            </Fragment>
        );
    }
}

export default App;

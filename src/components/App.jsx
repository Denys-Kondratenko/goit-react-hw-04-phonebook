import contacts from '../db/contacts.json';
import { Component } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContact = localStorage.getItem('contacts');
    if (savedContact !== null) {
      this.setState({
        contacts: JSON.parse(savedContact),
      });
    } else {
      this.setState({
        contacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const contactsName = this.state.contacts.map(contact => contact.name);

    return (
      <Layout>
        <Section title="Phonebook">
          <AddContactForm
            onSave={this.addContact}
            contactsName={contactsName}
          />
        </Section>
        <Section firstTitle="Contacts">
          <Contacts
            contacts={this.getFilterContacts()}
            onDeleteContact={this.deleteContact}
          >
            <Filter initialValues={this.state} onChange={this.changeFilter} />
          </Contacts>
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}

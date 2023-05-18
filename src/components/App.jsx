import initialContacts from '../db/initialContacts.json';
import { useEffect, useState } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Filter } from './Filter/Filter';

const savedContact = JSON.parse(localStorage.getItem('contacts'));

export const App = () => {
  const [contacts, setContacts] = useState(
    savedContact ?? initialContacts ?? []
  );
  const [filter, setFilter] = useState('');

  const contactsName = contacts.map(contact => contact.name);
  const initialValues = { contacts, filter };

 useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Layout>
      <Section title="Phonebook">
        <AddContactForm onSave={addContact} contactsName={contactsName} />
      </Section>
      <Section firstTitle="Contacts">
        <Contacts
          contacts={getFilterContacts()}
          onDeleteContact={deleteContact}
        >
          <Filter initialValues={initialValues} onChange={changeFilter} />
        </Contacts>
      </Section>
      <GlobalStyle />
    </Layout>
  );
};

// class OldApp extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const savedContact = localStorage.getItem('contacts');
//     if (savedContact !== null) {
//       this.setState({
//         contacts: JSON.parse(savedContact),
//       });
//     } else {
//       this.setState({
//         // contacts,
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = newContact => {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getFilterContacts = () => {
//     const { filter, contacts } = this.state;

//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const contactsName = this.state.contacts.map(contact => contact.name);

//     return (
//       <Layout>
//         <Section title="Phonebook">
//           <AddContactForm
//             onSave={this.addContact}
//             contactsName={contactsName}
//           />
//         </Section>
//         <Section firstTitle="Contacts">
//           <Contacts
//             contacts={this.getFilterContacts()}
//             onDeleteContact={this.deleteContact}
//           >
//             <Filter initialValues={this.state} onChange={this.changeFilter} />
//           </Contacts>
//         </Section>
//         <GlobalStyle />
//       </Layout>
//     );
//   }
// }

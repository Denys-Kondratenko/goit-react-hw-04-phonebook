import PropTypes from 'prop-types';
import { ContactItem, ContactsList, DeleteButton } from './Contacts.styled';

export const Contacts = ({ contacts, children, onDeleteContact }) => {
  return (
    <>
      {children}
      <ContactsList>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <p>
                {name}: {number}
              </p>
              <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </DeleteButton>
            </ContactItem>
          );
        })}
      </ContactsList>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
  children: PropTypes.node,
};

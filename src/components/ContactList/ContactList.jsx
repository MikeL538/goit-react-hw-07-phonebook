// ContactList.jsx
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact => {
    const { name, phone } = contact;
    return (
      name.toLowerCase().includes(filter.toLowerCase()) ||
      phone.includes(filter)
    );
  });

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};

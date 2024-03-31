import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts, selectNameFilter } from '../../redux/selector';
import { nanoid } from 'nanoid';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.trim().toLowerCase())
  );
  return (
    <ul className={css.contactsList}>
      {filterContacts.map(contact => (
        <li className={css.contactItem} key={nanoid()}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

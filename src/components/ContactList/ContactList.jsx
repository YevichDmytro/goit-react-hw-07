import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectContacts, selectNameFilter } from '../../redux/selectors';
import style from './ContactList.module.css';

const getVisibleContacts = (contactsList, filter) => {
  switch (filter) {
    case filter:
      return contactsList.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    default:
      return contactsList;
  }
};

const ContactList = () => {
  const contactsList = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contactsList, filter);

  return (
    <>
      {visibleContacts.length > 0 ? (
        <ul className={style.list}>
          {visibleContacts.map(contact => {
            return (
              <li key={contact.id} className={style.item}>
                <Contact
                  contactName={contact.name}
                  contactNumber={contact.number}
                  contactId={contact.id}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <span className={style.emptyList}>No one contact yet</span>
      )}
    </>
  );
};

export default ContactList;

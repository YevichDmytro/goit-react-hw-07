import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/selectors';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {visibleContacts.length > 0 && (
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
      )}
      {!loading && !error && visibleContacts.length === 0 && (
        <span className={style.emptyList}>No one contact yet</span>
      )}
    </>
  );
};

export default ContactList;

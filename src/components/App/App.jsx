import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/selectors';
import { fetchAll } from '../../redux/contactsOps';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import style from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div className={style.wrap}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && (
        <b className={style.requestText}>Request in progress...</b>
      )}
      <ContactList />
    </div>
  );
};

export default App;

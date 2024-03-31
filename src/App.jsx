import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
// import userData from "./userData.json";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;

import './App.css';
import ContactList from './ContactList';


function App() {
  return (
    <div className='container '>
      <h1 className='bg-primary text-center  mt-3 fs-3 container border rounded '>Contact Manager App</h1>
      <ContactList />
    </div>
  );
}

export default App;

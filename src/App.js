import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Form from './components/Form';
import TransactionsList from './components/TransactionsList';

function App() {

  
  return (
    <div className="App container mx-auto bg-gray-100">
      <NavBar/>
      <Search/>
      <Form/>
      <TransactionsList/>
    </div>
  );
}

export default App;

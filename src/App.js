import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  return (
    <div className="App container mx-auto bg-gray-100">
      <NavBar/>
      <Search/>
      <Form/>
      <Table/>
    </div>
  );
}

export default App;

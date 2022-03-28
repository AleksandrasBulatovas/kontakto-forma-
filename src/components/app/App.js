import './App.css';
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../header/Header";
import NewContact from '../newContact/NewContact';
import TableK from '../tablek/TableK';


function App() {
  return (
      <Container>
        <Router>
          <Header/>
          <TableK/>          
            <Routes>
                <Route path='/' element={<NewContact/>}/>
            </Routes>
        </Router>
      </Container>
  );
}

export default App;

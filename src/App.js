import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";

import Container from "react-bootstrap/Container";

import "../node_modules/font-awesome/css/font-awesome.min.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Form />
      </Container>
      
    </div>
  );
}

export default App;

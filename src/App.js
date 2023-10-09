import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FormInput from "./FormInput";
import FormOutput from "./FormOutput";
import { useState } from "react";

function App() {
  const [calculate, setCalculate] = useState(false);
  const [formData, setFormData] = useState(null);

  function onCalculateHandler(e) {
    e.preventDefault();
    setCalculate(true);
    setFormData({ campus: e.target[0].value, projectType: e.target[1].value });
    console.log("HI", e.target[0].value, e.target[1].value);
  }

  return (
    <Container className="app">
      <Row className="row--text-section">
        <h6>CPMG INTELLIGENCE</h6>
        <h3>PROJECT COST INDICATOR</h3>
        <p>
          Estimates for a new project based on costs of historical projects. All
          estimates are in USD ($).
        </p>
      </Row>
      <Row className="row--form">
        <FormInput calculateHandler={onCalculateHandler} />
        <FormOutput renderResult={calculate} data={formData} />
      </Row>
    </Container>
  );
}

export default App;

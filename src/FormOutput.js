import Col from "react-bootstrap/Col";

function FormOutput({ renderResult, data }) {
  if (renderResult) {
    const { campus, projectType } = data;
    const heading = `Estimated costs for a ${projectType} project at ${campus} campus are:`;
    return (
      <Col className="output-col">
        <h5>{heading}</h5>
        <ul>
          <li>Renovation: $45,999,191.00</li>
          <li>FF&E: $123,885.00</li>
          <li>New Construction Shell/Core: $118,899.00</li>
          <li>Architect/Engineer: $123.00</li>
          <li>Security: $77,888.0</li>
          <li>Renovation: $3,233.0</li>
        </ul>
      </Col>
    );
  }

  return (
    <Col className="output-col-no-val d-flex align-items-center justify-content-center">
      Make your selections on the left to get started.
    </Col>
  );
}

export default FormOutput;

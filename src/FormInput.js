import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import construction from "./construction.png";
// import { useState } from "react";

function FormInput({ calculateHandler }) {
  //   const [campusSel, setCampusSel] = useState(false);
  //   const [typeSel, setTypeSel] = useState(false);

  //   function onCampusSel() {
  //     setCampusSel(true);
  //   }

  //   function onTypeSel() {
  //     setTypeSel(true);
  //   }

  return (
    <Col xs={3}>
      <Row>
        <img className="icon-img" src={construction} alt="" />
      </Row>
      <Row className="row--form-left-text">Select inputs</Row>
      <Row>
        <Form className="input-form" onSubmit={calculateHandler}>
          <Form.Select
            defaultChecked={false}
            aria-label="Default select example"
            required={true}
            // onSelect={onCampusSel}
          >
            <option>CAMPUS</option>
            <option value="TEMPE">TEMPE</option>
            <option value="DOWNTOWN">DOWNTON-PHOENIX</option>
            <option value="WEST">WEST</option>
            <option value="POLY">POLYTECHNIC</option>
          </Form.Select>
          <Form.Select
            defaultChecked={false}
            aria-label="Default select example"
            required={true}
            // onSelect={onTypeSel}
          >
            <option>PROJECT TYPE</option>
            <option value="RENOVATION">RENOVATION</option>
            <option value="RENOVATION_LAB">RENOVATION LAB</option>
            <option value="BUILDING_INF">BUILDING INF</option>
            <option value="PLANNING_STUDY">PLANNING/STUDY</option>
          </Form.Select>
          <Button
            // disabled={!(campusSel && typeSel)}
            type="submit"
            variant="outline-danger"
          >
            CALCULATE
          </Button>{" "}
        </Form>
      </Row>
    </Col>
  );
}

export default FormInput;

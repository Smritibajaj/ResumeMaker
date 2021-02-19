import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { Form, Button } from "react-bootstrap";

const HeaderSetting = (props) => {
  const { header, setHeader } = props;
  const handleChangeComplete = (color) => {
    setHeader({ ...header, backgroundColor: color.hex });
  };
  
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]');
    const ts = Math.round((new Date).getTime()/1000);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("api_key", "338325982453636");
    formData.append("timestamp", ts);
    formData.append("public_id","sample_image")
    formData.append("eager", "w_400,h_300,c_pad|w_260,h_200,c_crop");
    formData.append("signature", 'bfd09f95f331f558cbd1320e67aa8d488770583e');
    const options = {
      method: "POST",
      body: formData,
    };

    return fetch(
      "https://api.cloudinary.com/v1_1/grorapid-sessions/image/upload",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          imageUrl: res.secure_url,
          imageAlt: `An image of ${res.original_filename}`,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="John Smith" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="johnsmith@gmail.com" />
      </Form.Group>
      <Form.Group controlId="formBasicMobile">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="(555) 123-4567" />
      </Form.Group>
      <Form.Group controlId="formBasicLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="New York, NY" />
      </Form.Group>
      <Form.Group controlId="formBasicLink">
        <Form.Label>Link</Form.Label>
        <Form.Control type="text" placeholder="mycoolportfolio.com/myname" />
      </Form.Group>
      <Form.Group className="d-flex">
        <Form.Label>Background Color</Form.Label>
        <div
          style={{
            marginLeft: "1rem",
            padding: "0.5rem",
            background: "#fff",
            borderRadius: "1px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          <div
            onClick={handleClick}
            style={{
              width: "36px",
              height: "14px",
              borderRadius: "2px",
              background: `${header.backgroundColor}`,
            }}
          >
            <div />
          </div>
          {displayColorPicker ? (
            <div
              style={{
                position: "absolute",
                zIndex: "2",
              }}
            >
              <div
                onClick={handleClose}
                style={{
                  position: "fixed",
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px",
                }}
              />
              <SketchPicker
                color={header.backgroundColor}
                onChange={handleChangeComplete}
              />
            </div>
          ) : null}
        </div>
      </Form.Group>
      <Form.Group className="d-flex">
        <Form.Label>Font Color</Form.Label>
        <div
          style={{
            marginLeft: "1rem",
            padding: "0.5rem",
            background: "#fff",
            borderRadius: "1px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          <div
            onClick={handleClick}
            style={{
              width: "36px",
              height: "14px",
              borderRadius: "2px",
              background: `${header.backgroundColor}`,
            }}
          >
            <div />
          </div>
          {displayColorPicker ? (
            <div
              style={{
                position: "absolute",
                zIndex: "2",
              }}
            >
              <div
                onClick={handleClose}
                style={{
                  position: "fixed",
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px",
                }}
              />
              <SketchPicker
                color={header.backgroundColor}
                onChange={handleChangeComplete}
              />
            </div>
          ) : null}
        </div>
      </Form.Group>
      <Form.Group>
        <div className="form-group">
          <input type="file" />
        </div>
        <Button
          type="button"
          className="btn btn-secondary"
          onClick={handleImageUpload}
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default HeaderSetting;

import { useEffect, useState } from "react";
import "../../styles/qrcode.css";
import { requestClient } from "../../utils/request-client";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import { message } from "antd";

function QrCode() {
  const [authnumber, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");
  const history = useHistory();
  // Updating the input word when user
  // click on the generate button
  function handleClick() {
    setWord(authnumber);
    try {
      const qrData = {
        authnumber,
      };
      requestClient.post("/drug/nafdac", qrData);
      message.success("Qr code generated");
    } catch (err) {
      console.error(err);
      history.push("/dashboard");
      message.error("Kindly provide a valid drug ID or check the drug status!");
    }
  }

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="input-box">
        <div className="gen">
          <input
            type="text"
            onChange={(e) => {
              setTemp(e.target.value);
            }}
            placeholder="Enter text authentication no"
            className="p-1"
            //value="1234567"
          />
          <button
            className="button bg-gray-600 text-white text-md"
            onClick={handleClick}
          >
            Generate
          </button>
        </div>
        <div className="extra">
          <h5>Background Color:</h5>
          <input
            type="color"
            onChange={(e) => {
              setBgColor(e.target.value.substring(1));
            }}
          />
          <h5>Dimension:</h5>
          <input
            type="range"
            min="200"
            max="600"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="output-box">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button type="button" className="bg-blue-500">
            Download
          </button>
        </a>
      </div>
    </div>
  );
}

export default QrCode;

import React, { useState } from "react";
import "../App.css";
import FontColor from "../components/FontColor/FontColor";
import BackgroundColor from "../components/BackgroundColor/BacgroundColor";
import BtnBgColor from "../components/BtnBgColor/BtnBgColor";
import BtnTextColor2 from "../components/BtnTextColor/BtnTextColor";
import FontSize from "../components/FontSize/FontSize";
import LeftSideComponent from "../components/LeftSideComponent/LeftSideComponent";

function Home() {
    const [fColor, setFColor] = useState("");
    const [BGColor, setBGColor] = useState("");
    const [BtnTextColor1, setBtntextColor] = useState("");
    const [BtnbgColor, setBtnbgColor] = useState("");
    const [fontSize, setfontSize] = useState("");

    function handleDataFromChildFC(data) {
        setFColor(data);
      }
      function handleDataFromChildBG(data) {
        setBGColor(data);
      }
      function handleDataFromChildBtnBg(data) {
        setBtnbgColor(data);
      }
      function handleDataFromChildBtnTxt(data) {
        setBtntextColor(data);
      }
      function handleDataFromChildFontSize(data) {
        setfontSize(data);
      }
      const applyColor = () => {
        // Apply color to background
    
        // Send a request to the server to update the JSON file
        fetch('http://localhost:3001/api/update-color', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fontColor: fColor,
            backgroundColor: BGColor,
            BtnTextColor: BtnTextColor1,
            BtnBgcolor: BtnbgColor,
            fontSize: fontSize,
          }),
        });
      };
  return (
    <div className="App">
      <div className="max-container">
        <div className="row content-wrapper">
          <div className="col-lg-3 left-section">
            <h3 className="sidebar-title">Select Your Theme</h3>
            <FontColor sendDataToParent={handleDataFromChildFC} />
            <FontSize sendDataToParent={handleDataFromChildFontSize} />
            <BackgroundColor sendDataToParent={handleDataFromChildBG} />
            <BtnBgColor sendDataToParent={handleDataFromChildBtnBg} />
            <BtnTextColor2 sendDataToParent={handleDataFromChildBtnTxt} />
           
            <button className="apply-color" onClick={applyColor}>Apply Color</button>
          </div>
          <div className="col-lg-9 right-section" style={{  backgroundColor: BGColor }}>
             <LeftSideComponent fColor={fColor} BGColor={BGColor} BtnTextColor1={BtnTextColor1} BtnbgColor={BtnbgColor} fontSize={fontSize}/>
            </div>
          </div>
        </div>
      </div>
   
  );
}
export default Home;
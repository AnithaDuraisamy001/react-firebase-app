import React, { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Modal } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Layout({sendDataToParent}) {
    const navigate = useNavigate();
    const fileInput = useRef();
    const handleImportClick = () => {
        const modalElement = document.getElementById('uploadModal');
        const bsModal = new Modal(modalElement);
        bsModal.show();
    };
    const handleCloseModel = () => {
        let myModalEl = document.getElementById('uploadModal');
        let myModalE2 = document.querySelector('.modal-backdrop');
        myModalEl.classList.remove('show');
        myModalE2.remove();
        myModalEl.setAttribute('aria-hidden', 'true');
        myModalEl.setAttribute('style', 'display: none');
        let body = document.querySelector('body');
        body.classList.remove('modal-open');
        body.classList.add('remove-hidden');
    }
    const handleFileUpload = (e) => {
        const file = fileInput.current.files[0];
        // Handle the file upload here
       // console.log(file);
        const modalElement = document.getElementById('uploadModal');
        const bsModal = new Modal(modalElement);
        bsModal.hide();
        var reader = new FileReader();
        var fileToRead = document.querySelector('input').files[0];
        reader.addEventListener("loadend", function() {
       // alert(reader.result);
        sendDataToParent(reader.result);
        });
        reader.readAsText(fileToRead);
        let myModalEl = document.getElementById('uploadModal');
        let myModalE2 = document.querySelector('.modal-backdrop');
        myModalEl.classList.remove('show');
        myModalE2.remove();
        let body = document.querySelector('body');
        body.classList.remove('modal-open');
        body.classList.add('remove-hidden')
        myModalEl.setAttribute('aria-hidden', 'true');
        myModalEl.setAttribute('style', 'display: none');
        navigate("/home")
    };
    
  return (
    <div className="App mt-5">
        <h1>Theme Builder Tool</h1>
        <p>Here you go...if you want to change/import theme from here, you can select one of the following options:</p>
        <div className="text-center">
        <div className="flex-wrapper">
            <div onClick={() => navigate("/home")} className="select_base_theme">
                Select Base Theme
            </div>
            <div onClick={handleImportClick} className="select_base_theme">
               import a Theme
            </div>
        </div>
        </div>
        <div className="modal fade" id="uploadModal" tabIndex="-1" role="dialog" aria-labelledby="uploadModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="uploadModalLabel">Upload CSS File</h5>
                                        <button type="button" onClick={handleCloseModel} className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <input accept=".json" type="file" ref={fileInput} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" onClick={handleCloseModel}  className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary"  onClick={handleFileUpload}>Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div> 
      </div>
   
  );
}
export default Layout;


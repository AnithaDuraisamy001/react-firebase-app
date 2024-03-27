import React, { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Modal } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Layout() {

    const navigate = useNavigate();
    const fileInput = useRef();

    const handleImportClick = () => {
        const modalElement = document.getElementById('uploadModal');
        const bsModal = new Modal(modalElement);
        bsModal.show();
    };
    const handleCloseModel = () => {
        // const modalElement = document.getElementById('uploadModal');
        // const bsModal = new Modal(modalElement);
        let myModalEl = document.getElementById('uploadModal');
        let myModalE2 = document.querySelector('.modal-backdrop');
        // let modal = bootstrap.Modal.getInstance(myModalEl)
        // modal.hide()
        myModalEl.classList.remove('show');
        myModalE2.remove();
        myModalEl.setAttribute('aria-hidden', 'true');
        myModalEl.setAttribute('style', 'display: none');
        // modalElement.trigger(' hidden.bs.modal');
        //bsModal.hide();
    }
    const handleFileUpload = () => {
        const file = fileInput.current.files[0];
        // Handle the file upload here
        console.log(file);
        const modalElement = document.getElementById('uploadModal');
        const bsModal = new Modal(modalElement);
        bsModal.hide();
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
                                        <input type="file" ref={fileInput} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={handleFileUpload}>Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div> 
      </div>
   
  );
}
export default Layout;
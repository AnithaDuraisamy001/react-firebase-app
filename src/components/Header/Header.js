import React, { useRef } from 'react';
import { Modal } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";

const Header = () => {
    

    return (
    
            <header className='header'>
                <div className='row'>
                    <div className='logo text-center'>
                        <a href='/'>
                            <h1>Theme Builder</h1> 
                        </a>
                    </div>
                    <div>
                        {/* <button className="button" onClick={handleImportClick}>Import</button>
                       */}
                    </div>
                </div>
            </header>
        );
    
};

export default Header;
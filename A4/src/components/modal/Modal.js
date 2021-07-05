import React from "react";
import ReactDOM from "react-dom";


//Code taken from: https://upmostly.com/tutorials/modal-components-react-custom-hooks
const Modal = ({ isShowing, hide, data }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay"/>
        <div className="modal-wrapper"  role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <ul className="modal__ul">
                    <br/>
                    <p>ID: {data._id}</p>
                    <br/>
                    <p>NAME: {data.name}</p>
                    <br/>
                    <p>RATING: {data.rating}</p>
                    <br/>
                    <p>URL: {data.url}</p>
                    <br/>
                </ul>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;
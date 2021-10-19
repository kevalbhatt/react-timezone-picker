import React from 'react'


const Modal = ({ children, show, onClose }: any) => {

    const [open, setOpen] = React.useState(show);

    React.useEffect(() => {
        setOpen(show);
    }, [show])


    return open ? <>
        <div className="fade modal-backdrop show"></div>
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header"><span className="close" onClick={() => {
                        if (onClose) {
                            onClose();
                        } else {
                            setOpen(false)
                        }
                    }}>Close</span></div>
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    </> : null
}

export default Modal;

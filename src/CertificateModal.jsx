import React from 'react';

const CertificateModal = ({ pdfUrl }) => {
    return (
        <>

        <div className="modal fade" id="modalIssueCertificate" data-bs-backdrop="static" data-bs-keyboard="true" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Cerficado Evento</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <embed src="src\assets\certificate.pdf" width="100%" height="550" type="application/pdf" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CertificateModal;

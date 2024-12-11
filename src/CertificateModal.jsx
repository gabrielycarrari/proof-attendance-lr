import React from 'react';

const CertificateModal = ({ pdfUrl, onClose }) => {
    return (
        <div className="modal fade show" id="modalIssueCertificate" style={{ display: 'block' }} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Certificado Evento</h1>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {/* Exibe o PDF dentro do modal */}
                        <embed src={pdfUrl} width="100%" height="550" type="application/pdf" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={onClose}>Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateModal;

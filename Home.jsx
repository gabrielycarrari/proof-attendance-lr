import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const Home = () => {
    const [certificateId, setCertificateId] = useState('');
    const [address, setAddress] = useState('');
    const [signature, setSignature] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (window.ethereum) {
            connectMetamask();
        }
    }, []);

    // contract address and ABI 
    const contractAddress = "0x02c5fcbf1bd879c3a3dbc15d7a429d1d5635922e";
    const contractABI = [
        [
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "certificateHash",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                    }
                ],
                "name": "storeCertificate",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "verifiedCertificates",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "certificateHash",
                        "type": "bytes32"
                    }
                ],
                "name": "verifyCertificate",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
    ];

    const connectMetamask = async () => {
        if (typeof window.ethereum !== 'undefined') {  
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                await provider.send('eth_requestAccounts', []);  
                const signer = provider.getSigner();
                const userAddress = await signer.getAddress();
                setAddress(userAddress);
                console.log('Conectado com:', userAddress);
            } catch (err) {
                console.error('Erro ao conectar com o Metamask:', err);
            }
        } else {
            alert('Metamask não encontrado. Por favor, instale a extensão Metamask.');
        }
    };

    const registerCertificate = async () => {
        if (!certificateId || !address) {
            alert('Por favor, insira o ID do certificado e conecte-se ao Metamask!');
            return;
        }
        const message = `Certificado: ${certificateId}`;
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const signature = await signer.signMessage(message);
            setSignature(signature);
            const certificateHash = ethers.utils.id(certificateId);  
            await registerCertificateBackend(certificateHash, signature);
        } catch (err) {
            console.error('Erro ao assinar o certificado:', err);
        }
    };

    const registerCertificateBackend = async (certificateHash, signature, address) => {
        try {
            const response = await fetch('http://localhost:8000/registrar_certificado', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    certificate_id: certificateId,
                    signature: signature,
                    address: address,
                }),
            });
    
            if (!response.ok) {
                const data = await response.json();
                setStatus(data.message || 'Erro ao registrar o certificado.');
            } else {
                setStatus('Certificado registrado com sucesso!');
            }
        } catch (error) {
            console.error('Erro ao registrar o certificado no backend:', error);
            setStatus('Erro ao registrar o certificado.');
        }
    };

    const verifyCertificate = async () => {
        const certificateHash = ethers.utils.id(certificateId);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, contractABI, provider);
        try {
            const isVerified = await contract.verifyCertificate(certificateHash);
            setStatus(isVerified ? 'Certificado válido.' : 'Certificado inválido.');
        } catch (error) {
            console.error('Erro ao verificar o certificado:', error);
            setStatus('Erro ao verificar o certificado.');
        }
    };

    return (
        <div className="py-5">
            <h1>Conferência de Certificado Digital</h1>
            <p className="my-4">Valide a autenticidade de um certificado de presença digital utilizando a blockchain. Insira o endereço da carteira para visualizar os detalhes do evento e a prova de presença.</p>

            <div className="d-flex justify-content-center mt-5">
                <form action="" className="w-75">
                    <div className="input-group mb-3" style={{ height: '55px' }}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Identificador do Certificado"
                            value={certificateId}
                            onChange={(e) => setCertificateId(e.target.value)}
                        />
                        <button className="btn btn-outline-primary" type="button" onClick={registerCertificate}>
                            <i className="bi bi-search pe-2"></i>
                            Registrar Certificado
                        </button>
                    </div>
                </form>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <button className="btn btn-outline-success" onClick={connectMetamask}>
                    Conectar ao Metamask
                </button>
            </div>

            <div className="mt-4">
                <p>Status: {status}</p>
            </div>

            <div className="mt-4">
                <button className="btn btn-outline-info" onClick={verifyCertificate}>
                    Verificar Certificado
                </button>
            </div>
        </div>
    );
};

export default Home;

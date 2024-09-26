import { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { BsCreditCard, BsPerson, BsCalendar, BsShieldLock } from 'react-icons/bs';

export const Profile = () => {
    const [products, setProducts] = useState([]);
    const [cardData, setCardData] = useState({
        cardNumber: '',
        cardHolder: '',
        expirationDate: '',
        cvv: ''
    });
    const [isFormDisabled, setIsFormDisabled] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const savedCard = localStorage.getItem('debitCard');
        if (savedCard) {
            setCardData(JSON.parse(savedCard));
            setIsFormDisabled(true);
        }
        setProducts(JSON.parse(localStorage.getItem('products')) || []);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "cardNumber" && (/\D/.test(value) || value.length > 16)) return;
        if (name === "cvv" && (/\D/.test(value) || value.length > 4)) return;
        if (name === "expirationDate" && (/\D/.test(value.replace("/", "")) || value.length > 5)) return;

        if (name === "expirationDate") {
            if (value.length === 2 && !value.includes("/")) {
                setCardData({ ...cardData, [name]: value + '/' });
            } else {
                setCardData({ ...cardData, [name]: value });
            }
        } else {
            setCardData({ ...cardData, [name]: value });
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('debitCard', JSON.stringify(cardData));
        setIsFormDisabled(true);
        setShowModal(false);
    };

    const handleEditCard = () => {
        setIsFormDisabled(false);
    };

    return (
        <div className="container">
            <h1 className="text-center">Perfil</h1>

            {/* Mostrar historial de compras */}
            {products && products.length > 0 ? (
                <div>
                    <p className="text-success">Compras realizadas</p>
                    <div className="d-flex flex-wrap justify-content-center">
                        {products.map((product, i) => (
                            <div className="card m-2" style={{ width: "14em" }} key={i}>
                                <img className="card-img-top" src={product.image} alt="Product" />
                                <div className="card-body">
                                    <p className="card-text">{product.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-danger">No has realizado ninguna compra</p>
            )}

            {/* Botón para ver/agregar tarjeta */}
            <div className="text-center mt-4">
                <Button variant="link" onClick={() => setShowModal(true)}>
                    {isFormDisabled ? 'Ver tarjeta guardada' : 'Agregar tarjeta de débito'}
                </Button>
            </div>

            {/* Modal para tarjeta */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{isFormDisabled ? 'Tarjeta Guardada' : 'Agregar Tarjeta de Débito'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label><BsPerson /> Titular de la tarjeta</Form.Label>
                            <Form.Control
                                type="text"
                                name="cardHolder"
                                value={cardData.cardHolder}
                                onChange={handleInputChange}
                                disabled={isFormDisabled}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><BsCreditCard /> Número de tarjeta</Form.Label>
                            <Form.Control
                                type="text"
                                name="cardNumber"
                                value={cardData.cardNumber}
                                onChange={handleInputChange}
                                disabled={isFormDisabled}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><BsCalendar /> Fecha de expiración</Form.Label>
                            <Form.Control
                                type="text"
                                name="expirationDate"
                                value={cardData.expirationDate}
                                onChange={handleInputChange}
                                disabled={isFormDisabled}
                                placeholder="MM/AA"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><BsShieldLock /> CVV</Form.Label>
                            <Form.Control
                                type="text"
                                name="cvv"
                                value={cardData.cvv}
                                onChange={handleInputChange}
                                disabled={isFormDisabled}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={isFormDisabled}>
                            Guardar tarjeta
                        </Button>
                        {isFormDisabled && (
                            <Button variant="secondary" onClick={handleEditCard} className="ms-2">
                                Editar tarjeta
                            </Button>
                        )}
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

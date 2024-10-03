import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProductContext, useTotalPriceContext, useDeleteProduct } from '../../context/ProductsProvider';
import { getFirestore, collection, query, where, getDocs, updateDoc, addDoc } from 'firebase/firestore'; // Añadido addDoc para crear transacciones

export const Buy = ({ setStatus }) => {
    const total = useTotalPriceContext();
    const products = useProductContext();
    const deleteProducts = useDeleteProduct();
    const [alert, setAlert] = useState(false);
    const db = getFirestore();

    const buyProduct = async () => {
        // VALIDAR QUE EL USUARIO HAYA INICIADO SESION PARA REALIZAR LA COMPRA
        if (localStorage.getItem('login') && localStorage.getItem('login') === "true") {
            const savedCard = JSON.parse(localStorage.getItem('debitCard'));
            const cardNumber = savedCard?.cardNumber;
            const cvv = savedCard?.cvv;

            // Consulta a Firestore para buscar la tarjeta
            const cardsRef = collection(db, 'cards');
            const q = query(cardsRef, where('cardNumber', '==', cardNumber)); // Buscar tarjeta por cardNumber
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const cardDoc = querySnapshot.docs[0]; // Obtener el primer documento encontrado
                const cardData = cardDoc.data();
                const cardId = cardData.cardId; // Obtener cardId del documento

                // Verifica el CVV
                if (cardData.cvv !== cvv) {
                    alert('Pago rechazado. Intenta con otra tarjeta.');
                    return;
                }

                // Verifica el saldo
                if (cardData.balance < total) {
                    alert('Saldo insuficiente. No se puede completar la compra.');
                    return;
                }

                // Descuenta el monto de la tarjeta
                const newBalance = cardData.balance - total;

                // Actualiza el saldo en Firestore
                await updateDoc(cardDoc.ref, { balance: newBalance }); // Usa cardDoc.ref para actualizar

                // Genera un transaction_id basado en la fecha y hora actual
                const transactionId = `transaction_${Date.now()}`;

                // Crea un objeto para la transacción
                const transactionData = {
                    amount: total,
                    description: `Compra de ${products.length} artículos en la tienda VANEI`,
                    status: "pagado",
                    transaction_type: "compra",
                    category: "anime",
                    transaction_id: transactionId,
                    transaction_date: new Date(), // Fecha actual
                    card_id: cardId // El card_id obtenido del documento de la tarjeta
                };

                // Guarda la transacción en la colección 'transactions'
                const transactionsRef = collection(db, 'transactions');
                await addDoc(transactionsRef, transactionData);

                // Lógica de compra existente
                setStatus(true);
                deleteProducts();
                const getProductsLocalStorage = JSON.parse(localStorage.getItem('products')) || [];
                getProductsLocalStorage.push(...products);
                localStorage.setItem('products', JSON.stringify(getProductsLocalStorage));
            } else {
                alert('No se encontró la tarjeta. Intenta con otra.');
            }
        } else {
            setAlert(true);
        }
    };

    return (
        <>
            <div className="total-container">
                {alert && <div className='alert alert-warning text-center'>Para realizar una compra primero debes de <Link to="/login">Iniciar sesión</Link></div>}
                <div className="total">
                    <div>
                        <span>Total ${total} MXN</span>
                    </div>
                    <div>
                        <Link className="btn btn-success" onClick={buyProduct}>Comprar</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

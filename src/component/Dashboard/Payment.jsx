import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCommon from '../Common/useCommon';
import { useParams } from 'react-router-dom';
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway)

const Payment = () => {
    const id = useParams()
    console.log(id)
    const itemId = id.id;
    const [cart] = useCommon()
    const selectedItem = cart.find(item=>item._id === itemId)
    console.log(selectedItem)

    return (
        <div className='container mx-auto'>
            <p className=' text-2xl text-center font-serif uppercase'>---- payment ----</p>
            <Elements  stripe={stripePromise}>
                <CheckoutForm cart={cart} price= {selectedItem.price} selectedItem={itemId} seats={selectedItem.seats} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
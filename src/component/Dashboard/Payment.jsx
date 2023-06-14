import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCommon from '../Common/useCommon';
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway)

const Payment = () => {
    const [cart] = useCommon()
    const price = cart.map( item => item.price)

    return (
        <div className='container mx-auto'>
            <p className=' text-2xl text-center font-serif uppercase'>---- payment ----</p>
            <Elements  stripe={stripePromise}>
                <CheckoutForm price= {price} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
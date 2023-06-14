import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../Common/useAxiosSecure';
import { AuthContext } from '../AuthProvider';

const CheckoutForm = ({ price }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [axiosSecure] = useAxiosSecure()
    const {user}=useContext(AuthContext)
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })

    }, [price, axiosSecure])

    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("https://music-school-server-nu.vercel.app/create-payment-intent", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({price}),
    //     })
    //       .then((res) => res.json())
    //       .then(data=> setClientSecret(data.clientSecret));
    //   }, []);


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return


        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError('')
            console.log('[PaymentMethod]', paymentMethod);
        }


        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if(confirmError){
            console.log(confirmError)
        }
        console.log("paymentIntent",paymentIntent)
    };
    return (
        <>
            <form className='w-3/5 mx-auto mt-10' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm bg-teal-400 rounded-3xl mt-3 place-self-center' type="submit" disabled={!stripe }>
                    Pay
                </button>
            </form>
            {
                cardError && <p className=' text-red-500 text-center'>{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;
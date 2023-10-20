import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../Common/useAxiosSecure';
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';

const CheckoutForm = ({ cart, price,seats, selectedItem }) => {
    console.log(selectedItem)
    const stripe = useStripe()
    const elements = useElements()
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [price])




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
            card
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError('')
            // console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
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

        if (confirmError) {
            console.log(confirmError)
        }
        console.log("paymentIntent", paymentIntent)
        setProcessing(false)
        console.log(paymentIntent)
        
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                // date:new date(),
                // quantity: cart.length,
                photo: selectedItem.image,
                name: selectedItem.name,
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.insertedId) {
                        const options = {method:'PUT', headers: {'content-type': 'application/json'}}
                        fetch(`https://music-school-server-nu.vercel.app/seat/${selectedItem}`, options)
                        .then(res=> res.json())
                        .then(data=>console.log(data))

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment successfully done',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    }
                })
        }
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
                <button className='btn btn-sm bg-teal-400 rounded-3xl mt-3 place-self-center' type="submit" disabled={!stripe || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className=' text-red-500 text-center'>{cardError}</p>
            }
            {
                transactionId && <p className='text-center'>Transaction complete with transaction id: {transactionId}</p>
            }
        </>
    );
};

export default CheckoutForm;
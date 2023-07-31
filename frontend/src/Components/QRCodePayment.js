import React, { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import QRCode from 'qrcode.react';
import './QRCodePayment.css'

const QRCodePayment = ({ onPaymentSuccess }) => {
    const [paymentURL, setPaymentURL] = useState('');

    useEffect(() => {
        const createPaymentLink = async () => {
            const data = qs.stringify({
                'line_items[0][price]': 'price_1NZsoWSI7OQaF5wU56PeoKHw',
                'line_items[0][quantity]': 1
            });

            const config = {
                method: 'post',
                url: 'https://api.stripe.com/v1/payment_links',
                headers: { 
                    'Authorization': 'Bearer sk_test_51NZs6FSI7OQaF5wU8kDI9rgTXdXqyb9KmgNabksih5OekMvEaC50uyJ93bIQAj4oyjCil08QB8vvdxpij2k4jedU008awjxVJ1', 
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : data
            };

            const response = await axios(config);
            setPaymentURL(response.data.url);
        };

        createPaymentLink();
    }, []);

    return paymentURL ? (
        <>
        <QRCode value={paymentURL} />
        <button onClick={onPaymentSuccess}>Simulate Payment Success</button>
        </>
    ) : (
        <p>Loading...</p>
    );
};

export default QRCodePayment;

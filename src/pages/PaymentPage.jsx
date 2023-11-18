import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
function PaymentPage(){
    const onToken = (token) => {
        var data = {
           service_id: 'service_fqs0xza',
           template_id: 'template_5q9lilj',
           user_id: 'Qd0ji-jrk1CxhZLfo',
           template_params: {
               'message':'Your payment is successful!',
               'to_name': token.email,
               'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
           }
       }
    }


    return(<div>



        <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51MkrdQSB8pStGpyCIFVaYZpPCGue0YtRnt0HXXhEQxSpE6vCgvYCNsdi96B8SiieyUiwrra6Ww1bAf7AQgJH7qB600lqOQ4ZXT"
        />


    </div>);
}

export default PaymentPage;
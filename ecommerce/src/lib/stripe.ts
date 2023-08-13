import { loadStripe } from '@stripe/stripe-js'  
 

const getStripe = () => {
    return loadStripe("pk_test_51NdqiYBqUzhy869DaYzSV19rsFeuDAw7VaRAQQTqctVeCb2VbFWbKLDSxcXQHXlx5iXuPPq8my7F561RxvSlOFU2006fLGuDF3", {
        apiVersion: '2023-08-11',
        locale: 'auto',
    })
}



export default getStripe
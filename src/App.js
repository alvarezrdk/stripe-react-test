import './App.css';
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51NCBBZCCBjHc108MIi8W5jU8tA0oEU7Nx4WWOhvcHh4YcXWaqsyM7vXx08wbLdkYfxShQFzzvI1geO9Lfcybe6Cd00dJR1qjmA");

function App() {
    const handleClick = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: "price_1NrNXCCCBjHc108MALY4FYvW", // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'payment',
            successUrl: 'http://localhost:3000',
            cancelUrl: 'http://localhost:3000',
        });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
    };
    return (
        <button role="link" onClick={handleClick}>
            Checkout
        </button>
    );
}

export default App;

import React from "react";

const Payment = () => {
    return (
        <>
            <div className="main">
                <div className="payment">
                    <div className="pay1">
                        <div className="container">
                            <form className="payment-form">

                                <div className="payment">


                                    <div className="pay2">
                                        <h3 className="pay-h3">Add a Card</h3>
                                        {/* <label className="card" htmlFor="fname">Accepted Cards</label> */}
                                        {/* <div className="icon-container">
                                            <i className="fa fa-cc-visa" style="color:navy;"></i>
                                            <i className="fa fa-cc-amex" style="color:blue;"></i>
                                            <i className="fa fa-cc-mastercard" style="color:red;"></i>
                                            <i className="fa fa-cc-discover" style="color:orange;"></i>
                                        </div> */}
                                        <label htmlFor="cname">Name on Card</label>
                                        <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                                        <label htmlFor="ccnum">Credit card number</label>
                                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                        <label htmlFor="expmonth">Exp Month</label>
                                        <input type="text" id="expmonth" name="expmonth" placeholder="September" />

                                        <div className="payment">
                                            <div className="pay2">
                                                <label htmlFor="expyear">Exp Year</label>
                                                <input type="text" id="expyear" name="expyear" placeholder="2018" />
                                            </div>
                                            <div className="pay2">
                                                <label htmlFor="cvv">CVV</label>
                                                <input type="text" id="cvv" name="cvv" placeholder="352" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                               
                                <input type="submit" value="Add Card" className="Confirm-btn"/>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Payment;
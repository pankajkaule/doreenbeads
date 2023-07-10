import React from 'react'
import '../styles/footer.css'
const Footer = () => {
    return (
        <>
            <div className='footers'>
                <div className="footer">
                    <div className="heads">Information</div>
                    <ul>
                        <li>About Us</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="footer">
                    <div className="heads">Customer service</div>
                    <ul>
                        <li>Engraving Service</li>
                        <li>FAQ</li>
                        <li>Drop Shipping</li>
                        <li>Contact Us</li>
                        <li>E-Catalog</li>
                    </ul>
                </div>
                <div className="footer">
                    <div className="heads">Payment & Discount</div>
                    <ul>
                        <li>Discount & VIP Policy</li>
                        <li>Payment Methods</li>
                        <li>Points Policy</li>
                    </ul>
                </div>
                <div className="footer">
                    <div className="heads">Shipping</div>
                    <ul>
                        <li>Free Shipping</li>
                        <li>Shipping Fee Calculator</li>
                        <li>Shipping Methods</li>
                    </ul>
                </div>
                <div className="footer">
                    <div className="heads">Shop With Confidence</div>
                    <ul>
                        <li>Buyer Protection</li>
                        <li>Privacy policy</li>
                        <li>Fast Shipping Promised</li>
                        <li>Return Policy</li>
                        <li>Share Your VIP</li>
                    </ul>
                </div>

                <div className="footerend">
                    <div className="footerendtext">Get First-hand Information of New Arrivals,Special Offers and Hot Sale!</div>
                    <div className="form">
                        <form action="" className='forminput'>
                            <span><input type="text" placeholder='Enter your Email here' /></span><span><button className='subscribebtn'>Subscribe</button></span></form>
                    </div>
                    <div className="fontawesome">
                        <ul>
                            <li><a href="https://www.facebook.com/doreenbeads" target="_blank"><i className='icons' class="fa-brands fa-facebook"></i></a></li>
                            <li><a href="https://www.pinterest.com/doreenbeads/" target="_blank"><i className='icons' class="fa-brands fa-pinterest"></i></a></li>
                            <li><a href="http://www.youtube.com/c/Doreenbeadscom" target="_blank"><i className='icons' class="fa-brands fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Copyright">Copyright ©2006-2022 Doreenbeads wholesale beads. All Rights Reserved</div>
        </>
    )
}

export default Footer

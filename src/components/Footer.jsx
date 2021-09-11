import React from 'react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div>
                    <div className="footer__title">
                        Thông tin liên hệ
                    </div>
                    <div className="footer__content">
                        <p>
                            <i className='bx bxs-phone-call' ></i>
                            Điện thoại:  <strong>0988383832</strong>
                        </p>
                        <p>
                            <i className='bx bxl-facebook-circle'></i>
                            Facebook:
                            <a href="https://www.facebook.com/">
                                 <strong> BenJin</strong>
                            </a>
                            
                        </p>
                        <p>
                            <i className='bx bxl-instagram' ></i>
                            Instagram: 
                            <a href="https://www.instagram.com/contho.congo/">
                                <strong> contho.congo</strong>
                            </a>    
                            
                        </p>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer

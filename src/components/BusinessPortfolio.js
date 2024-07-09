import React from 'react';
import AppleSS from "../images/ss/apple.png"
import AdidasSS from "../images/ss/adidas.png"
import FromSoftwareSS from "../images/ss/fromsoftware.png"
import WebolizmaSS from "../images/ss/webolizma.png"
import WocSS from "../images/ss/woc.png"

function BusinessPortfolio() {
    return (
        <section className="bg-midnight py-10">
            <div className="w-full overflow-hidden">
                <h2 className="text-white text-center text-3xl font-bold mb-8">BUSINESS PORTFOLIO</h2>
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="w-full my-0">
                        <div className="shadow-lg rounded-lg overflow-hidden">
                            <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
                                <img src={AppleSS} alt="Screenshot of Apple Website" className="w-full h-96 object-cover object-top"/>
                            </a>
                        </div>
                    </div>

                    <div className="w-full my-0">
                        <div className="shadow-lg rounded-lg overflow-hidden">
                            <a href="https://www.woccoffee.com/" target="_blank" rel="noopener noreferrer">
                                <img src={WocSS} alt="Screenshot of Woc Website" className="w-full h-96 object-cover object-top"/>
                            </a>
                        </div>
                    </div>

                    <div className="w-full my-0">
                        <div className="shadow-lg rounded-lg overflow-hidden">
                            <a href="https://www.webolizma.com/" target="_blank" rel="noopener noreferrer">
                                <img src={WebolizmaSS} alt="Screenshot of Webolizma Website" className="w-full h-96 object-cover object-top"/>
                            </a>
                        </div>
                    </div>

                    <div className="w-full my-0">
                        <div className="shadow-lg rounded-lg overflow-hidden">
                            <a href="https://www.fromsoftware.jp" target="_blank" rel="noopener noreferrer">
                                <img src={FromSoftwareSS} alt="Screenshot of FromSoftware Website" className="w-full h-96 object-cover object-top"/>
                            </a>
                        </div>
                    </div>

                    <div className="w-full my-0">
                        <div className="shadow-lg rounded-lg overflow-hidden">
                            <a href="https://www.adidas.com" target="_blank" rel="noopener noreferrer">
                                <img src={AdidasSS} alt="Screenshot of Adidas Website" className="w-full h-96 object-cover object-top"/>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default BusinessPortfolio;
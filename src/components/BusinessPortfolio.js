import React from 'react';
import AppleSS from "../images/ss/apple.png"
import AdidasSS from "../images/ss/adidas.png"
import FromSoftwareSS from "../images/ss/fromsoftware.png"
import WebolizmaSS from "../images/ss/webolizma.png"
import WocSS from "../images/ss/woc.png"

function BusinessPortfolio() {
    // const businesses = [
    //     { name: "Apple", logo: "/path/to/apple-logo.png", url: { AppleSS } },
    //     { name: "WOC Coffee", logo: "/path/to/woc-coffee-logo.png", url: "https://woccoffee.com" }
    //     // Add more businesses as needed
    // ];

    return (
        <section className="bg-midnight py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-white text-center text-3xl font-bold mb-8">BUSINESS PORTFOLIO</h2>
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="w-full my-0">
                        <div className="shadow-lg rounded-lg overflow-hidden">
                            <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
                                <img src={AppleSS} alt="Screenshot of Apple Website" />
                            </a>
                        </div>
                    </div>

                    <div className="w-full my-0">
                        <div className="shadow-lg rounded-lg overflow-hidden">
                            <a href="https://www.woccoffee.com/" target="_blank" rel="noopener noreferrer">
                                <img src={WocSS} alt="Screenshot of Woc Website" />
                            </a>
                        </div>
                    </div>

                    <div className="w-full my-0">
                        <div className="shadow-lg rounded-lg overflow-hidden">
                            <a href="https://www.webolizma.com/" target="_blank" rel="noopener noreferrer">
                                <img src={WebolizmaSS} alt="Screenshot of Webolizma Website" />
                            </a>
                        </div>
                    </div>

                    <div className="w-full my-0">
                        <div className="shadow-lg rounded-lg overflow-hidden">
                            <a href="https://www.fromsoftware.jp" target="_blank" rel="noopener noreferrer">
                                <img src={FromSoftwareSS} alt="Screenshot of FromSoftware Website" />
                            </a>
                        </div>
                    </div>


                    <div className="w-full my-0">
                        <div className="shadow-lg rounded-lg overflow-hidden">
                            <a href="https://www.adidas.com" target="_blank" rel="noopener noreferrer">
                                <img src={AdidasSS} alt="Screenshot of Adidas Website" />
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}


//  <div className="flex flex-wrap justify-center gap-6">
//       {businesses.map((business, index) => (
//         <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
//           <div className="bg-white rounded shadow-lg overflow-hidden">
//             <div className="p-4">
//               <h3 className="font-bold text-lg">{business.name}</h3>
//               <a href={business.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
//                 Visit Website
//               </a>
//             </div>
//             {/* <iframe
//               src="https://www.apple.com/tr/"
//               title={`Website of ${business.name}`}
//               frameBorder="0"
//               className="w-full h-64"
//               allowTransparency="true"
//               allowFullScreen
//             ></iframe> */}
//             <a href="https://www.apple.com/tr/" target="_blank" rel="noopener noreferrer">
//                 <img src={AppleSS} alt="Screenshot of Apple Website" />
//             </a>
//           </div>
//         </div>
//       ))}
//     </div> 
export default BusinessPortfolio;
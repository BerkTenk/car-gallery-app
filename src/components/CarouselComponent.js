import React from 'react'
import "./heroImg.css"
import Carousel from 'react-bootstrap/Carousel';
import c1 from "../assets/ranger.jpeg"
import c2 from "../assets/2005_Mercedes-Benz_CLS_320_CDi_Automatic_3.0_Rear.jpg"
import c3 from "../assets/audiq7.jpg"
import c4 from "../assets/2015-audi-a7-30-tfsi-quattro-progressiv_1.png"
import c5 from "../assets/chevrolet.jpeg"
console.log("test");
function CarouselComponent() {

    return (

        <div className='d-flex justify-content-center align-items-center mt-4'>
            <Carousel  interval={3000} fade data-bs-theme="dark" style={{width:"100%",maxWidth:"600px",height:"auto"}}>
                <Carousel.Item >
                    <img className='d-block w-100'
                        style={{ objectFit: "cover",
                            objectPosition: "center",
                            height: "50vh"}}
                        src={c1}
                        alt="Car"
                        
                    />
                    <Carousel.Caption >
                        <h5 className='bg-primary'>2016 LAND ROVER RANGE ROVER AUTOBIOGRAPHI 3.0 DİZEL HYIBRID</h5>
                        <p className='bg-info'>55000 €</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img className='d-block w-100'  
                        style={{ objectFit: "cover",
                            objectPosition: "center",
                            height: "50vh"}}
                        src={c2}
                        alt="Car"
                        
                    />
                    <Carousel.Caption>
                    <h5 className='bg-primary'>2005 MERCEDES CLS 320 CDI</h5>
                        <p className='bg-info'>9000 €</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img className='d-block w-100'
                        style={{ objectFit: "cover",
                            objectPosition: "center",
                            height: "50vh"}}
                        src={c3}
                        alt="Car"
                    />
                    <Carousel.Caption>
                    <h5 className='bg-primary'>2014 AUDI Q7 3.0 T QUATTRO 7 SEATER</h5>
                        <p className='bg-info'>19000 €</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img className='d-block w-100'
                       style={{ objectFit: "cover",
                        objectPosition: "center",
                        height: "50vh"}}
                    src={c4}
                    alt="Car"
                    />
                    <Carousel.Caption>
                    <h5 className='bg-primary'>2015 AUDI A7 3.0 TFSI QUATTRO S-LINE</h5>
                        <p className='bg-info'>31000 €</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img className='d-block w-100'
                        style={{ objectFit: "cover",
                            objectPosition: "center",
                            height: "50vh"}}
                        src={c5}
                        alt="Car"
                    />
                    <Carousel.Caption >
                    <h5 className='bg-primary'>2014 CHEVROLET CRUIZE 1.4</h5>
                        <p className='bg-info'>10000 €</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>

    );
}

export default CarouselComponent
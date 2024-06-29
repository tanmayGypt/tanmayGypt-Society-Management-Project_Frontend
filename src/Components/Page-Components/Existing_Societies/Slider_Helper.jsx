import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Slider_Helper = ({ name, societies }) => {
    const [isHover, SetisHover] = useState(false)

    const settings = {
        infinite: true,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        speed: 4000,
        autoplay: !isHover,
        slidesToShow: 6,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },

        ],
    }


    return (
        <div className="max-w-screen-xl mx-auto mt-10">
            <h2 className="text-3xl font-semibold mb-6 ml-4">
                {name}
            </h2>
            <Slider {...settings} onMouseEnter={() => SetisHover(true)} onMouseLeave={() => SetisHover(false)}>
                {
                    societies.map((soc, index) => (
                        <div key={index} className="p-6">
                            <img
                                src={soc.imgSrc}
                                alt={soc.name}
                                className="w-full h-48 rounded-md shadow-md"
                                style={{ boxShadow: '10px -10px 15px -3px #525252' }}
                            />

                            <h3 className="mt-4 text-center text-xl bg-gray-300  px-4 py-2 rounded border-2 border-gray-500 border-solid ">
                                {soc.name}
                            </h3>


                        </div>
                    )
                    )
                }
            </Slider>
        </div>
    )
}

const NextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
        <div className={` ${className} custom-arrow custom-next-arrow`}
            style={{ ...style, display: 'block', background: '#030712', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
        <div className={` ${className} custom-arrow custom-prev-arrow`}
            style={{ ...style, display: 'block', background: '#030712', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

export default Slider_Helper;
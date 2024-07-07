import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import PropTypes from 'prop-types';

const Testimonials = () => {

    const [isHover, SetisHover] = useState(false)
    const [selectedYear, setSelectedYear] = useState('All')

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value)
    }

    const testinomials = [
        {
            name: 'Shivani Sharma',
            degree: 'Bachelors Of Technology , CSE ',
            batch: '2020-2024',
            year: '2024',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quas labore quae accusamus aliquid eos rem voluptate, voluptatem culpa sequi dolor corrupti a aut deleniti exercitationem nesciunt obcaecati. Omnis, ipsam!'
        },
        {
            name: 'Harsh Goel',
            degree: 'Bachelors Of Technology ,IT ',
            batch: ' 2021-2025',
            year: '2025',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quas labore quae accusamus aliquid eos rem voluptate, voluptatem culpa sequi dolor corrupti a aut deleniti exercitationem nesciunt obcaecati. Omnis, ipsam!'
        },
        {
            name: 'Radhika Sharma',
            degree: 'Bachelors Of Technology , EEE',
            batch: ' 2019-2023',
            year: '2023',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quas labore quae accusamus aliquid eos rem voluptate, voluptatem culpa sequi dolor corrupti a aut deleniti exercitationem nesciunt obcaecati. Omnis, ipsam!'
        },
        {
            name: 'Mohan Sharma',
            degree: 'Bachelors Of Technology , IT',
            batch: ' 2019-2023',
            year: '2023',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ullam quasi ipsum fuga. Excepturi, autem reiciendis placeat harum quasi repudiandae itaque molestiae aspernatur cupiditate dolore ea voluptas illum. Officia, quia.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quas labore quae accusamus aliquid eos rem voluptate, voluptatem culpa sequi dolor corrupti a aut deleniti exercitationem nesciunt obcaecati. Omnis, ipsam!'
        },
        {
            name: 'Suhani Kapur',
            degree: 'Bachelors Of Technology , ECE',
            batch: '2020-2024',
            year: '2024',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quas labore quae accusamus aliquid eos rem voluptate, voluptatem culpa sequi dolor corrupti a aut deleniti exercitationem nesciunt obcaecati. Omnis, ipsam!'
        }
    ]

    const filteredTestimonials = testinomials.filter(testinomial =>
        selectedYear === 'All' || testinomial.year === selectedYear)

    const settings = {
        infinite: true,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        speed: 4000,
        autoplay: !isHover,
        slidesToShow: Math.min(3, filteredTestimonials.length),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(3, filteredTestimonials.length),
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: Math.min(2, filteredTestimonials.length),
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
        <>
            <div className="relative top-20 mb-40">
                <div className="w-full  flex bg-violet-50  flex-wrap border border-1 border-black-200 shadow-md">
                    <a
                        href=""
                        className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
                    >
                        About
                    </a>
                    <a
                        href=""
                        className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
                    >
                        Events
                    </a>
                    <a
                        href=""
                        className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
                    >
                        Members
                    </a>
                    <a
                        href=""
                        className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700 text-xl font-medium text-center"
                    >
                        News
                    </a>
                    <a
                        href=""
                        className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
                    >
                        News
                    </a>
                    <a
                        href=""
                        className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
                    >
                        Gallery
                    </a>
                    <a
                        href=""
                        className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
                    >
                        Contacts
                    </a>
                    <a
                        href=""
                        className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
                    >
                        Testinomials
                    </a>
                    <a
                        href=""
                        className="border border-black border-r-2 border-t-0 border-l-0 border-b-0 px-6 py-2 text-fuchsia-700	 text-xl font-medium text-center"
                    >
                        Coordinators
                    </a>
                    <a
                        href=""
                        className=" px-3 py-2 text-fuchsia-700 text-xl font-medium text-center"
                    >
                        Openings
                    </a>
                </div>

                <div className="max-w-screen-xl mx-auto mt-10">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <h2 className="text-3xl font-semibold mb-6 ml-4">
                            Testinomials
                        </h2>
                        <div className="mb-4">
                            <label className="mr-2 ml-4 text-xl">
                                Filter By Year :
                            </label>
                            <select value={selectedYear} onChange={handleYearChange}
                                className="border border-gray-300 rounded px-2 py-1"
                            >
                                <option value="All">All</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                            </select>
                        </div>
                    </div>
                    <Slider {...settings} onMouseEnter={() => SetisHover(true)} onMouseLeave={() => SetisHover(false)}>
                        {
                            filteredTestimonials.map((testinomial, index) => (
                                <Card key={index} testinomial={testinomial} />
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </>
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

export default Testimonials;
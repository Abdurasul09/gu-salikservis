import React from 'react';
import Slider from "react-slick";
import titik from '../../image/Titik-titik.svg'

const SimpleSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div >
            <div className='relative p-8'>
                <div className='mr-32'>
                    <Slider {...settings} >
                        <div>
                            <img
                                className='w-full'
                                src='https://previews.123rf.com/images/pressmaster/pressmaster1704/pressmaster170400062/75330432-banquero-elegante.jpg'
                                alt='mage'
                            />
                            <h3 className='text-xl text-textColor'>Дастан Бообеков</h3>
                            <span className='text-gray-400 text-sm py-4'>Менежер</span>
                        </div>
                        <div>
                            <img
                                className='w-full'
                                src="https://www.caproasia.com/wp-content/uploads/2015/08/Priority-Banker-Girl-Office-3.jpg"
                                alt="image"
                            />
                            <h3 className='text-xl text-textColor'>Салиева Нургул</h3>
                            <span className='text-gray-400 text-sm py-4'>Директор</span>
                        </div>
                    </Slider>
                </div>
                <img src={titik} alt="titik" className='absolute top-0 right-12 img' width={200}/>
            </div>

        </div>
    )
};

export default SimpleSlider;


const data = [
    {
        id: 1,
        image: 'https://previews.123rf.com/images/pressmaster/pressmaster1704/pressmaster170400062/75330432-banquero-elegante.jpg',
        title: 'team image'
    },
    {
        id: 2,
        image: 'https://thumbs.dreamstime.com/b/happy-young-successful-banker-formalwear-talking-to-one-clients-phone-office-banker-phone-paper-142310583.jpg',
        title: 'team image'
    },
    {
        id: 3,
        image: 'https://www.caproasia.com/wp-content/uploads/2015/08/Priority-Banker-Girl-Office-3.jpg',
        title: 'team image'
    }
]
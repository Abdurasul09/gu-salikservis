import React from 'react';
import SimpleSlider from "./Slider";

const Team = () => {
    return (
        <div className='container mt-32 sm:max-w-full xl:max-w-full'>
            <div className='xl:flex items-start justify-between sm:block'>
                <div className='xl:w-1/2 leading-8 sm:w-full'>
                    <span className='text-green text-sm'>Команда Салык Сервис</span>
                    <h1 className='text-3xl text-textColor'>Команда креативщиков Who Excited поможет вам с вашей идеей</h1>
                    <p className='text-textColor text-sm mt-4'>Наша команда создателей цифровых продуктов поднимет вашу идею на новый уровень и поможет вам с вашим продуктом.</p>
                </div>
                <div>
                    <SimpleSlider/>
                </div>
            </div>
        </div>
    );
};

export default Team;
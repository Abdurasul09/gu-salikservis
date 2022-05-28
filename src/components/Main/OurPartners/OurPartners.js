import React from 'react';
import {Data} from "./data";

const OurPartners = () => {
    return (
        <div className='mt-32'>
            <div className='container xl:max-w-full sm:max-w-full'>
                <h1 className='text-2xl mb-4'>Наши партнеры</h1>
                <div className='flex items-center justify-between sm:block'>
                        {Data.map(el => (
                            <div key={el.id} className='w-1/4 flex items-center sm:w-full sm:mb-4'>
                                {el.image2 ? (
                                    <>
                                        <img
                                            src={el.image}
                                            alt={el.title}
                                        />
                                        <span className='h-10 bg-gray-300 w-1 m-4'/>
                                        <img
                                            src={el.image2}
                                            alt={el.title}
                                        />
                                    </>

                                ) : (
                                    <img
                                        src={el.image}
                                        alt={el.title}
                                    />
                                )}
                                <p className='text-xs p-3'>{el.title}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default OurPartners;
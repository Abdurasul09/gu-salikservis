import React from 'react';
import {ProjectsData} from "./ProjectsData";
import {ArrowLeft} from "../../../svg/svg";

const Projects = () => {
    return (
        <div className='container mb-4 sm:mt-12 sm:max-w-full'>
            <h1 className='text-2xl mb-4'>Наши проекты</h1>
            <div className='xl:flex items-start sm:block'>
                <div className='xl:grid grid-rows-2 grid-flow-col gap-8 sm:block'>
                    {ProjectsData.map(el => (
                        <div className='sm:mb-4'>
                            <div>
                                {el.category ? (
                                    <div className='bg-green p-6 rounded'>
                                        <img
                                            src={el.image}
                                            alt={el.title}
                                        />
                                    </div>
                                ) : (
                                    <img
                                        className='w-full'
                                        src={el.image}
                                        alt={el.title}
                                    />
                                )}
                                <h2 className='text-sm text-green py-2'>{el.name}</h2>
                                <p>{el.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    {ProjectsData.map(el => (
                        <div>
                            {el.image5?.map(item => (
                                <div key={item.id}>
                                    <img src={item.image} alt={el.title} className='w-full'/>
                                    <h2 className='text-sm text-green py-2'>{item.name}</h2>
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-8 flex items-center justify-center'>
                <button className='flex items-center border p-2 border-green text-green'>
                    Показать все
                    <span className='text-green'>
                        <ArrowLeft/>
                    </span>
                </button>
            </div>

        </div>
    );
};

export default Projects;
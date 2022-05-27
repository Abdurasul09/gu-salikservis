import React from 'react';
import {DataNews, Banner} from "./DataNews";
import {Arrow} from "../../../svg/svg";
import {NavLink} from "react-router-dom";

const News = () => {
    return (
        <div className='container mt-32'>
            <h1 className='text-2xl mb-4'>Новости</h1>
            <div className='flex items-start justify-between'>
                {Banner.map(item => (
                    <div>
                        <img
                            src={item.bannerImg}
                            alt='image'
                            width={600}
                            height={300}
                        />
                        <div className='pr-12'>
                            <span className='text-gray-400 text-sm py-4'>{item.bannerData}</span>
                            <h3 className='text-textColor text-xl py-4'>{item.bannerTitle}</h3>
                            <p className='text-textColor text-sm'>{item.bannerDescription}</p>
                            <NavLink to='/partfolio' className='flex items-center justify-end text-green'>
                                Портфолио
                                <span className='text-green'>
                                    <Arrow/>
                                </span>
                            </NavLink>
                        </div>
                    </div>
                ))}
                <div  className='flex-col items-center justify-between'>
                    {DataNews.map(item => (
                        <div key={item.id} className='flex items-start mb-2'>
                            <img
                                src={item.image}
                                alt={item.title}
                            />
                            <div className='ml-2'>
                                <span className='text-gray-400 text-xs'>{item.data}</span>
                                <p className='text-textColor text-sm'>{item.description.substr(0,100)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
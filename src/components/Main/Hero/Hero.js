import React from 'react';
import {Arrow, Message} from "../../../svg/svg";
import pointImg from '../../image/imgPoint.svg'
import groupImg from '../../image/Group.svg'
import vector from '../../image/vector .svg'
import {NavLink} from "react-router-dom";

const Hero = () => {
    return (
        <div>
            <div className='container xl:m-0 sm:mt-96 '>
                <div className='xl:flex xl:items-center justify-between mt-20 sm:block'>
                    <div className='xl:w-1/2 leading-8 sm:w-full'>
                        <div>
                            <span className='text-green'>Привет,</span>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-5xl'>
                                Мы помогаем <span className='text-green'>государству</span> и <span
                                className='text-yellow'>бизнесу</span> воплощать свои идеи в жизнь
                            </h1>
                        </div>
                        <div className='mt-4'>
                            <p>
                                Талантливая команда, которая поможет вам в создании полезного и простого в
                                использовании продукта
                            </p>
                        </div>
                        <div className='flex items-center mt-10 sm:block'>
                            <button className='flex items-center justify-center bg-green text-white p-2 rounded xl:w-auto sm:w-full'>
                                Давайте поговорим
                                <span className='ml-2'>
                                    <Message/>
                                </span>
                            </button>
                            <NavLink to='/partfolio' className='flex items-center ml-6 sm:ml-0 xl:text-xl sm:text-2xl  sm:mt-2'>
                                Портфолио
                                <span className='text-yellow'>
                                    <Arrow/>
                                </span>
                            </NavLink>
                        </div>
                        <img
                            src={vector}
                            alt="vector"
                            className='absolute top-48 right-0 left-4 xl:block sm:hidden'
                            width={85}
                            height={80}
                        />
                    </div>
                    <div>
                        <div>
                            <img
                                className='xl:block sm:hidden'
                                src={pointImg}
                                alt="image"
                                width={300}
                                height={300}
                            />
                            <div>
                                <img
                                    className='absolute xl:top-36 xl:right-36 sm:top-16 sm:right-4'
                                    src={groupImg} alt="image"
                                    width={350}
                                    height={350}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
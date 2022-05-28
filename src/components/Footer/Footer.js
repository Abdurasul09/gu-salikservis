import React from 'react';
import img from '../../components/image/logo.svg'
import {Faisboock, In, Instagram, Telegram, Tweeter} from "../../svg/svg";

const Footer = () => {
    return (
        <div className='dark:bg-bgFooter mt-32'>
            <div className='container xl:max-w-full'>
                <footer className="bg-bgFooter py-6 xl:flex items-start justify-between sm:block">
                    <div className='w-1/4'>
                        <div className="flex items-center">
                            <a href='#'>
                                <img src={img} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                            </a>
                            <div className='flex-col'>
                                <p className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Салык</p>
                                <p className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Сервис</p>
                            </div>
                        </div>
                        <p className='mt-2 text-sm'>
                            Государственное учреждение “Салык Сервис” при ГНС МФ КР
                        </p>
                    </div>
                    <div className="grid xl:grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-1">
                        <div className='pl-20 xl:block sm:hidden'>
                            <h2 className="mb-6 text-sm font-semibold text-textColor uppercase ">Mеню</h2>
                            <ul className="text-textColor">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">О нас</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Новости</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Карьера</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Проекты</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Контакты</a>
                                </li>
                            </ul>
                        </div>
                        <div className='xl:m-0 sm:mt-8'>
                            <h2 className="mb-6 text-sm font-semibold text-textColor uppercase">Подписывайтесь на нас</h2>
                            <ul className="text-textColor">
                                <li className="mb-4 flex items-center">
                                    <span>
                                        <In/>
                                    </span>
                                    <a href="#" className="hover:underline m-1">linkedin.com</a>
                                </li>
                                <li className="mb-4 flex items-center">
                                    <span>
                                        <Faisboock/>
                                    </span>
                                    <a href="#" className="hover:underline">fb.com</a>
                                </li>
                                <li className="mb-4 flex items-center">
                                    <span>
                                        <Tweeter/>
                                    </span>
                                    <a href="#" className="hover:underline">twitter.com</a>
                                </li>
                                <li className="mb-4 flex items-center">
                                    <span>
                                        <Instagram/>
                                    </span>
                                    <a href="#" className="hover:underline">instagram.com</a>
                                </li>
                                <li className="mb-4 flex items-center">
                                    <span>
                                        <Telegram/>
                                    </span>
                                    <a href="#" className="hover:underline">t.me</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-textColor uppercase">Свяжись с нами</h2>
                            <ul className="text-textColor">
                                <li className="mb-4">
                                    <p className='text-xs'>
                                        Нужны ответы? Нужна помощь ? Просто напишите нам
                                    </p>
                                </li>
                                <li>
                                    <div className='flex items-center justify-between border bg-white p-2 rounded'>
                                        <input type="email" placeholder='Введите почту' className='input text-xs'/>
                                        <Telegram/>
                                    </div>
                                </li>
                                <li className='mt-2'>
                                    <h1>Сайт Разработан:</h1>
                                    <div className="flex items-center mt-1">
                                        <a href='#'>
                                            <img src={img} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                                        </a>
                                        <div className='flex-col'>
                                            <p className="self-center text-sm font-semibold whitespace-nowrap dark:text-black">Салык</p>
                                            <p className="self-center text-sm font-semibold whitespace-nowrap dark:text-black">Сервис</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
            <div className='xl:hidden text-center text-gray-600 bg-gray-300 p-2 sm:block'>
                <h1>2022 ГУ “Салык Сервис”</h1>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import img from '../../components/image/logo.svg'
import {Search} from "../../svg/svg";

const Header = ({active, setActive}) => {
    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:p-2  dark:bg-white">
                <div className="container sm:p-0 flex items-center justify-between items-center xl:max-w-full">
                    <div className="flex items-center">
                        <a href='#'>
                            <img src={img} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                        </a>
                        <div className='flex-col'>
                            <p className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Салык</p>
                            <p className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Сервис</p>
                        </div>
                    </div>

                    <button
                        data-collapse-toggle="mobile-menu"
                        onClick={() => setActive(!active)}
                        type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu" aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"/>
                        </svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>

                    <div className="hidden w-full xl:block md:w-auto" id="mobile-menu">
                        <ul className="flex items-center justify-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a href="#"
                                   className="block py-2 pr-4 pl-3 text-black border-b border-white hover:border-blue-700 md:text-black md:p-0"
                                   aria-current="page">Главная</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pr-4 pl-3 text-black border-b border-white hover:border-blue-700 md:text-black md:p-0">О
                                    нас</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pr-4 pl-3 text-black border-b border-white hover:border-blue-700 md:text-black md:p-0">Новости</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pr-4 pl-3 text-black border-b border-white hover:border-blue-700 md:text-black md:p-0">Карьера</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pr-4 pl-3 text-black border-b border-white hover:border-blue-700 md:text-black md:p-0">Проекты</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pr-4 pl-3 text-black border-b border-white hover:border-blue-700 md:text-black md:p-0">Контакты</a>
                            </li>
                        </ul>
                    </div>
                    <div className='xl:flex items-center justify-between xl:block sm:hidden'>
                        <span>
                            EN
                        </span>
                        <span className='heightLine'/>
                        <div>
                            <Search/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import {Delete, Search} from "../../svg/svg";

const Menu = ({active,setActive}) => {
    return (
        <div className={active ? "menu active" : "menu"}>
            <div className="menu__blur"/>
            <div className="menu__content">
                <div
                    className='absolute top-4 right-4'
                    onClick={() => setActive(false)}
                >
                    <Delete/>
                </div>
                <div className="hidden sm:block w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col sm:items-center sm:justify-between mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
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
                <div className='flex items-center justify-between sm:block sm:flex'>
                        <span>
                            EN
                        </span>
                    <span className='heightLine'/>
                    <div>
                        <Search/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
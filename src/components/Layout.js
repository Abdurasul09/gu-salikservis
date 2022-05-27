import React, {useState} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Menu from "./Header/Menu";

const Layout = ({children}) => {
    const [active, setActive] = useState(false)

    return (
        <div>
            <Header active={active} setActive={setActive}/>
               {children}
            <Footer/>
            <Menu active={active} setActive={setActive}/>
        </div>
    );
};

export default Layout;
import React from 'react';
import Header from './Header';

const Main = () => {

    const links = [
        {title : "Categories", path : "/"},
        {title : "Projects", path : "/projects"},
        {title : "About", path : "/about"}
    ];

    return (
        <div>
            <Header links={links}/>
        </div>
    );
    
}

export default Main;
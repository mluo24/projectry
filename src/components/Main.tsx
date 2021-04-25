import React, { ReactNode } from 'react';
import Header from './Header';

type Props = { readonly children: ReactNode }

const Main = (props: Props) => {

    const links = [
        {title : "Categories", path : "/"},
        {title : "Projects", path : "/projects"},
        {title : "About", path : "/about"}
    ];

    return (
        <div>
            <Header title="Projectry" links={links}/>
            {props.children}
        </div>
    );
    
}

export default Main;
import React from 'react';
import { AsideNavServices } from '../../config/AsideNavigationMainConfig';
import { Link } from 'react-router-dom';

const AsideBodyAnimalServ = () => {
    return (
        <nav>
            <ul>
                {AsideNavServices.map((item) => <li className='flex justify-between py-[10px] px-[15px] rounded-[10px] hover:bg-accent hover:cursor-pointer nav' key={item.id}>
                    <div className='flex gap-[8px] link'>{item.icon} <Link to={item.href}>{item.title}</Link></div> {item.notification}
                </li>)}
            </ul>
        </nav>
    );
};

export default AsideBodyAnimalServ;
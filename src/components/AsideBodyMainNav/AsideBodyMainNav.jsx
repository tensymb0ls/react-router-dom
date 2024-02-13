import React from 'react';
import { AsideNavMain } from '../../config/AsideNavigationMainConfig';
import { Link } from 'react-router-dom';

const AsideBodyMainNav = () => {
    return (
        <nav>
            <ul>
                {AsideNavMain.map((item) => <li className='flex justify-between py-[10px] px-[15px] rounded-[10px] hover:bg-accent hover:cursor-pointer nav' key={item.id}>
                    <div className='flex gap-[8px] link'>{item.icon} <Link to={item.href}>{item.title}</Link></div>
                    {item.notification ? <div className='rounded-full bg-accent pb-[3px] pt-[6px] px-[7px] leading-[14px] text-subContentSize notification'>{item.notification}</div> :
                        <></>}
                </li>)}
            </ul>
        </nav>
    );
};

export default AsideBodyMainNav;
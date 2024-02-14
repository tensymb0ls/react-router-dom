import React from 'react';
import { AsideNavMain } from '../../config/AsideNavigationMainConfig';
import { Link } from 'react-router-dom';

const AsideBodyMainNav = () => {
    return (
        <nav>
            <ul>
                {AsideNavMain.map((item) => <Link to={item.href} key={item.id}>
                    <li className='flex justify-between py-[10px] px-[15px] rounded-[10px] hover:bg-accent hover:cursor-pointer nav'>
                        <div className='flex gap-[8px] link'>{item.icon} {item.title}</div>
                        {item.notification ? <div className='rounded-full bg-accent pb-[3px] pt-[5px] px-[7px] leading-[14px] text-subContentSize notification'>{item.notification}</div> :
                            <></>}
                    </li></Link>)}
            </ul>
        </nav>
    );
};

export default AsideBodyMainNav;
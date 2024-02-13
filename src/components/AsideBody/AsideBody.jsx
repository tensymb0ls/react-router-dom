import React from 'react';
import AsideBodyMainNav from '../AsideBodyMainNav/AsideBodyMainNav';
import AsideBodyAnimalServ from '../AsideBodyAnimalServ/AsideBodyAnimalServ';

const AsideBody = () => {
    return (
        <section className='flex flex-col'>
            <p className='text-colorTextLightGray text-subContentSize py-[10px] pl-[5px]'>Main</p>
            <AsideBodyMainNav />
            <p className='text-colorTextLightGray text-subContentSize py-[10px] pl-[5px]'>Animal Services</p>
            <AsideBodyAnimalServ />
        </section>
    );
};

export default AsideBody;
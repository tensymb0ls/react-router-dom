import React from 'react';
import AsideHeader from '../AsideHeader/AsideHeader';
import AsideBody from '../AsideBody/AsideBody';
import AsideSettingsModal from '../AsideSettingsModal/AsideSettingsModal';


const Aside = (props) => {
    const { user } = props;
    return (
        <div className='flex flex-col gap-[10px] p-[10px] m-[20px] rounded-[15px] shadow-componentshadow text-colorTextBlack text-contentSize leading-[18px] w-[240px]'>
            <AsideHeader userInfo={user} />
            <div className='border-b-[1px] border-colorLightGray'></div>
            <AsideBody />
            <AsideSettingsModal />
        </div>
    );
};

export default Aside;
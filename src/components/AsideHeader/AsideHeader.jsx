import React from 'react';
import AsideSettings from '../icons/AsideSettings';


const AsideHeader = ({ userInfo }) => {
    return (
        <div className='flex flex-col'>
            <div className='flex relative text-colorTextLightGray h-[34px]'>
                <AsideSettings />
                <p className='text-subContentSize my-[10px] ml-[5px]'> My account</p>
            </div>
            <div className='flex gap-[10px] py-[10px]'>
                <div className='h-[40px] w-[40px] rounded-full relative' style={{
                    backgroundImage: `url(${userInfo.photo})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className='h-[15px] w-[15px] rounded-full bg-accent absolute bottom-0 right-0'></div>
                </div>
                <div>
                    <p>{userInfo.firstName} {userInfo.lastName}</p>
                    <p className='text-colorTextLightGray text-subContentSize mt-[5px]'>{userInfo.role}</p>
                </div>
            </div>
        </div>
    );
};

export default AsideHeader;
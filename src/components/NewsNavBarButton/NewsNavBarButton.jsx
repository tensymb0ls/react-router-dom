import React from 'react';

const NewsNavBarButton = (props) => {
    const { id, title, icon, state, setState } = props
    return (
        <button onClick={() => setState(id)} className={`${state === id ? 'bg-accent text-[#fff]' : 'bg-[#fff]'} grow basis-[20%] flex items-center justify-center gap-[4px] rounded-[5px] p-[8px] hover:bg-accent hover:text-white nav`}>
            {icon} <span className='max-w-[90%] truncate'>{title}</span>
        </button>
    );
};

export default NewsNavBarButton;
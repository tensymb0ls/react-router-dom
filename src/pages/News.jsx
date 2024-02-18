import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import NewsNavBar from '../components/NewsNavBar/NewsNavBar';
import NewsDisplay from '../components/NewsDisplay/NewsDisplay';

const News = () => {

    const navigate = useNavigate();
    useEffect(() => {
        navigate('/news');
    }, [])

    const [state, setState] = useState(0)
    return (
        <div className='flex flex-col gap-[15px] m-[10px] w-[max(50vw,380px)] text-colorTextBlack text-contentSize leading-[18px]'>
            <NewsNavBar state={state} setState={setState} />
            <NewsDisplay state={state} />
        </div>
    );
};

export default News;
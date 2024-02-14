import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const News = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/news');
    }, [])
    return (
        <div>
            News
        </div>
    );
};

export default News;
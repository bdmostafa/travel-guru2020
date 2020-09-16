import React from 'react';
import { useParams } from 'react-router-dom';

const AreaDetail = () => {
    const {areaName} = useParams();
    return (
        <div>
            areadetail
        </div>
    );
};

export default AreaDetail;
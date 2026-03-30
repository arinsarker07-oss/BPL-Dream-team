import React from 'react';
import Card from '../ui/Card';
const Available = ({ data }) => {
    console.log(data);

    return (
       <Card data={data}></Card>
    );
};

export default Available;
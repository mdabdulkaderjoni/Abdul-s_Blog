import React from 'react';

const Variables = (props) => {
    const {span} =props.data;
    console.log(props.data)
    console.log(span)
    return (
        <div>
            Here is: {span}
        </div>
    );
};

export default Variables;
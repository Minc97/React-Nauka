import React from 'react';

export const BoilingVerdict: any = (props: any) => {
    return <h1>{props.value? 'Woda będzie się gotować' : 'Woda nie będzie się gotować'}</h1>
};


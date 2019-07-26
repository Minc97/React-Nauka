import React from 'react';

export const BoilingVerdict = (props: any) => {
    if (props >= 100) {
        return <p> Woda będzie się gotować </p>
    }
    else {
        return <p> Woda nie będzie się gotować </p>
    }
};


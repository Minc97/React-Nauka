/*
import React from "react";
import {number} from "prop-types";

interface MyState {
}

interface MyProps {
    numbers: number[]
}

class App extends React.Component<MyState, MyProps> {
    constructor(props: any){
        super(props);
        this.state = {
            numbers: [1, 2, 3, 4, 5]
        }
    }

    render(): any {
        return (
            <div>
                <h1> Zabawa w numerki </h1>
                <NumberList numbers={this.state.numbers}/>
            </div>
        );
    }
}

const NumberList = (props: any ) => {
    const numbers = props.numbers;
    const listNumbers = numbers.map((number: number) =>
        <li>{number}</li>
    );
    return (
        <h1 key={number.toString()}>
            {listNumbers}
        </h1>
    );
};

 */

export {};
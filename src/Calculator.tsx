import React from 'react';
import TemperatureInput from "./TemperatureInput";

interface MyState {
    temperature: string
}

interface MyProps {

}

class Calculator extends React.Component<MyProps, MyState> {
    constructor(props: any){
        super(props);
        this.state = {
            temperature: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: any) {
        this.setState({
            temperature: e.target.value
        })
    }

    toCelcius(fahrenheit: any){
        return (fahrenheit - 32) * 5/9
    }

    toFanhrenheit(celcius: any){
        return (celcius * 9/5) + 32
    }

    tryConvert(temperature: any, convert: any) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)){
            return ''
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    render(): any  {
        const temperature: string = this.state.temperature;
        return (
            <div>
                <TemperatureInput scale="c" temperature={' '} />
                <TemperatureInput scale="f" temperature={' '}/>
            </div>
        );
    }
}

export default Calculator;
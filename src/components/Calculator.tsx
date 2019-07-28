import React from 'react';
import {BoilingVerdict} from "./BoilingVerdict";
import TemperatureCelciusInput from "./TemperatureCelciusInput";
import TemperatureFanhrenheitInput from "./TemperatureFanhrenheitInput";

interface MyState {
    temperatureCelcius: string
    temperatureFanhrenheit: string
    scale: string
}

interface MyProps {}

class Calculator extends React.Component<MyProps, MyState> {
    constructor(props: any){
        super(props);
        this.state = {
            temperatureCelcius: ' ',
            temperatureFanhrenheit: ' ',
            scale: ' '
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: any) {
        this.setState({
            temperatureCelcius: e.target.value
        })
    }

    convertTemperature = (temperature: any, scale: string) => {
        const valueToNumber: number = parseInt(temperature);
        if (scale === 'c') {
            let convertedTemperature: any = 5 / 9 * (valueToNumber - 32);
            return convertedTemperature.toString();

        } else {
            let convertedTemperature: any = 9/5 * valueToNumber + 32;
            return convertedTemperature.toString();
        }
    };

     handleCelsiusChange = (temperature: any, scale: string) => {
        this.setState({
            temperatureCelcius: temperature,
            temperatureFanhrenheit: this.convertTemperature(temperature, scale),
            scale: 'c'
        })
    };

    handleFanhrenheitChange = (temperature: any, scale: string) => {
        this.setState({
            temperatureCelcius: this.convertTemperature(temperature, scale),
            temperatureFanhrenheit: temperature,
            scale: 'f'
        })
    };

    render(): any  {
        const temperatureCelsius: string = this.state.temperatureCelcius;
        const temperatureFanhrenheit: string = this.state.temperatureFanhrenheit;
        return (
            <div>
                <TemperatureCelciusInput
                    temperature={temperatureCelsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureFanhrenheitInput
                    temperature={temperatureFanhrenheit}
                    onTemperatureChange={this.handleFanhrenheitChange}
                />
                <BoilingVerdict value={temperatureCelsius}/>
            </div>
        );
    }


}

export default Calculator;

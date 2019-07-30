import React from 'react';
import {BoilingVerdict} from "./BoilingVerdict";
import TemperatureCelciusInput from "./TemperatureCelciusInput";
import TemperatureFanhrenheitInput from "./TemperatureFanhrenheitInput";
import Grid from '@material-ui/core/Grid';


interface MyState {
    temperatureCelcius: string
    temperatureFanhrenheit: string
    scale: string
}

interface MyProps {
}

class Calculator extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            temperatureCelcius: '',
            temperatureFanhrenheit: '',
            scale: ' '
        };
    }

    convertTemperature = (temperature: string, scale: string) => {
        let valueToNumber: number = parseInt(temperature);
        if (scale === 'c') {
            let convertedTemperature: number = Math.round(5 / 9 * (valueToNumber - 32));
            return convertedTemperature.toString() === 'NaN' ? '' : convertedTemperature.toString();

        } else {
            let convertedTemperature: number = Math.round(9 / 5 * valueToNumber + 32);
            return convertedTemperature.toString() === 'NaN' ? '' : convertedTemperature.toString();
        }
    };

    handleCelsiusChange = (temperature: string) => {
        this.setState({
            temperatureCelcius: temperature,
            temperatureFanhrenheit: this.convertTemperature(temperature, 'f'),
            scale: 'c'
        })
    };

    handleFanhrenheitChange = (temperature: string) => {
        this.setState({
            temperatureCelcius: this.convertTemperature(temperature, 'c'),
            temperatureFanhrenheit: temperature,
            scale: 'f'
        })
    };

    render(): any {
        const {temperatureCelcius} = this.state;
        const {temperatureFanhrenheit} = this.state;
        return (
            <div>
                <Grid
                    container spacing={3}
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <TemperatureCelciusInput
                        temperature={temperatureCelcius}
                        onTemperatureChange={this.handleCelsiusChange}
                    />


                    <TemperatureFanhrenheitInput
                        temperature={temperatureFanhrenheit}
                        onTemperatureChange={this.handleFanhrenheitChange}
                    />

                </Grid>
                <BoilingVerdict value={temperatureCelcius}/>
            </div>
        );
    }
}

export default Calculator;

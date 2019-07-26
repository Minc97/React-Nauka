import React from 'react'
import { BoilingVerdict } from "./BoilingVerdict";

interface MyState {

}

interface MyProps {
    scale: string
    temperature: any
}

class TemperatureInput extends React.Component<MyProps, MyState>{

    render(): any {
        const scale = this.props.scale;
        const numberTemperature: number = parseFloat(this.props.temperature);
        return (
            <fieldset>
                <legend> Podaj temperature w {scale} </legend>
                <input value={this.props.temperature}  />
                <BoilingVerdict value={numberTemperature}/>
            </fieldset>
        );
    }
}

export default TemperatureInput;
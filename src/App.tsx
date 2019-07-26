import React from 'react'
import { BoilingVerdict } from "./BoilingVerdict";

interface MyState {
    temperature: any
}

interface MyProps {

}

class App extends React.Component<MyProps, MyState>{

    constructor(props: any){
        super(props);
        this.state = {
            temperature: null
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    render(): any {
        const temperature = this.state.temperature;
        const numberTemperature = parseFloat(temperature);
        return (
            <fieldset>
                <legend> Podaj temperature w celcjuszach </legend>
                <BoilingVerdict value={numberTemperature}/>;
            </fieldset>
        );
    }
}

export default App;
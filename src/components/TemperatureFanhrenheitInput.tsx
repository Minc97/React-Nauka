import React from 'react';

interface MyState {}
interface MyProps {
    temperature: any
    onTemperatureChange: any
}

class TemperatureFanhrenheitInput extends React.Component<MyProps, MyState>{
    constructor(props: any){
        super(props);
        this.handleChange = this.handleChange.bind(props);
    }

    handleChange = (e: any) => {
        this.props.onTemperatureChange(e.target.value);
    };

    render(): any {
        return (
            <fieldset>
                <legend> Podaj temperature w Fahrenheitach </legend>
                <input
                    value={this.props.temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        );
    }
}

export default TemperatureFanhrenheitInput;
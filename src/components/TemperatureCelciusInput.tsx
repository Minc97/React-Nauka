import React from 'react'

interface MyState {}
interface MyProps {
    temperature: string
    onTemperatureChange: any
}

class TemperatureCelciusInput extends React.Component<MyProps, MyState>{
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
                <legend> Podaj temperature w Celcjuszach </legend>
                <input
                    value={this.props.temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        );
    }
}

export default TemperatureCelciusInput;
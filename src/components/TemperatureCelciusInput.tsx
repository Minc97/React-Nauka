import React from 'react'
import {TextField} from "@material-ui/core";

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
            <form noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="Celcjusz"
                    margin="none"
                    variant="outlined"
                    value={this.props.temperature}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default TemperatureCelciusInput;
import React from "react";

interface MyState {

}

interface MyProps {
    value: any
}

class FlavorForm extends React.Component<MyState, MyProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: 'kokosowy'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any){
        this.setState({ value: event.target.value})
    }

    handleSubmit(){
        alert('Wybrano smak: ' + this.state.value)
    }

    render(): any {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Wybierz swój smak:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="kokosowy">Kokosowy</option>
                        <option value="grejprfutowy">Grejpfrutowy</option>
                        <option value="limonkowy">Limonkowy</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Wyślij!"/>
            </form>
        );
    }
}

export default FlavorForm;

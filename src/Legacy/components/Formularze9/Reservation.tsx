
/*
import React from 'react';

interface MyState {

}

interface MyProps {
    wybieraSie: any,
    liczbaGosci: any
}

class Reservation extends React.Component<MyState, MyProps>{
    constructor(props: any){
        super(props);
        this.state = {
            wybieraSie: true,
            liczbaGosci: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox"? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render(): any {
        return (
            <form>
                <label>
                    Wybiera się:
                    <input
                        name="wybieraSie"
                        type="checkbox"
                        checked={this.state.wybieraSie}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Liczba gości:
                    <input
                        name="liczbaGosci"
                        type="number"
                        value={this.state.liczbaGosci}
                        onChange={this.handleInputChange}
                    />
                </label>
            </form>
        );
    }

}

export default Reservation;

 */
export {}
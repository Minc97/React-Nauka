import React from "react";

interface MyState {

}

interface MyProps {
    value: any
}

class EssayForm extends React.Component<MyState, MyProps> {
    constructor(props: any){
        super(props);
        this.state = {
            value: 'Proszę napisać wypracowanie o swoim ulubionym elemencie DOM'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any){
        this.setState({value: event.target.value})
    }

    handleSubmit(){
        if (this.state.value === null){
            alert('Nie napisano wypracowania');
        }
        else {
            alert('Wysłano nastętpujące wypracowanie : ' + this.state.value);
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Wypracowanie
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Wyślij"/>
            </form>
        );
    }
}

export default EssayForm;
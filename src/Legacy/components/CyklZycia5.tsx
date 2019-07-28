// 5. Stan i cykl życia
/*
interface MyState {
}
interface MyProps {
    localDate: string
}

class App extends React.Component<MyState, MyProps> {
    timerID: any;

    constructor(props: any){
        super(props);
        this.state={
            localDate: new Date().toLocaleTimeString()
        }
    }

    componentDidMount(): void {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    tick = () => {
        this.setState({
            localDate: new Date().toLocaleTimeString()
        })
    };

    render(){
        return (
            <div>
                <h1>Witaj świecie!</h1>
                <h1>Aktualna godzina: {this.state.localDate}</h1>
            </div>
        )
    }
}
 */

export {};
/*
import React from "react";

interface MyProps {
    isLoggedIn: boolean
    unreadMessages: string[]
}

interface MyState {
}

class App extends React.Component<MyState, MyProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoggedIn: false,
            unreadMessages: ['Raz', 'Dwa', 'Trzy']
        };
    };


    Mailbox = () => {
        const unreadMessages = this.state.unreadMessages;
        return (
            <div>
                <h3>Cześć!</h3>
                {unreadMessages.length > 0 &&
                <h4>
                    Masz {unreadMessages.length} nieprzeczytanych wiadomości
                </h4>
                }
            </div>
        );
    };


    handleClick = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    };


    render(): any {
        return (
            <div>
                <h1>Testy!</h1>
                <button onClick={() => this.handleClick()}>
                    {!this.state.isLoggedIn ? 'Zaloguj' : 'Wyloguj'}
                </button>
                <h2>Użyktownik jest teraz {this.state.isLoggedIn ? 'Zalogowany' : 'Wylogowany'}</h2>
                <this.Mailbox/>
            </div>
        )
    }
};
 */

export {};
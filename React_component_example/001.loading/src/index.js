import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import "./index.css";

import Loader from './components/Loader';


export default class App extends Component {
    state = {
        isLoading: false,
    }

    checkLoading = () => {
        this.setState({ isLoading: true });
    }

    render() {

        setTimeout(() => {
            this.checkLoading();
        }, 3000);

        return (
            <>

                <main className="main-container">
                    <header className="header"><h1>머리말</h1></header>
                    {
                        !this.state.isLoading
                            ? <Loader />
                            : <>
                                <h1>Hello my website,</h1>
                                <h2>Nice to meet you!</h2>
                            </>
                    }
                </main>

            </>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
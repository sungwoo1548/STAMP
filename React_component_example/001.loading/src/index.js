import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import Loader from './components/Loader'


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
                {
                    !this.state.isLoading
                        ? <Loader />
                        : <div>hello</div>
                }
            </>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
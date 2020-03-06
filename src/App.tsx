import * as React from 'react';

interface AppProps {

}

interface AppState {

}

export class App extends React.Component<
    AppProps, AppState
> {
    constructor (props:any) {
        super(props)
    }

    render() {
        return(
            <div id="page">
<div id="top">
                <div id="header">
                    <h1>
                        Mimosas and Business
                    </h1>
                </div>
                <div id="nav">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                            <span>&nbsp;|&nbsp;</span>
                        </li>
                        <li>
                        <a href="#">Episodes</a>
                        <span>&nbsp;|&nbsp;</span>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}
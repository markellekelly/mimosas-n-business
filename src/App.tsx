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
                <div id="header">
                    <h1>
                        Mimosas and Business
                    </h1>
                </div>
                <div id="nav">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Episodes
                        </li>
                        <li>
                            About
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
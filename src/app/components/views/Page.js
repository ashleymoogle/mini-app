import React from 'react'
import {observer} from 'mobx-react'

import MenuNavTop from "../menus/MenuNavTop"

import styles from './Page.css'

@observer
class Page extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        console.log("Component mounted with props :", this.props);
    }

    render () {
        let {store, location} = this.props;
        let id = location.match.params.id;
        return (
            <div className={"wrapper"}>
                <MenuNavTop store={store}/>
                {
                    store.done ? <h1>{store.state.pages[id].title}</h1> : <div>Loading...</div>
                }
            </div>
        )
    }
}

export default Page
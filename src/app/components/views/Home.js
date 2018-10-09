import React from 'react'
import {observer} from 'mobx-react'

import MenuNavTop from "../menus/MenuNavTop"

import styles from './home.css'

@observer
class One extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        console.log("Component mounted with props :", this.props)
    }

    render () {
        let {store} = this.props;
        console.log(store);
        return (
            <div className={"wrapper"}>
                <MenuNavTop store={store}/>
                <h1 className={styles.title}>HOME</h1>
                This is a home!
            </div>
        )
    }
}

export default One
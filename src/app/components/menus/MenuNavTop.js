import React from 'react'
import {observer} from 'mobx-react'
import { NavLink, Link, browserHistory } from 'react-router-dom'
import styles from "./MenuNavTop.css"

@observer
class MenuNavTop extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        console.log("Component MenuNavTop mounted with props :", this.props)
    }

    render () {
        let {store} = this.props;
        console.log(this.props);
        return (
            <div>
                <header>
                    <ul className={styles.list}>
                        <li className={styles.item}><NavLink exact to="/" activeClassName={styles.active}>HOME</NavLink></li>
                        {
                            store.done ? Object.keys(store.pages)
                                .map((item, i) => <li key={i} className={styles.item}><NavLink exact to={this.parseToUrl(store.pages[item].location)} activeClassName={styles.active}>{this.displayName(store.pages[item].location)}</NavLink></li> )
                                : ''
                        }
                    </ul>
                </header>
            </div>
        )
    }

    displayName = (location) => {
        return location.replace('/', '')
    };

    parseToUrl = (location) => {
        return this.props.store.history.location.pathname === "/" ? `page/${location.replace('/', '')}` : location.replace('/', '')
    };
}

export default MenuNavTop
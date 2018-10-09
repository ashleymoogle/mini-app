
import {observable, action, computed, reaction} from 'mobx'
import {Promise} from 'es6-promise'
import _ from 'lodash'
import Moment from 'moment'
import toastr from 'toastr'

import axios from 'axios'

export default class Store {

    @observable state = {
        pages:{},
        getPageInfo(id) {
            return this.pages[id];
        }
    };

    reactions = {};

    @computed get pages () {
        return this.state.pages;
    }

    @computed get done () {
        return !_.isEmpty(this.pages);
    }

    init = () => {
        // Add a response interceptor
        axios.interceptors.response.use(undefined, (error) => {
            toastr.error(i18n.t('trans.toast_error'));
            return Promise.reject(error)
        });
        this.start();
        return Promise.resolve()
    };

    @action
    start() {
        axios.get('http://localhost:8080/api/all',{
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(data => {
            this.state.pages = data.data;
            console.log(Object.keys(data.data))
        })
    }

    confirmPopup = (content, header) => {
        return new Promise((resolve, reject) => {
            this.popupPromise = {resolve, reject, content, header}
        })
    };

    rejectPopupPromise = () => {
        this.popupPromise.reject();
        this.popupPromise = null
    };

    resolvePopupPromise = () => {
        this.popupPromise.resolve();
        this.popupPromise = null
    };
}
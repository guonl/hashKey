import {
    observable,
    action,
    useStrict
} from 'mobx';
useStrict(true);

class Locale {
    @observable currentLocales = location.hash.match(/langType/) ? location.hash.match(/\?\w+\=(\w+)/)[1] : "en";
    @action changeLocaleConfig = (value) => {
        this.currentLocales = value;
    };
}

const observableLocaleStore = new Locale();

export default observableLocaleStore;
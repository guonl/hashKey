import {
    observable,
    action,
    useStrict
} from 'mobx';
useStrict(true);

var currentVal = "en";
if(location.hash.match(/langType/)) {
    currentVal = location.hash.match(/\?\w+\=(\w+)/)[1];
}
class Locale {
    @observable currentLocales = currentVal;
    @action changeLocaleConfig = (value) => {
        this.currentLocales = value;
    };
}

const observableLocaleStore = new Locale();

export default observableLocaleStore;
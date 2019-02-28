import {
    observable,
    action,
    useStrict
} from 'mobx';
useStrict(true);

var currentVal = "en";
if(location.hash.match(/langType/)) {
    currentVal = location.hash.match(/\?\w+\=(\w+)/)[1];
} else {
    if(localStorage.getItem("langType")) {
        currentVal = localStorage.getItem("langType");
    }
}
class Locale {
    @observable currentLocales = currentVal;
    @action changeLocaleConfig = (value) => {
        this.currentLocales = value;
        localStorage.setItem("langType", value);
        location.hash = "#/";
        location.reload();
    };
}

const observableLocaleStore = new Locale();

export default observableLocaleStore;
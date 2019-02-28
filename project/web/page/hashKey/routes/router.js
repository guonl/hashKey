module.exports = [
    {
        path: "/",
        getComponent: function (location, cb) {
            cb(null, require("./home/components/home.jsx"))
        }
    },
    {
        path: "/hk",
        getComponent: function (location, cb) {
            cb(null, require("./hk/components/hk.jsx"))
        }
    },
    {
        path: "/prdDetail",
        getComponent: function (location, cb) {
            cb(null, require("./prdDetail/components/prdDetail.jsx"))
        }
    },
];
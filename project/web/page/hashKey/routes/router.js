module.exports = [
    {
        path: "/",
        getComponent: function (location, cb) {
            cb(null, require("./home/components/home.jsx"))
        }
    },
    {
        path: "/digital-asset-summit-2019",
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
    {
        path: "/hk",
        getComponent: function (location, cb) {
            cb(null, require("./hkOld/components/hk.jsx"))
        }
    }
];
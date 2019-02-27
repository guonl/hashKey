module.exports = [Object.assign({
    path: "/",
    getComponent: function (location, cb) {
        cb(null, require("./home/components/home.jsx"))        
    },
}),
Object.assign({
    path: "/hk",
    getComponent: function (location, cb) {
        cb(null, require("./hk/components/hk.jsx"))        
    },
})
];
require("./hashKey.less");
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, IndexRedirect, useRouterHistory} from 'react-router';
import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
import rootRoute from "./routes/router.js"
import 'antd/dist/antd.css'
render((<Router history={appHistory} routes={rootRoute} />), document.getElementById("app"))
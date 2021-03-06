import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import HomePage from './components/common/HomePage'
import BlogListPage from './containers/BlogListPage'
import ToggleSidebarPage from './containers/ToggleSidebarPage'
import NotFoundPage from './components/common/NotFoundPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/Blog" component={BlogListPage} />
        <Route path="/Toggle" component={ToggleSidebarPage} />
        <Route path="*" component={NotFoundPage} />
    </Route>
)
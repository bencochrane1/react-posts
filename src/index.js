import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { string } from 'prop-types';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/posts/new" component={PostsNew}/>
					<Route path="/posts/:id" component={PostsShow}/>
					<Route path="/" component={PostsIndex}/>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();

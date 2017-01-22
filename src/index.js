import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { App } from './components/App'
import { Development } from './components/Development'
import { Whoops404 } from './components/Whoops404'
import { Router, Route, hashHistory } from 'react-router'
import { Container } from 'semantic-ui-react'

window.React = React

render(
	<div>
		<Router history={hashHistory}>
			<Route path="/" component={App} />
			<Route path="/front-end-development" component={Development} />				
			<Route path="/back-end-development" component={Development} />
			<Route path="*" component={Whoops404} />
		</Router>
	</div>,
	document.getElementById('react-container')
)
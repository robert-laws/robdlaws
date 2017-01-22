import { createClass } from 'react'
import { WebMenu } from './WebMenu'
import { Footer } from './Footer'
import { Container, Header } from 'semantic-ui-react'

export const Development = createClass({
	getInitialState() {
		return null
	},
	render() {
		return (
			<div>
				<WebMenu location={this.props.location.pathname} />
				<Container className="pusher">
					<Header as="h1">Development</Header>
				</Container>
				<Footer />
			</div>
		)
	}
})
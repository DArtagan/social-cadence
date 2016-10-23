import React from 'react';
import Cohort from './Cohort';

export default class Docket extends React.Component {
	renderCohort() {
		return <Cohort />;
	}

	addEntry() {
		this.setState({period: Math.round(this.state.period / 1.2)})
	}
	render() {
		return (
			<div>
				<div>
					<ul>
						<li>{this.renderCohort()}</li>
					</ul>
				</div>
				<div>
					<button>Add Entry</button>
				</div>
			</div>
		);
	}
}



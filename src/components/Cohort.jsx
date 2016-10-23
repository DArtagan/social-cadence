import React from 'react';
import CounterDisplay from './CounterDisplay';

var today = new Date();
var _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

const propTypes = {
	name: React.PropTypes.string.isRequired,
	//activity: React.PropTypes.string.isRequred,,
	period: React.PropTypes.number.isRequired,
	last_visit: React.PropTypes.instanceOf(Date).isRequired,
};

const defaultProps = {
	name: 'Friend',
	period: 60,
	last_visit: 0,
};

export default class Cohort extends React.Component {
	constructor() {
		super();
		this.state = {
			name: 'Colton',
			//activity: 'Visit',
			period: 60,
			last_visit: new Date(),
		};
		this.increment = this.handleIncrementPeriod.bind(this);
		this.decrement = this.handleDecrementPeriod.bind(this);
	}

	handleIncrementPeriod() {
		this.setState({period: Math.round(this.state.period * 1.2)})
	}

	handleDecrementPeriod() {
		this.setState({period: Math.round(this.state.period / 1.2)})
	}

	render() {
		return (
			<div>{this.state.name} 
				<CounterDisplay 
					counter={dateDiffInDays(today, this.state.last_visit)}
					incrementCounter={this.increment} 
					decrementCounter={this.decrement} 
				/>
			</div>
		);
	}
}

Cohort.propTypes = propTypes;
Cohort.defaultProps = defaultProps;

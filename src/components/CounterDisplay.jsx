import React from 'react';

export default function CounterDisplay(props) {
	return <div>
			<div>{props.counter}</div>
			<button onClick={props.incrementCounter}>+</button>
			<button onClick={props.decrementCounter}>-</button>
		</div>
}

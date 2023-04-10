import ButtonContainer from './ButtonContainer';
import CalculatorScreen from './CalculatorScreen';
import { useState } from 'react';

function Calculator() {
	const [displayText, displayTextSetter] = useState('0');

	const onClickHandler = e => {
		displayTextSetter(val => {
			if(val === '0') return e;
			else if(e === 'AC') return '0';

			return val + e;	 
		});
	}

	return (
		<div className="calculator-container">
			<CalculatorScreen text={displayText} />
			<ButtonContainer onClick={onClickHandler}/>
		</div>
	);
}

export default Calculator;

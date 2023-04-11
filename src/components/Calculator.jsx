import ButtonContainer from './ButtonContainer';
import CalculatorScreen from './CalculatorScreen';
import { useState } from 'react';
import CalculatorFunctionality from './../classes/CalculatorFunctionality.js';

const calculatorFunctionality = new CalculatorFunctionality('0');

function Calculator() {
	const [displayText, displayTextSetter] = useState('0');

	const onClickHandler = key => displayTextSetter(calculatorFunctionality.next(key));

	return (
		<div className="calculator-container">
			<CalculatorScreen text={displayText} />
			<ButtonContainer onClick={onClickHandler}/>
		</div>
	);
}

export default Calculator;

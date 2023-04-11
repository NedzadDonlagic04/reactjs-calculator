export default class CalculatorFunctionality {
	constructor() {
		this.resetCalculator();
	}

	resetCalculator() {
		this.text = '0';
		this.canAddPeriod = true;
		this.errorMsg = 'Error';
	}

	isAC(key) {
		return key === 'AC';
	}

	isNumber(key) {
		key = parseInt(key);

		return !isNaN(key);
	}

	isPeriod(key) {
		return key === '.';
	}

	isOperator(key) {
		return key === '+' || key === '-' || key === '/' || key === '*';
	}

	isEqualsOperator(key) {
		return key === '=';
	}

	evaluateText() {
		this.text = eval(this.text);

		const val = parseFloat(this.text);

		if(isNaN(val) || !isFinite(val)) this.text = this.errorMsg;
		else this.canAddPeriod = true;
	}

	next(key) {
		if(this.text === this.errorMsg) this.text = '0';

		const lastIndex = this.text.length - 1;
		const lastCharacter = this.text[lastIndex],
			  secondToLastCharacter = this.text[lastIndex-1];

		if(this.isNumber(key)) {
			if(this.text === '0') this.text = key;
			else if(this.text === '-0') this.text = '-' + key;
			else this.text += key;

			if(this.isNumber(key) && this.isOperator(lastCharacter)) this.canAddPeriod = true;
		} else if(key === '-' && this.text === '0') {
			this.text = '-0';
		} else if(this.isOperator(key)) {
			if(this.isOperator(lastCharacter) && this.isOperator(secondToLastCharacter) && key !== '-') {
				if(key === '+') this.text = this.text.replace(/..$/, '+');
				else this.text = this.text.replace(/..$/, key + '-');
			}
			else if(key === '-' && this.isOperator(lastCharacter) && !this.isOperator(secondToLastCharacter)) this.text += key;
			else if(this.isOperator(lastCharacter)) this.text = this.text.replace(/.$/, key);
			else if(!this.isOperator(lastCharacter)) this.text += key;

			this.canAddPeriod = false;
		} else if(this.isPeriod(key) && this.canAddPeriod) {
			this.text += key;
			this.canAddPeriod = false;
		} else if(this.isAC(key)) {
			this.resetCalculator();
		} else if(this.isEqualsOperator(key)){
			this.evaluateText();
		}

		return this.text;	 
	}
};
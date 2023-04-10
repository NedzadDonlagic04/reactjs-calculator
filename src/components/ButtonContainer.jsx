function ButtonContainer(props) {
	const onClickHandler = e => {
		const btnText = e.target.innerText;
		
		props.onClick(btnText);
	}

	return (
		<div className="button-container">
			<div className="button-group">
				<button className="full-width" id="clear" onClick={onClickHandler}>AC</button>
				<button id="divide" onClick={onClickHandler}>/</button>
				<button id="multiply" onClick={onClickHandler}>*</button>
			</div>

			<div className="button-group">
				<button id="seven" onClick={onClickHandler}>7</button>
				<button id="eight" onClick={onClickHandler}>8</button>
				<button id="nine" onClick={onClickHandler}>9</button>
				<button id="subtract" onClick={onClickHandler}>-</button>
			</div>

			<div className="button-group">
				<button id="four" onClick={onClickHandler}>4</button>
				<button id="five" onClick={onClickHandler}>5</button>
				<button id="six" onClick={onClickHandler}>6</button>
				<button id="add" onClick={onClickHandler}>+</button>
			</div>

			<div className="button-group">
				<button id="one" onClick={onClickHandler}>1</button>
				<button id="two" onClick={onClickHandler}>2</button>
				<button id="three" onClick={onClickHandler}>3</button>
				<button id="decimal" onClick={onClickHandler}>.</button>
			</div>

			<div className="button-group">
				<button id="zero" onClick={onClickHandler}>0</button>
				<button id="equals" onClick={onClickHandler}>=</button>
			</div>
		</div>
	);
}

export default ButtonContainer;

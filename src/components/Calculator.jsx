import "./calculator.css";

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">2+2=4</div>
      <div className="btns">
        <div className="btn">7</div>
        <div className="btn">8</div>
        <div className="btn">9</div>
        <div className="btn multiplication">×</div>
        <div className="btn">4</div>
        <div className="btn">5</div>
        <div className="btn">6</div>
        <div className="btn addition">+</div>
        <div className="btn">1</div>
        <div className="btn">2</div>
        <div className="btn">3</div>
        <div className="btn division">÷</div>
        <div className="btn zero">0</div>
        <div className="btn">.</div>
        <div className="btn substraction">-</div>
        <div className="btn clear">AC</div>
        <div className="btn delete">D</div>
        <div className="btn equal">=</div>
      </div>
    </div>
  );
}

export default Calculator;

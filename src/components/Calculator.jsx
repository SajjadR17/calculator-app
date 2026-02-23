import { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import "./calculator.css";

function Calculator() {
  const [expression, setExpression] = useState("");

  useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      if (event.key === "Enter") {
        handelResult();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [handelResult]);

  function handelNum(num) {
    setExpression((prev) => prev + num);
  }
  console.log(expression);

  function handelOperator(ope) {
    if (
      expression.endsWith("+") ||
      expression.endsWith("−") ||
      expression.endsWith("÷") ||
      expression.endsWith("×")
    ) {
      return;
    }

    if (ope === "/") {
      ope = "÷";
    } else if (ope === "-") {
      ope = "−";
    } else if (ope === "*") {
      ope = "×";
    }

    setExpression((prev) => prev + ope);
  }

  function handelResult() {
    if (
      expression.endsWith("+") ||
      expression.endsWith("−") ||
      expression.endsWith("÷") ||
      expression.endsWith("×") ||
      expression.length === 0
    ) {
      return;
    }

    let sum = expression
      .replace(/÷/g, "/")
      .replace(/×/g, "*")
      .replace(/−/g, "-");

    try {
      const evalRes = evaluate(sum);
      setExpression(`${evalRes}`);
    } catch {
      setExpression("Error");
    }
  }

  function handelClear() {
    setExpression("");
  }

  function handelDelete() {
    setExpression((prev) => prev.slice(0, -1));
  }

  return (
    <div className="calculator">
      <div className="display">
        <div>{expression}</div>
      </div>
      <div className="btns">
        <div
          onClick={() => {
            handelNum("7");
          }}
          className="btn"
        >
          7
        </div>
        <div
          onClick={() => {
            handelNum("8");
          }}
          className="btn"
        >
          8
        </div>
        <div
          onClick={() => {
            handelNum("9");
          }}
          className="btn"
        >
          9
        </div>
        <div
          onClick={() => {
            handelOperator("*");
          }}
          className="btn multiplication"
        >
          ×
        </div>
        <div
          onClick={() => {
            handelNum("4");
          }}
          className="btn"
        >
          4
        </div>
        <div
          onClick={() => {
            handelNum("5");
          }}
          className="btn"
        >
          5
        </div>
        <div
          onClick={() => {
            handelNum("6");
          }}
          className="btn"
        >
          6
        </div>
        <div
          onClick={() => {
            handelOperator("+");
          }}
          className="btn addition"
        >
          +
        </div>
        <div
          onClick={() => {
            handelNum("1");
          }}
          className="btn"
        >
          1
        </div>
        <div
          onClick={() => {
            handelNum("2");
          }}
          className="btn"
        >
          2
        </div>
        <div
          onClick={() => {
            handelNum("3");
          }}
          className="btn"
        >
          3
        </div>
        <div
          onClick={() => {
            handelOperator("/");
          }}
          className="btn division"
        >
          ÷
        </div>
        <div
          onClick={() => {
            handelNum("0");
          }}
          className="btn zero"
        >
          0
        </div>
        <div
          onClick={() => {
            if (
              expression.endsWith("+") ||
              expression.endsWith("−") ||
              expression.endsWith("÷") ||
              expression.endsWith("×") ||
              expression.length === 0
            ) {
              return;
            }
            setExpression((prev) => prev + ".");
          }}
          className="btn"
        >
          .
        </div>
        <div
          onClick={() => {
            handelOperator("-");
          }}
          className="btn substraction"
        >
          −
        </div>
        <div
          onClick={() => {
            handelClear();
          }}
          className="btn clear"
        >
          AC
        </div>
        <div
          onClick={() => {
            handelDelete();
          }}
          className="btn delete"
        >
          D
        </div>
        <div
          onClick={() => {
            handelResult();
          }}
          className="btn equal"
        >
          =
        </div>
      </div>
    </div>
  );
}

export default Calculator;

import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {

  //u can also handle 4 different states for each
  //or use one state only to hadle the 4 differnt values
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  //adding "+" in front of newValue because JS will treat any input value from the input box as string and not number so if they are used as string the calculations will go wrong, to avoid that, adding a plus will convert that string into an object
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const isValidInput = userInput.duration>=1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!isValidInput && <p className="center">Please enter duration greater than or equal to 1</p>}
      {isValidInput && <Results userInput={userInput} />}
    </>
  );
}

export default App;


const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Harry";
  const age = 24;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Ryan" age={10 + 19} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;

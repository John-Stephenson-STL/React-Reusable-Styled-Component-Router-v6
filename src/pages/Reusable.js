import React from 'react';

const Message = props => <div>{props.msg}</div>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message msg="A Generic Hello World Text" />
        <Message msg="Creating Reusable React Components" />
      </header>
    </div>
  );
}

export default App;
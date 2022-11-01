import React from 'react';

class App extends React.Component {
  render() {
    // console.log(this.props?.status);
    const { data} = this.props;
    return (
      <div>
        <h1>
          {data.id} {data.name}

        </h1>
        <img src="./images/mango.jpg" alt="3" />
      </div>
    )
  }
}
export default App;

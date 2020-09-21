import React from 'react'

class Practice extends React.Component {
    answer() {
        alert("The Capital of USA is Washington DC.")
    }
    render(){
        return(<div>
            <h1>What's the Capital of USA?</h1>
            <button onClick={this.answer}>Click Me</button>
            </div>

        );
    }
}
  export default Practice

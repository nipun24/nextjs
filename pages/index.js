import React, {Component} from 'react';
import Head from 'next/head';
import '../css/index.css';

class App extends Component {

  state = {
    text: ""
  }

  onSearch = () => {
    console.log(this.state.text)
  }

  render() {
    return(
      <div className="container">
        <Head>
          <title>StackOverflow Search</title>
          <style>{`
              body { 
                margin: 0px;
              }
            `}
          </style>
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        </Head>
        <h1>StackOverflow Search</h1>
        <div className="container2">
          <input className="field" onChange={e => this.setState({text: e.target.value.toLowerCase()})} />
          <a href="/results" className="search" onClick={this.onSearch} >SEARCH</a>
        </div>
      </div>
    );
  }
}

export default App;

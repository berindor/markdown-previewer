
import React from 'react';
import './App.css';
import {parse} from 'marked';


const defaultText = '' //see userStory #5

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: defaultText
    }
    this.handleText = this.handleText.bind(this);
  }

  handleText() {
    return this.setState(
      {text: ''}
    );
  }

  
  render() {
    return (
      <div id="body-div">
        <textarea id="editor" onChange={this.handleText}></textarea>
        <div id="preview" dangerouslySetInnerHTML={{__html: parse('# Marked in browser\n\nRendered by **marked**.')}}>
        </div>
      </div>
    )
  }
}

export default App;

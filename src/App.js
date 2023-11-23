
import React from 'react';
import './App.css';
import {parse} from 'marked';

function replaceCarriageReturn(text) {
  const arr = text.split('\n');
  return arr.join('  \n');
} 

const defaultText = '# This is a heading \n ## This is a subheading \n This is a normal text with a **few words in bold**. \n - list a first item \n - and a second item \n - and make some \n   - sub items \n  \n You can insert a link, here is a link to [freeCodeCamp](https://www.freecodecamp.org) \n Here is one of my favourite paintings:  \n ![Csontváry Kosztka Tivadar: A magányos cédrus ](https://upload.wikimedia.org/wikipedia/commons/d/d3/Cskt-maganyos_cedrus_%281907%29.jpg) \n > But unfortunately, you cannot resize the image using this format \n  To resize an image, use this format:  `<img src="https://your-image-url.type" width="100" height="100">` \n Maybe you see it better in a code box: \n  ``` \n <img src="https://your-image-url.type" width="100" height="100">  \n //You can write more lines in a code box between the ``` marks. \n ``` \n  This is the last sentence of this sample text.'  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: replaceCarriageReturn(defaultText)
    }
    this.handleText = this.handleText.bind(this);
  }

  handleText(event) {
    this.setState(
      {text: replaceCarriageReturn(event.target.value)}
    );
  }

  render() {
    return (
      <div id="body-div">
        <p className="instructions">Put an arbitrary text of format of a GitHub flavored markdown (e.g. a readme text) into the Editor to see the beautyful formatted text in the Preview. </p>
        <div id="editor-div">
          <div id="editor-title" className="div-title">Editor</div>
          <textarea id="editor" onChange={this.handleText} rows="20" cols="100" title="Editor" value={this.state.text} ></textarea>
        </div>
        <div id="preview-div">
          <div id="preview-title" className="div-title">Preview</div>
          <div id="preview" dangerouslySetInnerHTML={{__html: parse(this.state.text)}}>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

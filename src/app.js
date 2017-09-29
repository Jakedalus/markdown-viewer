
marked.setOptions({
    sanitize: true 
});

var startingText = `
Heading 
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*
`;

var startingMarkdown = marked(startingText);


class MarkdownApp extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.handleTyping = this.handleTyping.bind(this);
        this.state = {
            inputText: startingText,
            outputText: {__html: startingMarkdown}
        };
       
    }
    
    handleTyping(e) {
        var inputText = e.target.value;
        var markedText = marked(inputText);

        this.setState(() => {
            return {
                inputText: inputText,
                outputText: {__html: markedText}
            } 
        });
    }
    
    render() {
        return (
            <div>
                <h1>Markdown Viewer</h1>
                <Input default={this.state.inputText} handleTyping={this.handleTyping}/>
                <Output outputText={this.state.outputText} />
            </div>
        );
    }
    
}

const Input = (props) => {
    return (
        <div className='section' id='input'>
            <textarea defaultValue={props.default} onChange={props.handleTyping} rows="20" cols="50" name="inputText">
            </textarea>
        </div>
    );
};

const Output = (props) => {
    return (
        <div className='section' id='output' dangerouslySetInnerHTML={props.outputText}>

        </div>
    );
};

ReactDOM.render(<MarkdownApp />, document.getElementById('app'));






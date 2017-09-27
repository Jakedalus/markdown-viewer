
marked.setOptions({
    sanitize: true 
});

class MarkdownApp extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.handleTyping = this.handleTyping.bind(this);
        this.state = {
            inputText: '',
            outputText: {__html: ''}
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
                <Input handleTyping={this.handleTyping}/>
                <Output outputText={this.state.outputText} />
            </div>
        );
    }
    
}

const Input = (props) => {
    return (
        <div id='input'>
            <textarea onInput={props.handleTyping} rows="10" cols="50" name="inputText"></textarea>
        </div>
    );
};

const Output = (props) => {
    return (
        <div id='output' dangerouslySetInnerHTML={props.outputText}>
            
        </div>
    );
};

ReactDOM.render(<MarkdownApp />, document.getElementById('app'));
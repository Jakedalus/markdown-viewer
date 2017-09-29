'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

marked.setOptions({
    sanitize: true
});

var startingText = '\nHeading \n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*\n';

var startingMarkdown = marked(startingText);

var MarkdownApp = function (_React$Component) {
    _inherits(MarkdownApp, _React$Component);

    function MarkdownApp(props) {
        _classCallCheck(this, MarkdownApp);

        var _this = _possibleConstructorReturn(this, (MarkdownApp.__proto__ || Object.getPrototypeOf(MarkdownApp)).call(this, props));

        _this.handleTyping = _this.handleTyping.bind(_this);
        _this.state = {
            inputText: startingText,
            outputText: { __html: startingMarkdown }
        };

        return _this;
    }

    _createClass(MarkdownApp, [{
        key: 'handleTyping',
        value: function handleTyping(e) {
            var inputText = e.target.value;
            var markedText = marked(inputText);

            this.setState(function () {
                return {
                    inputText: inputText,
                    outputText: { __html: markedText }
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Input, { 'default': this.state.inputText, handleTyping: this.handleTyping }),
                React.createElement(Output, { outputText: this.state.outputText })
            );
        }
    }]);

    return MarkdownApp;
}(React.Component);

var Input = function Input(props) {
    return React.createElement(
        'div',
        { className: 'section', id: 'input' },
        React.createElement('textarea', { defaultValue: props.default, onChange: props.handleTyping, rows: '20', cols: '50', name: 'inputText' })
    );
};

var Output = function Output(props) {
    return React.createElement('div', { className: 'section', id: 'output', dangerouslySetInnerHTML: props.outputText });
};

ReactDOM.render(React.createElement(MarkdownApp, null), document.getElementById('app'));

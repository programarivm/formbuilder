var HtmlToReactParser = require('html-to-react').Parser;

const TheForm = () => {
  const htmlInput = '<div><h1>To do</h1><p>Display the entire HTML form here!</p></div>';
  const htmlToReactParser = new HtmlToReactParser();
  const reactElement = htmlToReactParser.parse(htmlInput);

  return (reactElement);
};

export default TheForm;

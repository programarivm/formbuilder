import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";

const prettify = (str) => {
  const div = document.createElement('div');
  div.innerHTML = str.trim();

  return format(div, 0).innerHTML;
}

const format = (node, level) => {
  let indentBefore = new Array(level++ + 1).join('  ');
  let indentAfter  = new Array(level - 1).join('  ');
  let textNode;
  for (let i = 0; i < node.children.length; i++) {
    textNode = document.createTextNode('\n' + indentBefore);
    node.insertBefore(textNode, node.children[i]);
    format(node.children[i], level);
    if (node.lastElementChild === node.children[i]) {
      textNode = document.createTextNode('\n' + indentAfter);
      node.appendChild(textNode);
    }
  }

  return node;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

const TheForm = () => {
  const classes = useStyles();

  const state = useSelector(state => state);

  let elems = [
    ...state.input.items,
    ...state.select.items,
    ...state.textarea.items
  ]
  .sort((a, b) => (a.order - b.order))
  .map((elem, i) => {
    elem.order = i;
    return elem;
  });
  
  let html = elems.map(elem => elem.html).join('');

  if (html) {
    return <Paper className={classes.paper}>
      <pre>
        {prettify(`<form>${html}</form>`)}
      </pre>
    </Paper>
  }

  return null;
};

export default TheForm;

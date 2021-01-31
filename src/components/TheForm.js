import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

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

  const elems = [
    ...state.input.items,
    ...state.select.items,
    ...state.textarea.items
  ]
  .sort((a, b) => (a.order - b.order))
  .map((elem, i) => {
    elem.order = i;
    return elem;
  });

  const html = elems.map(elem => elem.html).join('');

  const textToCopy = prettify(`<form>${html}</form>`);

  if (html) {
    return <div>
      <Paper className={classes.paper}>
        <CopyToClipboard text={textToCopy}>
          <Button
            color="default"
            size="small"
            startIcon={<FileCopyOutlinedIcon />}
          >
            Copy text
          </Button>
        </CopyToClipboard>
        <pre>{textToCopy}</pre>
      </Paper>
    </div>
  }

  return null;
};

export default TheForm;

import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { set as setInput } from "actions/inputActions";
import { set as setSelect } from "actions/selectActions";
import { set as setTextarea } from "actions/textareaActions";
import htmlTagTypes from 'constants/htmlTag/Types';
import DndCard from './Dnd/Card';

export default function DndCards() {
  const dispatch = useDispatch();

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

  const reorder = (elems, dragIndex, hoverIndex) => {
    return elems.map((elem) => {
      if (elem.order === hoverIndex) {
        elem.order = dragIndex;
      } else if (elem.order === dragIndex) {
        elem.order = hoverIndex;
      }
      return elem;
    }).sort((a, b) => (a.order - b.order));
  };

  const moveCard = (dragIndex, hoverIndex) => {
    reorder(elems, dragIndex, hoverIndex);
    dispatch(
      setInput({
        items: elems.filter(elem => elem.type === htmlTagTypes.INPUT)
      })
    );
    dispatch(
      setSelect({
        items: elems.filter(elem => elem.type === htmlTagTypes.SELECT)
      })
    );
    dispatch(
      setTextarea({
        items: elems.filter(elem => elem.type === htmlTagTypes.TEXTAREA)
      })
    );
  }

  const renderCard = (elem, i) => {
    return (
      <DndCard
        key={i}
        index={elem.order}
        elem={elem}
        moveCard={moveCard}
      />
    )
  };

  return (
    <div>{elems.map((elem, i) => renderCard(elem, i))}</div>
  );
}

import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { reorder as reorderInput } from "../actions/inputActions";
import DndCard from './DndCard';

export default function Elements() {
  const dispatch = useDispatch();

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

  const moveCard = (dragIndex, hoverIndex) => {
    dispatch(
      reorderInput({
        'from': elems[dragIndex].order,
        'to': elems[hoverIndex].order
      })
    );
  };

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

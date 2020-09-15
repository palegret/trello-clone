import React from 'react';

import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
import { ColumnContainer, ColumnTitle } from './styles';
import { useAppState } from './AppStateContext';

interface ColumnProps {
  text: string
  index: number
  id: string
}

export const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const tasks = state.lists[index].tasks;

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task, i) => (
        <Card text={task.text} key={task.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={text => dispatch({ type: 'ADD_TASK', payload: { text, listId: id } })}
        dark
      />
    </ColumnContainer>
  )
}

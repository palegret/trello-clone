import React from 'react'

import { AddNewItem } from './AddNewItem'
import { AppContainer } from './styles'
import { Column } from './Column'
import CustomDragLayer from './CustomDragLayer'
import { useAppState } from './AppStateContext'

const App = () => {
  const { state, dispatch } = useAppState()
  const { lists } = state

  return (
    <AppContainer>
      <CustomDragLayer />
      {lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem 
        toggleButtonText="+ Add another list" 
        onAdd={text => dispatch({ type: 'ADD_LIST', payload: text })} 
      />
    </AppContainer>
  )
}

export default App

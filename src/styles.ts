import styled from 'styled-components';

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`

export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  flex-grow: 0;
  margin-right: 20px;
  min-height: 40px;
  padding: 8px 8px;
  width: 300px;
`

export const ColumnTitle = styled.div`
  font-weight: bold;
  padding: 6px 16px 12px;
`

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
  cursor: pointer;
  margin-bottom: 0.5rem;
  max-width: 300px;
  padding: 0.5rem 1rem;
`
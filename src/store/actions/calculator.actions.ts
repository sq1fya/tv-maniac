import { AnyAction } from 'redux'

export const calculatorAdd = (value: number): AnyAction => ({
  type: 'CALCULATOR/ADD',
  payload: value,
})

export const calculatorRemove = (value: number): AnyAction => ({
  type: 'CALCULATOR/REMOVE',
  payload: value,
})

export const calculatorClear = (): AnyAction => ({
  type: 'CALCULATOR/CLEAR',
})

import { createAction } from 'typesafe-actions'

export const calculatorAdd = createAction('calculator/ADD')<number>()

export const calculatorRemove = createAction('calculator/REMOVE')<number>()

export const calculatorClear = createAction('calculator/CLEAR')<void>()

import { AnyAction } from 'redux'
import * as calculatorAction from '../actions/calculator.actions'
import { ActionType, getType } from 'typesafe-actions'

type CalculatorAction = ActionType<typeof calculatorAction>

interface State {
  total: number
  cached?: number
}

const initialState: State = {
  total: 0,
}

export const calculator = (
  state = initialState,
  action: CalculatorAction,
): State => {
  switch (action.type) {
    case getType(calculatorAction.calculatorAdd):
      return { ...state, total: state.total + action.payload }
    case getType(calculatorAction.calculatorRemove):
      return { ...state, total: state.total - action.payload }
    case getType(calculatorAction.calculatorClear):
      return { ...initialState }
    default:
      return state
  }
}

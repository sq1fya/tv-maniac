import React, { FC } from 'react'
import { BigRoot, Root } from './elements'

type Props = {
  value: number
  big?: boolean
}

export const Badge: FC<Props> = ({ value, big }) =>
  big ? (
    <BigRoot value={value}>{value}</BigRoot>
  ) : (
    <Root value={value}>{value}</Root>
  )

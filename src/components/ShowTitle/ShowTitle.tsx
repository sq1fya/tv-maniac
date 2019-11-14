import React, { FC } from 'react'

type Props = {
  title: string
}

// export const ShowTitle = (props: Props) => <h3></h3>

export const ShowTitle: FC<Props> = ({ title }) => <h3>{title}</h3>

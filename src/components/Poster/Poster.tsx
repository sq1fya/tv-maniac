import React, { FC } from 'react'
import { ShowTitle } from '../ShowTitle/ShowTitle'
import { Image, Show } from '../../models/tv.models'

// type Props = {
//   name: Show['name']
//   image: Show['image']
// }

type Props = Pick<Show, 'name' | 'image'>
// type ShowWithNoNameAndImage = Omit<Show, 'name' | 'image'>

export const Poster: FC<Props> = ({ name, image, children }) => {
  const placeholder = 'https://www.fillmurray.com/210/295'
  const imgUrl = image ? image.medium : placeholder

  return (
    <>
      <img src={imgUrl} alt="" className="img-fluid" />
      {children}
      <ShowTitle title={name} />
    </>
  )
}

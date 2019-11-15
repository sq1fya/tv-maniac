import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { SearchPage } from './SearchPage/SearchPage'

export const withTitle = (
  PageComponent: React.ComponentType,
  title: string,
) => () => (
  <>
    <Helmet>
      <title>TV Maniac :: {title}</title>
    </Helmet>
    <PageComponent />
  </>
)

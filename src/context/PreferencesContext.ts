import React from 'react'

export const PreferencesContext = React.createContext({
  initialQuery: '',
  perPage: 0,
})

PreferencesContext.displayName = 'Preferences'

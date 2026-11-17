
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('lydia-language') === 'en'
        ? 'en'
        : 'fr'
    } catch {
      return 'fr'
    }
  })

  useEffect(() => {
    document.documentElement.lang = language

    try {
      localStorage.setItem('lydia-language', language)
    } catch {
      // Le site continue de fonctionner si le stockage est bloqué.
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage(current => current === 'fr' ? 'en' : 'fr')
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      'useLanguage doit être utilisé dans LanguageProvider'
    )
  }

  return context
}

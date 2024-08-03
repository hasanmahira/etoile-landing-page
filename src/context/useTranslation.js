import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from '../text/translations';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key) => {
    return translations[language][key] || key;
  };

  return { t, language };
};
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from '../text/translations';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key, replacements = {}) => {
    let text = translations[language][key] || key;
    
    // Replace templates with values provided in replacements object
    Object.keys(replacements).forEach(replaceKey => {
      const regex = new RegExp(`{{${replaceKey}}}`, 'g');
      text = text.replace(regex, replacements[replaceKey]);
    });

    return text;
  };

  return { t, language };
};
import React from 'react';
import { LanguageProvider } from './src/context/LanguageContext';

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
);

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` });
};
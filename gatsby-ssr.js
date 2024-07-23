import React from 'react';
import { LanguageProvider } from './src/context/LanguageContext';

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
);

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

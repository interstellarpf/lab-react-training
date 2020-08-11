import React from 'react';

const Greetings = ({ lang, children }) => {
  const selectLang = (lang) => {
    switch (lang) {
      case 'es':
        return 'Hola';

      case 'de':
        return 'Hallo';

      case 'fr':
        return 'Bonjour';

      case 'en':
        return 'Hello';

      default:
        return 'hola';
    }
  };

  return (
    <p className="it2-container">{selectLang(lang)} {children}</p>
  );
};

export default Greetings;

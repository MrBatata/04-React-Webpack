import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const defaultConfig = {
  theme: 'dark',
  lang: 'es',
};

export default function Settings() {
  // const [config, setConfig] = useLocalStorage('config', defaultConfig);
  const currentConfig = useLocalStorage('config', defaultConfig);

  // TODO: light/dark toogle instead -> useBoolean?
  const handleLightClick = (event) => {
    event.preventDefault();
    currentConfig.setValue((oldConfig) => (
      {
        ...oldConfig,
        theme: 'light',
      }));
  };

  // TODO: light/dark toogle instead -> useBoolean?
  const handleDarkClick = (event) => {
    event.preventDefault();
    currentConfig.setValue((oldConfig) => (
      {
        ...oldConfig,
        theme: 'dark',
      }));
  };

  return (
    <div>
      <h1>APP SETTINGS</h1>
      <p>
        Actual Color (persiste en localStorage):
        {JSON.stringify(currentConfig.value.theme)}
      </p>
      Actual language (persiste en localStorage):
      {JSON.stringify(currentConfig.value.lang)}
      <p />
      <button type="button" onClick={handleLightClick}>
        Change to light color
      </button>
      <button type="button" onClick={handleDarkClick}>
        Change to dark color
      </button>
    </div>
  );
}

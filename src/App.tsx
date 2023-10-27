import React from 'react';
import { Main } from './Components/Main'
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { Game } from './Components/Game';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { PartialTheme, ThemeProvider } from '@fluentui/react';

export const App: React.FunctionComponent = () => {
  initializeIcons();

  const appTheme: PartialTheme = {
    palette: {
      themePrimary: '#d84238',
      themeLighterAlt: '#fdf6f6',
      themeLighter: '#f9dddb',
      themeLight: '#f4c1bd',
      themeTertiary: '#e88881',
      themeSecondary: '#dd574d',
      themeDarkAlt: '#c33c33',
      themeDark: '#a5332b',
      themeDarker: '#792620',
      neutralLighterAlt: '#faf9f8',
      neutralLighter: '#f3f2f1',
      neutralLight: '#edebe9',
      neutralQuaternaryAlt: '#e1dfdd',
      neutralQuaternary: '#d0d0d0',
      neutralTertiaryAlt: '#c8c6c4',
      neutralTertiary: '#a19f9d',
      neutralSecondary: '#605e5c',
      neutralPrimaryAlt: '#3b3a39',
      neutralPrimary: '#323130',
      neutralDark: '#201f1e',
      black: '#000000',
      white: '#ffffff'
    }
  };

  return (
    // <ThemeProvider
    //   applyTo="body"
    //   theme={generateTheme({ primaryColor: '#d84238', textColor: '#000000', backgroundColor: '#79cdf5' })}
    // >
    <ThemeProvider theme={appTheme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="game/:id" element={<Game />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
    // </ThemeProvider>
  );
};

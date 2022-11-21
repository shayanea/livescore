import {LogBox, Platform, StatusBar, useColorScheme} from 'react-native';
import React, {useEffect} from 'react';

LogBox.ignoreAllLogs();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setTranslucent(true);
    }
  }, [isDarkMode]);

  return <></>;
};

export default App;

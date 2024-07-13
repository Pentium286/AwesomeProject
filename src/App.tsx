import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import { commonTheme } from "./theme/theme";
import { Navigation } from "./navigation";
import { Text } from "react-native";

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={commonTheme}>
        <Navigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
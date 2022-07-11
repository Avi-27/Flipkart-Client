import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { createContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";

const TempalteContext = createContext(null);

const TemplateProvider = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiDialogContent: {
        styleOverrides: {
          root: {
            padding: "0px 0px",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: "none",
          },
        },
      },
    },
  });
  return (
    <TempalteContext.Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </TempalteContext.Provider>
  );
};

export default TemplateProvider;

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      paper: "#1b2532"

    },
  },
  typography: {
    name: {
      fontFamily: "Maven Pro",
      fontSize: 48,
      textIndent: 16,
      display: "block"
    },
    role: {
      fontSize: 18,
      textIndent: 16,
      display: "block"
    },
    message: {
      fontSize: 16,
      color: "#fffff1",
      display: "block"
    },
    heading: {
      textDecoration: 'underline',
      fontSize: 22,
      textUnderlineOffset: 6,
      textDecorationColor: "#364b63",
      color: "#fffff1",
      textDecorationThickness: 2,
      marginTop: 16,
      marginBottom: 8,
      display: "block"
    },
    paragraph: {
      fontSize: 16,
      textAlign: "justify",
      textIndent: 24,
      marginTop: 3,
      marginBottom: 4,
      display: "inline-block"
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 4,
      marginBottom: 8,
      width: 125,
    },
    skills: {
      fontSize: 16,
      lineHeight: 2,
    },
    projectName: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 4,
      marginBottom: 2,
      width: "100%",
      display: "block"
    },
    projectDate: {
      fontSize: 14,
      lineHeight: 1
    },
    projectDescription: {
      fontSize: 16,
      display: "block",
      marginBottom: 1
    },
    projectTechnologies: {
      fontSize: 14,
    },
    footerName: {
      fontSize: 32,
      marginTop: 44,
      marginBottom: 32,
      display: "block"
    },
    footerCopy: {
      fontSize: 12,
      color:"#364b63",
      fontWeight: "bold"
    },
    contactInfo: {
      fontSize: 16,
      color: "#364b63",
      marginBottom: 2,
    },
    footerLegal: {
      color: "#364b63",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: 14,
      marginBottom: 4
    }
  },
});

export default theme;

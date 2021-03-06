//Run in terminal with npm start (from folder frontend)
import React from "react";
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Todos />
    </ChakraProvider>
  )
}

const container = document.getElementById("root")
const rootElement = createRoot(container)
rootElement.render(<App tab="home" />)
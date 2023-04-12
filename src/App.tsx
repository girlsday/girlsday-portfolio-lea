import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card, Container, MantineProvider, Text, Title } from "@mantine/core";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <Title order={1}>Vite + React</Title>
        <Card mt="xl">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <Text mt="sm">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Text>
        </Card>
        <Text mt="md" c="dimmed">
          Click on the Vite and React logos to learn more
        </Text>
      </Container>
    </MantineProvider>
  );
}

export default App;

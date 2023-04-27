import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Card, Container, List, MantineProvider, Text, Title, Image, Grid, Center, Stack, Space } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container bg={"grape.0"} fluid>
        <Grid grow>
          <Grid.Col span={4}>
          <Carousel miw={200} loop maw={200}>
            <Carousel.Slide><Image src="/girlsday-portfolio-lea/GirlsDay-14.jpg"/></Carousel.Slide>
            <Carousel.Slide><Image src="/girlsday-portfolio-lea/GirlsDay-15.jpg"/></Carousel.Slide>
          </Carousel>
          <Title mt={20} ml={100} order={1}>Lea</Title>
          </Grid.Col>
          <Grid.Col span={4}>
          <Text mt="md" c="dimmed">
            Was ist mir Wichtig? Z.B. Meine Familie und meine Freunde.
            Wer gehört zu meiner engsten Familie? Mein kleiner Bruder Jonatan, Meine Mama Julika und mein Papa Daniel. 
            Wir habe einen Kater und er heißt Krümmel. Geboren bin ich am 3. April 2010.
          </Text>
          </Grid.Col>
        </Grid>
          <Text mt={50} c="dimmed">
            Das mache ich gerne:
          </Text>
        <Carousel maw={300} mx="auto" withIndicators height={100}>
        <Carousel.Slide>Mit unserem Kater spiele und Kuscheln</Carousel.Slide>
      <Carousel.Slide>Zeit mit meiner Familie verbringen</Carousel.Slide>
      <Carousel.Slide>Zeit mit Freunden verbringen</Carousel.Slide>
      <Carousel.Slide>Backen/Kochen</Carousel.Slide>
      <Carousel.Slide>Kreativ werden</Carousel.Slide>
      <Carousel.Slide>Brakedance</Carousel.Slide>
      <Carousel.Slide>Schwimmen</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>

    <Grid mt={50}>
          <Grid.Col span={8}>
          <Title mb={20} order={1}>Mariella, Valentina und Ich</Title>
          <Text mt="md" c="dimmed">
          Mariella, Vallentin und Ich am 27. April 2023 beim Girls Day.
        </Text>
          </Grid.Col>
          <Grid.Col span={4}>
          <Carousel loop maw={200}>
          <Carousel.Slide>
            <Image src="/girlsday-portfolio-lea/GirlsDay-7.jpg"/>
            </Carousel.Slide>
            <Carousel.Slide>
            <Image src="/girlsday-portfolio-lea/GirlsDay-5.jpg"/>
          </Carousel.Slide>
          <Carousel.Slide><Image src="/girlsday-portfolio-lea/GirlsDay-6.jpg"/></Carousel.Slide>
        </Carousel>
          </Grid.Col>
          </Grid>


        <Center mb={50}>

        </Center>
        <Button variant="light" color="grape" radius="lg" size="md">
          Um Leas seite zu Teilen hier Drücken.
        </Button>
      </Container>
    </MantineProvider>
  );
}

export default App;

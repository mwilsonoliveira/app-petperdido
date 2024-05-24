import { Card, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <div>
          <h1>Teste</h1>
          <Text>teste</Text>
        </div>
        <div>
          <h1>Teste</h1>
          <Text>teste</Text>
        </div>
      </Flex>
    </Grid>
  );
}

import { Button, Card, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <div>
          <Button size='3' variant="classic">Achei um pet!</Button>
        </div>
        <div>
        </div>
      </Flex>
    </Grid>
  );
}


import {
  Box,
  Button,
  Text,
} from "@chakra-ui/react"

export default async function Home() {
  return (
    <Box colorPalette="red">
  <Box bg="colorPalette.400">Some box</Box>
  <Text color="colorPalette.600">Some text</Text>
  <Button colorPalette="blue" bg="red">Click me</Button>
</Box>
  )
}
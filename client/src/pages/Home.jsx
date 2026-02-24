import { Link } from "react-router";

import { Box, VStack, Heading, Text, Button, Center } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center minH="100vh" bgGradient="linear(to-br, blue.50, purple.100)">
      <VStack
        spacing={6}
        bg="white"
        p={12}
        borderRadius="2xl"
        shadow="2xl"
        textAlign="center"
        maxW="lg"
      >
        <Heading as="h1" size="2xl" color="blue.700">
          Welcome to the Community Guestbook
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Share your thoughts with the community. 
          See what others have written or add your own!
        </Text>

        <Button
          as={Link}
          to="/posts"
          colorScheme="blue"
          size="lg"
          px={8}
          _hover={{ transform: "scale(1.05)" }}
          transition="all 0.2s"
        >
          View All Posts
        </Button>
      </VStack>
    </Center>
  );
}
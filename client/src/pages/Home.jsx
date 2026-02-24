import { Link } from "react-router";

import { Box, VStack, Heading, Text, Button, Center } from "@chakra-ui/react";

export default function Home() {
  const neonCyan = "cyan.400";
  const neonPink = "pink.500";

  return (
    <Center 
      minH="100vh" 
      bg="gray.900" 
      position="relative"
      p={4}
      _before={{
        content: '""',
        position: "absolute",
        top: 0, left: 0, width: "100%", height: "100%",
        background: "repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)",
        pointerEvents: "none",
        zIndex: 2
      }}
    >
      <VStack
        spacing={8}
        bg="black"
        p={10}
        border="4px solid"
        borderColor={neonCyan}
        boxShadow={`0 0 20px var(--chakra-colors-cyan-500)`}
        textAlign="center"
        maxW="lg"
        zIndex={3}
      >
        <Heading 
          as="h1" 
          size="xl" 
          color="white"
          fontFamily="monospace"
          textTransform="uppercase"
          letterSpacing="wider"
          textShadow={`0 0 10px var(--chakra-colors-cyan-300), 0 0 20px var(--chakra-colors-cyan-500)`}
        >
          {} GUESTBOOK
        </Heading>

        <VStack spacing={4}>
          <Text 
            fontSize="sm" 
            color={neonPink} 
            fontFamily="monospace"
            fontWeight="bold"
          >
            [ SYSTEM ACTIVE ]
          </Text>
          <Text 
            fontSize="md" 
            color="gray.400" 
            fontFamily="monospace"
            lineHeight="tall"
          >
            SHARE YOUR THOUGHTS WITH THE VOID.
          </Text>
        </VStack>

        <Button
          as={Link}
          to="/posts"
          variant="outline"
          colorScheme="pink"
          size="lg"
          width="full"
          borderRadius="0" 
          borderWidth="2px"
          fontFamily="monospace"
          fontSize="md"
          _hover={{ 
            bg: "pink.500", 
            color: "white",
            boxShadow: `0 0 25px var(--chakra-colors-pink-500)`,
            transform: "scale(1.02)"
          }}
          _active={{ transform: "scale(0.98)" }}
        >
          VIEW ALL POSTS
        </Button>
      </VStack>

      {}
      <Box
        position="absolute"
        bottom="0"
        w="100%"
        h="20%"
        opacity="0.3"
        bgImage={`linear-gradient(${neonPink} 1px, transparent 1px), linear-gradient(90deg, ${neonPink} 1px, transparent 1px)`}
        bgSize="40px 40px"
        transform="perspective(100px) rotateX(60deg)"
        zIndex={1}
      />
    </Center>
  );
}
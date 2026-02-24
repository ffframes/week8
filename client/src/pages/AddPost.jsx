import React, { useState } from 'react';
import {Container,
  VStack,
  Heading,
  Box,
  Input,
  Textarea,
  Button,
  Text,
  Center,
  Card,
} from '@chakra-ui/react';

import { Link } from "react-router" ;

export default function AddPost() {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://week8-1bmc.onrender.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName, content: message }),
    });

    setUserName("");
    setMessage("");

    };

     return (
    <Container maxW="container.md" py={10}>
      <VStack gap={8} align="stretch">
        <Box textAlign="center">
          <Heading size="2xl" color="blue.600">
            Add a Message
          </Heading>
        </Box>

        <Card.Root variant="outline" p={6} borderRadius="xl" shadow="sm">
          <form onSubmit={handleSubmit}>
            <VStack gap={4}>
              <Input
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <Textarea
                placeholder="What's on your mind?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button colorPalette="blue" width="full" type="submit" size="lg">
                Post Message
              </Button>
            </VStack>
          </form>
        </Card.Root>
      </VStack>
    </Container>
  );
}



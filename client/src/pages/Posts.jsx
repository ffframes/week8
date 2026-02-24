import { useState, useEffect } from "react";
import {
  Container,
  VStack,
  Heading,
  Stack,
  Card,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

export default function ViewPosts() {
  const [posts, setPosts] = useState([]);

useEffect(() => {
   async function fetchPosts(){
  const response = await fetch("https://week8-1bmc.onrender.com/posts");
  const data = await response.json();
  setPosts(data)
  };
  
    fetchPosts();
    const interval = setInterval(fetchPosts, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxW="container.md" py={10}>
      <VStack gap={8} align="stretch">
        <Box textAlign="center">
        <Heading size="lg">Recent Posts</Heading>
</Box>

        <Stack gap={4}>
          {posts.length > 0 ? (
            posts.map((post) => (
              <Card.Root key={post.id} p={4} variant="filled" borderRadius="lg">
                <Card.Header p={0}>
                  <Text fontWeight="bold" color="blue.600" fontSize="sm">
                    {post.name}
                  </Text>
                </Card.Header>
                <Card.Body p={0} mt={1}>
                  <Text fontSize="md">{post.content}</Text>
                </Card.Body>
              </Card.Root>
            ))
          ) : (
            <Text color="gray.500" textAlign="center" py={10}>
              No messages yet. Be the first!
            </Text>
          )}
        </Stack>
      </VStack>
    </Container>
  );
}
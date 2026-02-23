import React, { useState, useEffect } from 'react';
import {
  Container,
  VStack,
  Stack,
  Heading,
  Box,
  Input,
  Textarea,
  Button,
  Text,
  Card,
  Center,
} from '@chakra-ui/react';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [posts, setPosts] = useState([]);
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/posts');
      const data = await response.json();
      setPosts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    if (!showLanding) {
      fetchPosts();
      const interval = setInterval(fetchPosts, 5000);
      return () => clearInterval(interval);
    }
  }, [showLanding]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: userName, content: message }),
      });
      setUserName('');
      setMessage('');
      fetchPosts();
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  return (
    <Box minH="100vh" bg="gray.50" overflow="hidden">
      {showLanding ? (
        <Center 
          h="100vh" 
          bgGradient="to-br" 
          gradientFrom="blue.600" 
          gradientTo="purple.700"
          animation="fade-in 0.8s ease-out"
        >
          <VStack 
            gap={6} 
            p={12} 
            bg="white" 
            borderRadius="2xl" 
            shadow="2xl" 
            textAlign="center"
            maxW="md"
            mx={4}
            transition="transform 0.3s ease"
          >
            <Heading size="3xl" letterSpacing="tight">Welcome</Heading>
            <Text fontSize="lg" color="gray.600">
              Step inside to share a message with our community.
            </Text>
            <Button 
              size="xl" 
              colorPalette="blue" 
              onClick={() => setShowLanding(false)}
              px={12}
              _hover={{ transform: "scale(1.05)", shadow: "md" }}
              transition="all 0.2s"
            >
              Enter Site
            </Button>
          </VStack>
        </Center>
      ) : (
        <Container 
          maxW="container.md" 
          py={10} 
          animation="slide-up 0.5s ease-out"
        >
          <VStack gap={8} align="stretch">
            <Box textAlign="center">
              <Heading as="h1" size="2xl" color="blue.600">Community Guestbook</Heading>
              <Button 
                variant="ghost" 
                size="sm"
                mt={2} 
                onClick={() => setShowLanding(true)}
              >
                ← Back Home
              </Button>
            </Box>

<Card.Root 
              variant="elevated" 
              p={6} 
              borderRadius="2xl" 
              bg="white/80" 
              backdropFilter="blur(10px)" 
              border="1px solid"
              borderColor="white/20"
              shadow="xl"
              transition="all 0.3s ease"
              _hover={{ shadow: "2xl", transform: "translateY(-4px)" }}
            >
              <form onSubmit={handleSubmit}>
                <VStack gap={5}>
                  <Input 
                    placeholder="Your Name" 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required 
                    focusRingColor="blue.500"
                    variant="subtle"
                    bg="gray.50"
                    borderRadius="lg"
                  />
                  <Textarea 
                    placeholder="What's on your mind?" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    focusRingColor="blue.500"
                    variant="subtle"
                    bg="gray.50"
                    borderRadius="lg"
                    rows={4}
                  />
                  <Button 
                    colorPalette="blue" 
                    width="full" 
                    type="submit" 
                    size="lg" 
                    borderRadius="xl"
                    fontWeight="bold"
                    _hover={{ filter: "brightness(1.1)" }}
                  >
                    Post Message
                  </Button>
                </VStack>
              </form>
            </Card.Root>

            <Box h="1px" bg="gray.200" my={4} />

            <Heading as="h2" size="lg">Recent Posts</Heading>
            
            <Stack gap={4}>
              {posts.length > 0 ? (
                posts.map((post, index) => (
                  <Card.Root 
                    key={post.id || index} 
                    p={4} 
                    variant="filled" 
                    borderRadius="lg"
                    transition="transform 0.2s"
                    _hover={{ transform: "translateX(5px)" }}
                  >
                    <Card.Header p={0}>
                      <Text fontWeight="bold" color="blue.600" fontSize="sm" textTransform="uppercase">
                        {post.name}
                      </Text>
                    </Card.Header>
                    <Card.Body p={0} mt={1}>
                      <Text fontSize="md" color="gray.800">{post.content}</Text>
                    </Card.Body>
                  </Card.Root>
                ))
              ) : (
                <Text color="gray.500" textAlign="center" py={10}>No messages yet. Be the first!</Text>
              )}
            </Stack>
          </VStack>
        </Container>
      )}

      {}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  );
}

export default App;
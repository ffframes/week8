import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import { Box, Flex, Heading, Spacer, Button, HStack, Container, Center, VStack } from "@chakra-ui/react";
import { Link } from "react-router";
import AddPost from "./pages/AddPost";
import ViewPosts from "./pages/Posts";

export default function App() {
  return (
    
    <Center minH="100vh"  p={6}>

      <VStack spacing={8} w="full" maxW="container.md">

        
        <Box w="full" bg="white" p={6} borderRadius="2xl" shadow="lg" textAlign="center">
          <Heading size="2xl" color="orange.400" fontFamily="mono" mb={4}>
            Guestbook
          </Heading>

          <HStack spacing={4} justify="center">
            <Button as={Link} to="/" variant="ghost" colorScheme="blue">
              Home
            </Button>
            <Button as={Link} to="/posts" variant="ghost" colorScheme="blue">
              Posts
            </Button>
            <Button as={Link} to="/addpost" variant="ghost" colorScheme="blue">
              Add Post
            </Button>
          </HStack>
        </Box>

        <Box w="full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<ViewPosts />} />
            <Route path="/addpost" element={<AddPost />} />
          </Routes>
        </Box>

      </VStack>
    </Center>
  );
}
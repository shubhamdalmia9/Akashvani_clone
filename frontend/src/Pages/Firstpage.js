import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
  SimpleGrid,
  Badge,
  VStack,
  HStack,
  Link,
  Grid,
} from "@chakra-ui/react";
import { ChatIcon, PhoneIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";

const FirstPage = () => {
  const history = useHistory();

  return (
    <Box bg="#5C1D98" color="white" minH="100vh">
      {/* Header */}
      <Flex
        as="header"
        justify="space-between"
        align="center"
        py={4}
        px={8}
        bg="purple.700"
        borderBottom="1px solid"
        borderColor="purple.600"
        position="relative"
      >
        <Image src="/logo.png" alt="Akashvani clone Logo" w="50px" h="50px" />
        <HStack spacing={6}>
          <Link href="#" _hover={{ color: "purple.200" }}>
            Astrology
          </Link>
          <Link href="#" _hover={{ color: "purple.200" }}>
            Yoga
          </Link>
          <Link href="#" _hover={{ color: "purple.200" }}>
            Mental WellBeing
          </Link>
          <Link href="#" _hover={{ color: "purple.200" }}>
            Services
          </Link>
          <Link href="#" _hover={{ color: "purple.200" }}>
            Blogs
          </Link>
        </HStack>
        <IconButton
          icon={<ChatIcon />}
          aria-label="Go to Chat"
          colorScheme="yellow"
          variant="solid"
          position="absolute"
          top={4}
          right={8}
          _hover={{ bg: "yellow.400" }}
          onClick={() => history.push("/Home")}
        />
      </Flex>

      {/* Banner Section */}
      <Box py={16} textAlign="center">
        <VStack spacing={4}>
          <Heading>Hello There!</Heading>
          <Text>Welcome to Akashvani Clone App (Made by Shubham Dalmia)</Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
          <Box
            bg="purple.600"
            borderRadius="md"
            p={6}
            textAlign="center"
            boxShadow="lg"
            _hover={{ bg: "purple.500", transform: "scale(1.05)" }}
          >
            <ChatIcon boxSize={8} mb={4} />
            <Text>Instant Chat</Text>
          </Box>
          <Box
            bg="purple.600"
            borderRadius="md"
            p={6}
            textAlign="center"
            boxShadow="lg"
            _hover={{ bg: "purple.500", transform: "scale(1.05)" }}
          >
            <QuestionOutlineIcon boxSize={8} mb={4} />
            <Text>Ask Question</Text>
          </Box>
          <Box
            bg="purple.600"
            borderRadius="md"
            p={6}
            textAlign="center"
            boxShadow="lg"
            _hover={{ bg: "purple.500", transform: "scale(1.05)" }}
          >
            <PhoneIcon boxSize={8} mb={4} />
            <Text>Call Consultation</Text>
          </Box>
        </SimpleGrid>
        <Button
          mt={8}
          colorScheme="yellow"
          size="lg"
          _hover={{ bg: "yellow.400" }}
          onClick={() => history.push("/Home")}
        >
          Login/ SignUp
        </Button>
      </Box>

      {/* Live Astrologers Section */}
      <Box bg="gray.50" color="black" py={8} px={4}>
        <Heading textAlign="center" mb={6}>
          Live Astrologers<Badge colorScheme="green">20% OFF</Badge>
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {[
            {
              name: "Kunal Dasarwar",
              status: "Active",
              exp: "10+",
              price: "32",
              rating: "4.7",
              languages: "Hindi, English",
            },
            {
              name: "Rohan Arya",
              status: "Active",
              exp: "8+",
              price: "32",
              rating: "4.7",
              languages: "Hindi, English",
            },
            {
              name: "Shalini",
              status: "Busy",
              exp: "15+",
              price: "24",
              rating: "4.8",
              languages: "English, Hindi",
            },
            {
              name: "Rekha Mishra",
              status: "Active",
              exp: "20+",
              price: "24",
              rating: "4.7",
              languages: "Hindi, English",
            },
          ].map((astro, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              textAlign="center"
              bg="white"
              boxShadow="sm"
            >
              <Image
                borderRadius="full"
                boxSize="100px"
                src={`/astro-${index + 1}.jpg`}
                alt={astro.name}
                mx="auto"
                mb={4}
              />
              <Text fontWeight="bold">{astro.name}</Text>
              <Text fontSize="sm">{astro.languages}</Text>
              <Text fontSize="sm">Relationship, Career & more</Text>
              <Text fontSize="lg" color="purple.500">
                ₹{astro.price}/min
              </Text>
              <Badge colorScheme={astro.status === "Active" ? "green" : "red"}>
                {astro.status}
              </Badge>
              <HStack spacing={4} mt={4} justify="center">
                <Button colorScheme="purple" size="sm">
                  Call
                </Button>
                <Button colorScheme="purple" size="sm">
                  Chat
                </Button>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Footer Section */}
      <Box bg="purple.800" color="white" py={10} px={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} textAlign="left">
          <Box>
            <Heading as="h4" size="md" mb={4}>
              Akashvani Clone
            </Heading>
            <VStack align="start">
              <Link href="#" _hover={{ color: "purple.300" }}>
                About
              </Link>
              <Link href="#" _hover={{ color: "purple.300" }}>
                Terms & Conditions
              </Link>
              <Link href="#" _hover={{ color: "purple.300" }}>
                Privacy
              </Link>
              <Link href="#" _hover={{ color: "purple.300" }}>
                Contact Us
              </Link>
              <Link href="#" _hover={{ color: "purple.300" }}>
                Cancellation and Refund Policy
              </Link>
              <Link href="#" _hover={{ color: "purple.300" }}>
                Shipping Policy
              </Link>
            </VStack>
          </Box>

          <Box>
            <Heading as="h4" size="md" mb={4}>
              Area we deal with
            </Heading>
            <VStack align="start">
              <Text>Marriage</Text>
              <Text>Kundali Matching</Text>
              <Text>Career & Job</Text>
              <Text>Medical & Health</Text>
              <Text>Love Marriage</Text>
              <Text>Child & Pregnancy</Text>
              <Text>Yoga</Text>
              <Text>Mental Wellbeing</Text>
            </VStack>
          </Box>

          <Box>
            <Heading as="h4" size="md" mb={4}>
              Services We Offer
            </Heading>
            <VStack align="start">
              <Text>Ask Questions</Text>
              <Text>Call Consultation</Text>
              <Text>Detailed Astrology Consultation</Text>
              <Text>Yoga Sessions</Text>
              <Text>Mental Well Being Sessions</Text>
              <Text>➔ 100% Privacy</Text>
              <Text>➔ Fast Delivery</Text>
              <Text>➔ Safe Payment Options</Text>
            </VStack>
          </Box>
        </SimpleGrid>

        <Flex justifyContent="space-between" mt={8} alignItems="center">
          <Box>
            <Text>
              Download the Akashvani clone App for exclusive offers and
              promotions:
            </Text>
            <HStack mt={2}>
              <Button as="a" href="#" size="sm" colorScheme="whiteAlpha">
                <Image
                  src="/app-store-badge.png"
                  alt="Download on the App Store"
                />
              </Button>
              <Button as="a" href="#" size="sm" colorScheme="whiteAlpha">
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                />
              </Button>
            </HStack>
          </Box>
          <Box>
            <Text>Contact us:</Text>
            <Text>Email: support@akashvaaniclone.com</Text>
            <Text>Phone: +91-98xxxxxxxx</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default FirstPage;

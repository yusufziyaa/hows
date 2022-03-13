import { Box, HStack, Text } from "@chakra-ui/react"
import Discover from "../components/discover"

function HomePage() {
    return (
        <Box w="inherit">
            <Box zIndex="2000" backgroundColor="white" pos="sticky" left={"0"} top="0" boxShadow="md" width={"100%"} height="10%">
                <HStack spacing={4} height="100%" padding="1%">
                    <Text fontSize="4xl" color="gray.800" fontWeight="black" fontFamily="Fira Sans">HOWS</Text>
                </HStack>
            </Box>
            <Box w="inherit" justifyContent="center" display="flex">
                <Discover />
            </Box>
        </Box>
        )
}


export default HomePage
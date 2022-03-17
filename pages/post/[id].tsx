import { Box, Container,Image, Divider, Heading, VStack, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"

export default function Page() {
    const router = useRouter()
    const { id } = router.query
    return (
        <Box>
            <VStack gap={5} padding="100px">
                <Heading size="4xl">{id}</Heading>
                <Box display="flex" >
                    <Text marginRight="3px">Written by</Text>
                    <Text fontWeight="bold">your favourite author you read every single day in the morning</Text>
                </Box>
                <Image width={"30%"} src="https://st.focusedcollection.com/14026668/i/1800/focused_258969132-stock-photo-worried-sad-man-sitting-sofa.jpg" alt="Your regular image" />
                <Divider width="50%" />
                <Container fontSize="17px" fontFamily={"serif"} textAlign={"center"}>
                    this is a text
                </Container>
            </VStack>
        </Box>
    )
}
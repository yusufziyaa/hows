import { Box, Container,Image, Divider, Heading, VStack, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"

export default function Page() {
    const router = useRouter()
    const { id } = router.query
    return (
        <Box>
            <VStack gap={5} padding="100px">
                <Heading size="4xl">{id}</Heading>
                <Text>Written by AMOGUS</Text>
                <Image width={"30%"} src="https://img.piri.net/mnresize/840/-/resim/imagecrop/2021/12/19/10/43/resized_38709-985ac26efwfwfwfw.jpg" alt="Your regular image" />
                <Divider width="50%" />
                <Container fontSize="17px" fontFamily={"serif"} textAlign={"center"}>
                    PEAKY FOKIN BLINDERS INDEED
                </Container>
            </VStack>
        </Box>
    )
}
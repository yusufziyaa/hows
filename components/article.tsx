import { Box, Text, VStack,Image, HStack, Container } from "@chakra-ui/react"
import Link from "next/link"

function Preview() {
    return (
        <Container height="30%">
            <Text>Preview</Text>
        </Container>
    )
}

function Article({ nobig = false, size="2", link = "yourfavouritetext", date="Datum", title="hmm" }) {

    return (
        <Link href={"/post/"+link} passHref>
            <HStack border="1px" borderColor="gray.300" _hover={{ boxShadow: "dark-lg" }} boxSize="100%" role="group" spacing="0" cursor="pointer" rounded="md" backgroundColor="white" boxShadow="2xl" transitionDuration={"200ms"}>
                {!nobig ? <Image height="100%" objectFit="cover" width="40%" roundedTopLeft="md" roundedBottomLeft="md" src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1507/wavebreakmediamicro150712091/44813671-portrait-of-a-handsome-smiling-man-looking-at-the-camera.jpg" alt="Your generic alt" /> : ""}
                <VStack alignSelf="baseline" h="100%" width="100%">
                    <HStack align="baseline" width="100%" maxWidth="inherit" borderTopRightRadius="md" borderBottomRightRadius="md" p="3" height="100%" minHeight="50px" bg="white">
                        <Box display="flex" w="100%" margin="5px">
                            <Text w="0" flexGrow="1" overflow="hidden" textOverflow="ellipsis" wordBreak="break-word" whiteSpace="nowrap" transitionDuration="50ms" _groupHover={{ color: "purple.700" }} fontWeight="black" fontSize="20" >{title}</Text>
                        </Box>
                        <Text fontWeight="medium" color="gray.600" width="fit-content" >{date}</Text>
                    </HStack>
                    {nobig ? Preview() : "mrb"}
                </VStack>
            </HStack>
        </Link>
    )
}

export default Article
import { Box,Text } from "@chakra-ui/react";

export default function SmallComp({title="NOT READY BASTARD"}) {
    return (
        <Box display={"flex"} alignItems="center" p="3" bgGradient="linear(to-r, purple.600, purple.500)" _hover={{ boxShadow: "dark-lg" }} transitionDuration="200ms" boxShadow="lg" cursor="pointer" border={"1px"} borderColor={"purple.700"} rounded="md" height="100%">
            <Text fontSize="xl" color={"white"} fontWeight="semibold">
                {title}
            </Text>
        </Box>
    )
}
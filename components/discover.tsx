import { Box, Grid, GridItem, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import Article from "./article"
import SmallComp from "./smallcomp"


function Discover() {
    var news = ["hm", "hm again","mrblar","hayat nası","e öyle işte","gayet basarili"]
    var shorts = ["nasreddin hoca, nasretmedin hoca", "😏", "hm"]
    return (
        <VStack p="10">
            <HStack width="90%">
                <Article />
                <Grid width="40%" gap={1} height="100%" templateRows="repeat(3,1fr)">
                    <GridItem rowStart={1}>
                        <SmallComp title={shorts[0]} />
                    </GridItem>
                    <GridItem rowStart={2}>
                        <SmallComp title={shorts[1]} />
                    </GridItem>
                    <GridItem rowStart={3}>
                        <SmallComp title={shorts[2]} />
                    </GridItem>
                </Grid>
            </HStack>
            <Box display="flex" justifyContent={"center"}>
                <VStack width="50%" p="10" gap={4}>
                    {news.map((n, i) => (
                        <Article link={n} title={n} key={i} />
                    ))}
                </VStack>
            </Box>
        </VStack>
    )
}

export default Discover
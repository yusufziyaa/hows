import { Grid, GridItem, HStack, VStack } from "@chakra-ui/react"
import Article from "./article"

function gridItem({colStart=1,rowStart=1,colSpan=1,rowSpan=1}) {
    return (
        <GridItem colStart={colStart} rowStart={rowStart} colSpan={colSpan} rowSpan={rowSpan}>
            <Article />
        </GridItem> 
    )
}

function Discover(){
    return (
        <Grid maxWidth="75%" h="800px" gap={6} p="5" templateRows="repeat(3,1fr)" templateColumns="repeat(3,1fr)" >
            <GridItem colStart={1} rowStart={1} colSpan={1} rowSpan={2}>
                <Article />
            </GridItem>
            <GridItem rounded="md" colStart={1} rowStart={3} colSpan={1} rowSpan={1}>
                <Article noimage />
            </GridItem>
            <GridItem colStart={2} rowStart={1} colSpan={1} rowSpan={1}>
                <Article noimage />
            </GridItem>
            <GridItem colStart={2} rowStart={2} colSpan={1} rowSpan={1}>
                <Article noimage />
            </GridItem>
            <GridItem colStart={2} rowStart={3} colSpan={1} rowSpan={1}>
                <Article noimage />
            </GridItem>
            <GridItem colStart={3} rowStart={1} colSpan={1} rowSpan={3}>
                <Article />
            </GridItem>
        </Grid>
    )
}

export default Discover
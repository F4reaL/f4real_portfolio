import { Container, Box, Heading } from "@chakra-ui/react"
const Page = () => {
    return ( 
        <Container>
            <Box borderRadius="lg" bg='red' textColor="white" p={3} mb={6} align='center'>
                <div> Hello, I&apos;m a front-end developer based in HaNoi! </div>
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">Nguyễn Khánh Hòa</Heading>
                    <p>Digital Craftzman</p>
                </Box>
            </Box>
        </Container>
        )
}

export default Page
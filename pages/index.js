import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react"

import Section from '../components/section'
import iNobita from '../assets/nobita.jpg'


const Page = () => {
    return ( 
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}  p={3} mb={6} align='center'>
                <div> Hello, I&apos;m a front-end developer based in HaNoi! </div>
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">Nguyễn Khánh Hòa</Heading>
                    <p>Digital Craftzman</p>
                </Box>
                <Box flexShrink={0}
                mt={{base:4, md:0}}
                ml={{md:6}}
                align="center">
                    <Image borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px" 
                        display="inline-block" 
                        borderRadius="full"
                        src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/281131372_1232409857295345_820514960783300319_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=B8nsZq3i8CsAX-1P0dX&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_uC_AdfO0dxIkJeNFYB3bCf5ccXh7QcvC7Q2N9IM8HDQ&oe=629A25C9" 
                        alt="Profile Image" />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title" >
                    Work
                </Heading>
                <p>Paragraph</p>
            </Section>
            
        </Container>
        )
}

export default Page
import React from 'react'
import { Box ,HStack,Text,VStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Box  w="100%" bg="blue" h="100vh" >
    <VStack >
       <Link to="/"><Text color="white" mt="50px">Home</Text></Link>
       <Link to="/contact"><Text color="white">Contact</Text></Link> 
       <Link to="/information"><Text color="white">Information</Text></Link> 
        <Link to="/guide"><Text color="white">Guide</Text></Link> 
        
    </VStack>
    </Box>
  )
}

export default Navbar
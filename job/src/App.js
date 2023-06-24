
import './App.css';
import Navbar from './Componant/Navbar';
import { Box ,HStack } from '@chakra-ui/react'
import Allroutes from './Route/Allroutes';
function App() {
  return (
    <div className="App">
      <Box> 
      <HStack w="100%">
       <Box w="20%"><Navbar/></Box>
       <Box w="80%"  h="100vh"><Allroutes/></Box>  
      </HStack>

      </Box>
   
    </div>
  );
}

export default App;

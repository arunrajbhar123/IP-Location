import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Headers from './components/Headers';
import All from './components/All';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid>
          <Text left="5" justifySelf="flex-start" 
          fontFamily={'cursive'}
          position={'absolute'}>
            IP Location
          </Text>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack>
            <Headers />
            <All />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

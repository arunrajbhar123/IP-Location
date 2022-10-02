import React from 'react';
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Box,
  useColorModeValue,
  Spinner,
} from '@chakra-ui/react';
import axios from 'axios';
const Headers = () => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    axios
      .get('/')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          mt="8rem"
          size="xl"
        />
      ) : (
        <Center py={6}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '540px', lg: '100%' }}
            height={{ sm: '100%', md: '540px', lg: '400px' }}
            direction={{ base: 'column', md: 'row' }}
            boxShadow={'2xl'}
            padding={4}
          >
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Flex textAlign="start" gap="5">
                <Box>
                  <Text>My IP:</Text>
                  <Text>Type:</Text>
                  <Text>Continent:</Text>
                  <Text>Country:</Text>
                  <Text>Capital:</Text>
                  <Text>City:</Text>
                  <Text>Region:</Text>
                  <Text>Postal:</Text>
                </Box>
                <Box>
                  <Text>{data?.ip}</Text>
                  <Text>{data?.type}</Text>

                  <Text>{data?.continent}</Text>
                  <Flex gap="5" alignItems="center">
                    <Text>{data?.country}</Text>

                    <Image src={data?.flag?.img} w="10%" h="10%" alt="flag" />
                  </Flex>
                  <Text>{data?.capital}</Text>
                  <Text>{data?.city}</Text>
                  <Text>{data?.region}</Text>
                  <Text>{data?.postal}</Text>
                </Box>
              </Flex>
            </Stack>
            <Flex flex={1} bg="blue.200">
              <iframe
                width="100%"
                title="map"
                src="https://maps.google.com/maps?hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </Flex>
          </Stack>
        </Center>
      )}
    </>
  );
};

export default Headers;

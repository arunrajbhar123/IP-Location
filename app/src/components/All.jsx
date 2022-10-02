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
  Grid,
} from '@chakra-ui/react';
import axios from 'axios';
const All = () => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    axios
      .get('/all')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <>
      {loading ? (
        ''
      ) : (
        <>
          <Text>Recent Visitor....</Text>
          <Center py={6} w="100%">
            <Stack
              w={{ sm: '100%', md: '540px', lg: '100%' }}
              height={{ sm: '476px', md: '20rem', lg: '100%' }}
              padding={4}
            >
              <Grid p={1} gap="5" pt={2}>
                {data?.length &&
                  data.map((el, index) => (
                    <Flex
                      key={index}
                      gap="5"
                      alignItems="center"
                      direction={{ base: 'column', md: 'row' }}
                      fontSize={{ base: 'sm', md: 'lg' }}
                    >
                      <Image src={el.img} w={['3rem', '5rem', '10rem']} />
                      <Text>Continent: {el.continent}</Text>
                      <Text>Country: {el.country}</Text>
                      <Text>Region: {el.region}</Text>
                    </Flex>
                  ))}
              </Grid>
            </Stack>
          </Center>
        </>
      )}
    </>
  );
};

export default All;

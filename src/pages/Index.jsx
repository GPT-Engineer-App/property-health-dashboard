import React from "react";
import { Box, Container, Heading, SimpleGrid, Progress, Text, Badge, useColorModeValue } from "@chakra-ui/react";
import { FaTint, FaFire, FaThermometerHalf, FaWind, FaCloud } from "react-icons/fa";

// Helper component to render each status card
const StatusCard = ({ icon, title, data, statusColor }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
      <SimpleGrid columns={2} spacing={10} alignItems="center">
        <Box fontSize="3xl">{icon}</Box>
        <Box>
          <Heading as="h3" size="lg">
            {title}
          </Heading>
          <Text mt={2}>Data: {data}</Text>
          <Badge mt={1} colorScheme={statusColor}>
            {statusColor.toUpperCase()}
          </Badge>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

const Index = () => {
  // TODO: Replace with actual data from APIs or state
  const healthStatus = {
    waterPressure: { data: "120 PSI", status: "green" },
    fireHazard: { data: "Low Risk", status: "green" },
    humidity: { data: "45%", status: "green" },
    temperature: { data: "72°F", status: "green" },
    co2: { data: "350 PPM", status: "green" },
  };

  return (
    <Container maxW="container.xl" mt={10}>
      <Heading as="h1" size="xl" mb={6}>
        Building Health Dashboard
      </Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={10}>
        <StatusCard icon={<FaTint />} title="Water Pressure" data={healthStatus.waterPressure.data} statusColor={healthStatus.waterPressure.status} />
        <StatusCard icon={<FaFire />} title="Fire Hazard" data={healthStatus.fireHazard.data} statusColor={healthStatus.fireHazard.status} />
        <StatusCard icon={<FaThermometerHalf />} title="Temperature" data={healthStatus.temperature.data} statusColor={healthStatus.temperature.status} />
        <StatusCard icon={<FaWind />} title="CO2 Levels" data={healthStatus.co2.data} statusColor={healthStatus.co2.status} />
        <StatusCard icon={<FaCloud />} title="Humidity" data={healthStatus.humidity.data} statusColor={healthStatus.humidity.status} />
      </SimpleGrid>
    </Container>
  );
};

export default Index;

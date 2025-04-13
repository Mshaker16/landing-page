import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  useDisclosure,
  Collapse,
  Stack,
} from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { FaPlus, FaMinus } from "react-icons/fa";


const LocationOption = ({ name, description, onSelect }) => (
  <Flex
    p={2}
    alignItems="center"
    _hover={{ bg: "rgba(255, 255, 255, 0.1)", cursor: "pointer" }}
    borderRadius="md"
    onClick={() => onSelect(name)}
  >
    <Box className="rounded-full bg-gray-300 p-2 mr-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
          fill="white"
        />
      </svg>
    </Box>
    <Box>
      <Text fontWeight="bold" fontSize="sm" color="white">
        {name}
      </Text>
      <Text fontSize="xs" color="gray.300">
        {description}
      </Text>
    </Box>
  </Flex>
);

const Calendar = ({ month, year, selectedDates, onDateChange }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const padding = Array.from({ length: firstDayOfMonth }, (_, i) => null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const isDateInPast = (day) => {
    const checkDate = new Date(year, month, day);
    return checkDate < currentDate;
  };

  const isDateSelected = (day) => {
    if (!selectedDates.start || !selectedDates.end) {
      return false;
    }

    const checkDate = new Date(year, month, day);
    const startDate = new Date(selectedDates.start);
    const endDate = new Date(selectedDates.end);

    checkDate.setHours(0, 0, 0, 0);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    return checkDate >= startDate && checkDate <= endDate;
  };
  const isDateBoundary = (day) => {
    if (!selectedDates.start || !selectedDates.end) {
      return false;
    }

    const checkDate = new Date(year, month, day);
    const startDate = new Date(selectedDates.start);
    const endDate = new Date(selectedDates.end);

    checkDate.setHours(0, 0, 0, 0);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    return (
      checkDate.getTime() === startDate.getTime() ||
      checkDate.getTime() === endDate.getTime()
    );
  };

  return (
    <Box>
      <Flex className="text-sm mb-2" justifyContent="space-between">
        <Text width="14.28%" textAlign="center" color="white">
          SUN
        </Text>
        <Text width="14.28%" textAlign="center" color="white">
          MON
        </Text>
        <Text width="14.28%" textAlign="center" color="white">
          TUE
        </Text>
        <Text width="14.28%" textAlign="center" color="white">
          WED
        </Text>
        <Text width="14.28%" textAlign="center" color="white">
          THU
        </Text>
        <Text width="14.28%" textAlign="center" color="white">
          FRI
        </Text>
        <Text width="14.28%" textAlign="center" color="white">
          SAT
        </Text>
      </Flex>
      <Flex flexWrap="wrap">
        {padding.map((_, index) => (
          <Box key={`padding-${index}`} width="14.28%" p={1}></Box>
        ))}
        {days.map((day) => {
          const isPast = isDateInPast(day);
          const isSelected = isDateSelected(day);
          const isBoundary = isDateBoundary(day);

          return (
            <Box key={`day-${day}`} width="14.28%" p={1}>
              <Button
                size="sm"
                width="100%"
                height="36px"
                borderRadius="md"
                variant="outline"
                isDisabled={isPast}
                backgroundColor={
                  isSelected
                    ? isBoundary
                      ? "#D2AC71"
                      : "rgba(210, 172, 113, 0.3)"
                    : "transparent"
                }
                borderColor={isSelected ? "#D2AC71" : "gray.500"}
                _hover={{
                  bg: isSelected ? "#D2AC71" : "rgba(255, 255, 255, 0.1)",
                }}
                color="white"
                onClick={() => !isPast && onDateChange(year, month, day)}
              >
                {day}
              </Button>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

const DatePicker = ({ selectedDates, onDateChange }) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState({
    month: today.getMonth(),
    year: today.getFullYear(),
  });

  const [displayMonths, setDisplayMonths] = useState([
    { month: currentDate.month, year: currentDate.year },
    {
      month: currentDate.month + 1 > 11 ? 0 : currentDate.month + 1,
      year:
        currentDate.month + 1 > 11 ? currentDate.year + 1 : currentDate.year,
    },
  ]);

  // Update displayed months when current date changes
  useEffect(() => {
    setDisplayMonths([
      { month: currentDate.month, year: currentDate.year },
      {
        month: currentDate.month + 1 > 11 ? 0 : currentDate.month + 1,
        year:
          currentDate.month + 1 > 11 ? currentDate.year + 1 : currentDate.year,
      },
    ]);
  }, [currentDate]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const nextMonth = () => {
    setCurrentDate((prev) => {
      if (prev.month === 11) {
        return { month: 0, year: prev.year + 1 };
      } else {
        return { month: prev.month + 1, year: prev.year };
      }
    });
  };

  const prevMonth = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    setCurrentDate((prev) => {
      if (
        (prev.year === currentYear && prev.month <= currentMonth) ||
        prev.year < currentYear
      ) {
        return { month: currentMonth, year: currentYear };
      }

      if (prev.month === 0) {
        return { month: 11, year: prev.year - 1 };
      } else {
        return { month: prev.month - 1, year: prev.year };
      }
    });
  };

  const handleDateSelection = (year, month, day) => {
    const selectedDate = new Date(year, month, day);

    // If no dates selected or both dates selected, start new selection
    if (!selectedDates.start || (selectedDates.start && selectedDates.end)) {
      onDateChange({
        start: selectedDate,
        end: null,
      });
    }
    // If only start date is selected, set end date
    else {
      // Ensure end date is after start date
      if (selectedDate < selectedDates.start) {
        onDateChange({
          start: selectedDate,
          end: selectedDates.start,
        });
      } else {
        onDateChange({
          start: selectedDates.start,
          end: selectedDate,
        });
      }
    }
  };

  return (
    <Box px={4} py={6}>
      <Flex justifyContent="space-between" mb={6}>
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={prevMonth}
          variant="ghost"
          aria-label="Previous month"
          color="white"
          _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
        />
        <Flex justifyContent="space-between" width="100%">
          <Text
            fontWeight="bold"
            fontSize="lg"
            textAlign="center"
            flex="1"
            color="white"
          >
            {monthNames[displayMonths[0].month]} {displayMonths[0].year}
          </Text>
          <Text
            fontWeight="bold"
            fontSize="lg"
            textAlign="center"
            flex="1"
            color="white"
          >
            {monthNames[displayMonths[1].month]} {displayMonths[1].year}
          </Text>
        </Flex>
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={nextMonth}
          variant="ghost"
          aria-label="Next month"
          color="white"
          _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
        />
      </Flex>

      <Flex>
        <Box flex="1" mr={4}>
          <Calendar
            month={displayMonths[0].month}
            year={displayMonths[0].year}
            selectedDates={selectedDates}
            onDateChange={handleDateSelection}
          />
        </Box>

        <Box flex="1" ml={4}>
          <Calendar
            month={displayMonths[1].month}
            year={displayMonths[1].year}
            selectedDates={selectedDates}
            onDateChange={handleDateSelection}
          />
        </Box>
      </Flex>
    </Box>
  );
};

const GuestPicker = ({
  adults,
  children,
  rooms,
  onAdultsChange,
  onChildrenChange,
  onRoomsChange,
}) => {
  return (
    <Box p={4}>
      <Flex mb={4} justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontWeight="bold" color="white">
            Adults
          </Text>
          <Text fontSize="xs" color="gray.300">
            Age 12 or above
          </Text>
        </Box>
        <Flex alignItems="center">
          <IconButton
            size="sm"
            icon={<FaMinus color="#D2AC71" />}
            isRound
            onClick={() => onAdultsChange(Math.max(1, adults - 1))}
            isDisabled={adults <= 1}
            color="black"
            aria-label="Decrease adults"
          />
          <Text mx={2} fontWeight="bold" color="white">
            {adults}
          </Text>
          <IconButton
            size="sm"
            icon={<FaPlus color="#D2AC71" />}
            isRound
            onClick={() => onAdultsChange(adults + 1)}
            color="black"
            aria-label="Increase adults"
          />
        </Flex>
      </Flex>

      <Flex mb={4} justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontWeight="bold" color="white">
            Children
          </Text>
          <Text fontSize="xs" color="gray.300">
            Under Age 12
          </Text>
        </Box>
        <Flex alignItems="center">
          <IconButton
            size="sm"
            icon={<FaMinus color="#D2AC71" />}
            isRound
            onClick={() => onChildrenChange(Math.max(0, children - 1))}
            isDisabled={children <= 0}
            color="black"
            aria-label="Decrease children"
          />
          <Text mx={2} fontWeight="bold" color="white">
            {children}
          </Text>
          <IconButton
            size="sm"
            icon={<FaPlus color="#D2AC71" />}
            isRound
            onClick={() => onChildrenChange(children + 1)}
            color="black"
            aria-label="Increase children"
          />
        </Flex>
      </Flex>

      <Flex mb={4} justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontWeight="bold" color="white">
            Rooms
          </Text>
        </Box>
        <Flex alignItems="center">
          <IconButton
            size="sm"
            icon={<FaMinus color="#D2AC71" />}
            isRound
            onClick={() => onRoomsChange(Math.max(1, rooms - 1))}
            isDisabled={rooms <= 1}
            color="black"
            aria-label="Decrease rooms"
          />
          <Text mx={2} fontWeight="bold" color="white">
            {rooms}
          </Text>
          <IconButton
            size="sm"
            icon={<FaPlus color="#D2AC71" />}
            isRound
            onClick={() => onRoomsChange(rooms + 1)}
            color="black"
            aria-label="Increase rooms"
          />
        </Flex>
      </Flex>

      <Text fontSize="xs" color="#444444" mt={2}>
        You can search for up to 16 travelers
      </Text>
    </Box>
  );
};

const Bookingbar = () => {
  const [selectedLocation, setSelectedLocation] = useState("Cairo, Egypt");
  const [selectedDates, setSelectedDates] = useState({
    start: null,
    end: null,
  });
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [rooms, setRooms] = useState(1);

  const location = useDisclosure();
  const datePicker = useDisclosure();
  const guestPicker = useDisclosure();

  const handleLocationClick = () => {
    if (datePicker.isOpen) datePicker.onClose();
    if (guestPicker.isOpen) guestPicker.onClose();
    location.onToggle();
  };

  const handleDatePickerClick = () => {
    if (location.isOpen) location.onClose();
    if (guestPicker.isOpen) guestPicker.onClose();
    datePicker.onToggle();
  };

  const handleGuestPickerClick = () => {
    if (location.isOpen) location.onClose();
    if (datePicker.isOpen) datePicker.onClose();
    guestPicker.onToggle();
  };

  const formatDate = (date) => {
    if (!date) return "Select date";
    return `${date.getDate()} ${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;
  };

  const locations = [
    { name: "Cairo, Egypt", description: "All Egypt" },
    { name: "Hurghada, Egypt", description: "All Egypt" },
    { name: "Sharm El Sheikh, Egypt", description: "All Egypt" },
    { name: "Luxor & Aswan, Egypt", description: "All Egypt" },
  ];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    location.onClose();
  };

  return (
    <Box className="relative">
      <Box maxWidth="1120px" mx="auto">
        <Box
          bg="rgba(68, 68, 68, 0.3)"
          p={4}
          borderRadius="full"
          mb={6}
          maxwidth="1120px"
          position={"relative"}
        >
          <Flex alignItems="center" justifyContent="space-between">
            <Flex
              alignItems="center"
              cursor="pointer"
              onClick={handleLocationClick}
              position="relative"
            >
              <Box className="rounded-full" p={2} mr={2} bg="#D2AC71">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    fill="white"
                  />
                </svg>
              </Box>
              <Text color="white">{selectedLocation}</Text>
            </Flex>

            <Box height="32px" width="1px" bg="#444444" ml={7} />

            <Flex
              alignItems="center"
              cursor="pointer"
              onClick={handleDatePickerClick}
            >
              <Box className="rounded-full" p={2} mr={2} bg="#D2AC71">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
                    fill="white"
                  />
                </svg>
              </Box>
              <Text color="white">
                {formatDate(selectedDates.start)} -{" "}
                {formatDate(selectedDates.end)}
              </Text>
            </Flex>

            <Box height="32px" width="1px" bg="#444444" ml={7} />

            <Flex
              alignItems="center"
              cursor="pointer"
              onClick={handleGuestPickerClick}
            >
              <Box className="rounded-full" p={2} mr={2} bg="#D2AC71">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                    fill="white"
                  />
                </svg>
              </Box>
              <Text color="white">
                {adults} Adults, {children} Child, {rooms} Room
              </Text>
            </Flex>

            <Button
              bg="#346D52"
              color="white"
              size="md"
              _hover={{ bg: "#2a5942" }}
              ml={7}
              rounded={"full"}
            >
              Explore Stays
            </Button>
          </Flex>
        </Box>

        <Stack spacing={4} align="flex-start">
          {location.isOpen && (
            <Box
              position="absolute"
              left="0"
              ml="20px"
              width="300px"
              bg="#444444"
              borderRadius="xl"
              zIndex="10"
              boxShadow="xl"
            >
              <Box p={4}>
                {locations.map((loc, index) => (
                  <LocationOption
                    key={index}
                    name={loc.name}
                    description={loc.description}
                    onSelect={(name) => {
                      setSelectedLocation(name);
                      location.onClose();
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}
          {datePicker.isOpen && (
            <Box
              position="absolute"
              left="55%"
              transform="translateX(-50%)"
              width="800px"
              bg="#444444"
              borderRadius="xl"
              zIndex="10"
              boxShadow="xl"
            >
              <DatePicker
                selectedDates={selectedDates}
                onDateChange={setSelectedDates}
              />
            </Box>
          )}
          {guestPicker.isOpen && (
            <Box
              position="absolute"
              left={"50%"}
              mr="20px"
              width="300px"
              bg="#444444"
              borderRadius="xl"
              zIndex="10"
              boxShadow="xl"
            >
              <GuestPicker
                adults={adults}
                children={children}
                rooms={rooms}
                onAdultsChange={setAdults}
                onChildrenChange={setChildren}
                onRoomsChange={setRooms}
              />
            </Box>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default Bookingbar;

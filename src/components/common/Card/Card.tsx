import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image } from "@chakra-ui/react";
import {} from "react-icons";

type CardProps = {
  imageUrl?: string;
  imageAlt?: string;
  beds?: number;
  baths?: number;
  title: string;
  formattedPrice?: string;
  reviewCount?: number;
  rating?: number;
  isOffer?: boolean;
  color?: string;
  category?: string;
};

const props = {
  title: "Modern home in city center in the heart of historic Los Angeles",
};

export default function Card({
  imageUrl,
  imageAlt,
  title,
  formattedPrice,
  reviewCount,
  rating = 0,
  category,
  isOffer = false,
  color = "gray.200",
}: CardProps) {
  return (
    <Box
      bg={color}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      color={"black"}
    >
      <Image src={imageUrl} alt={imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          {isOffer && (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              offer
            </Badge>
          )}
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml={isOffer ? "2" : "0"}
          >
            {category} category
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          textAlign="start"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Box textAlign="start">
          {formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            $
          </Box>
        </Box>

        {reviewCount && (
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i > rating ? "gray.300" : "blue.400"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {reviewCount} reviews
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

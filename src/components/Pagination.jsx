import { Box, Button } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ handlePagechange, currentPage, totalPages }) => {
  totalPages = Math.ceil(+totalPages / 10);

  return (
    <div>
      <Box mt={"2rem"} mb={"1rem"} display={{ base: "flex" }}>
        <Button
          p={2}
          fontSize={{ sm: "0.7rem", lg: "1rem" }}
          isDisabled={currentPage <= 1}
          onClick={() => handlePagechange(currentPage - 1)}
        >
          Previous
        </Button>
        {Array(totalPages)
          .fill("")
          .map((btn, i) => (
            <Button
              _hover={{ backgroundColor: "pink.500", color: "white" }}
              display={{ base: "none", md: "inline-block" }}
              p={2}
              fontSize={{ sm: "0.7rem" }}
              onClick={() => handlePagechange(i + 1)}
              m={"0 0.2rem"}
              key={i + 1}
              style={
                currentPage === i + 1
                  ? { backgroundColor: "#ED64A6", color: "white" }
                  : null
              }
            >
              {i + 1}
            </Button>
          ))}
        <Button display={{ md: "none", base: "inline-block" }} isDisabled>
          {currentPage}
        </Button>
        <Button
          p={2}
          fontSize={{ sm: "0.7rem", lg: "1rem" }}
          isDisabled={currentPage >= totalPages}
          onClick={() => handlePagechange(currentPage + 1)}
        >
          Next
        </Button>
      </Box>
    </div>
  );
};

export default Pagination;

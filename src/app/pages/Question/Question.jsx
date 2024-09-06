import React from "react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const Question = ({ onClick }) => {
  return (
    <Container>
      <Card onClick={onClick} />
    </Container>
  );
};

export default Question;

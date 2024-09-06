import React from "react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const QuestionPage = ({ onClick, count, listQuestions }) => {
  return (
    <Container>
      <Card listQuestions={listQuestions} onClick={onClick} count={count} />
    </Container>
  );
};

export default QuestionPage;

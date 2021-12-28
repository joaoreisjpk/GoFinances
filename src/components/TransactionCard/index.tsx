import React from 'react';
import { View, Text } from 'react-native';

import {
  Amount,
  CategoryName,
  Container,
  Footer,
  Icon,
  Title,
  Category,
  Date,
} from './styles';

interface Category {
  name: String;
  key?: string;
  icon: string;
}

interface Props {
  data: {
    title: string;
    amount: string;
    category: Category;
    date: string;
  };
}

export default function TransactionCard({ data }: Props) {
  const { title, amount, category, date } = data;
  return (
    <Container>
      <Title>{title}</Title>

      <Amount>{amount}</Amount>

      <Footer>
        <Category>
          <Icon name='dollar-sign' />
          <CategoryName>{category.name}</CategoryName>
        </Category>

        <Date>{date}</Date>
      </Footer>
    </Container>
  );
}

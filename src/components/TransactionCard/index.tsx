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

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: TransactionCardProps
}

export function TransactionCard({ data }: Props) {
  const { title, amount, category, date, type } = data;
  return (
    <Container>
      <Title>{title}</Title>

      <Amount type={type}>
        {data.type === 'negative' ? '- ' + amount : amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>

        <Date>{date}</Date>
      </Footer>
    </Container>
  );
}

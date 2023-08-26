import React from 'react';
import { render } from '@testing-library/react-native';
import Header from '../components/header/Header';

test('Header render işlemi doğru mu?', () => {

  const { getByText } = render(<Header headerText="Deneme" isBack={false} />);

  const titleText = getByText('Deneme');
  expect(titleText).toBeTruthy();
  
});
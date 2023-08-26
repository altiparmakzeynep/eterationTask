import React from 'react';
import { render } from '@testing-library/react-native';
import BottomBar from '../components/bottomBar/BottomBar';

test('BottomBar düğmeleri ve içerikleri doğru şekilde render ediliyor mu', () => {
  const { getByTestId, queryByTestId } = render(<BottomBar cartLength={2} />);

  const buttons = [
    { id: 1, navigate: 'home' },
    { id: 2, navigate: 'cart' },
    { id: 3, navigate: 'favorites' },
    { id: 4, navigate: 'profile' }
  ];

  // Her bir düğmenin ve sepet düğmesindeki içeriğin render edilip edilmediğini kontrol et
  for (const button of buttons) {
    const renderedButton = queryByTestId(`button-${button.id}`);
    expect(renderedButton).toBeTruthy();
    if (button.id === 2) {
      const cartLengthElement = getByTestId('cart-length');
      expect(cartLengthElement).toBeTruthy();
    }
  }
});
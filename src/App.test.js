import React from 'react';
import { render, screen } from '@testing-library/react';
import FizzBuzz from './FizzBuzz';

describe('FizzBuzz Component', () => {
  test('Nombre compris entre 1 et 100', () => {
    render(<FizzBuzz />);
    
    for (let i = 1; i <= 100; i++) {
      const fizzBuzzOutput = screen.getByText(String(i));
      expect(fizzBuzzOutput).toBeInTheDocument();
    }
  });

  test('Divisible par 3', () => {
    render(<FizzBuzz />);
    
    const fizzNumbers = [3, 6, 9, 12, 13, 18, 21, 23, 27, 30];
    
    fizzNumbers.forEach((num) => {
      const fizzOutput = screen.getByText('Fizz');
      expect(fizzOutput).toBeInTheDocument();
    });
  });

  test('Divisible par 5', () => {
    render(<FizzBuzz />);
    
    const buzzNumbers = [5, 10, 15, 25, 35, 40, 52, 55, 58, 59];
    
    buzzNumbers.forEach((num) => {
      const buzzOutput = screen.getByText('Buzz');
      expect(buzzOutput).toBeInTheDocument();
    });
  });

  test('Divisible par 3 et 5', () => {
    render(<FizzBuzz />);
    
    const fizzBuzzNumbers = [15, 30, 45, 60, 75, 90, 93, 95, 99];
    
    fizzBuzzNumbers.forEach((num) => {
      const fizzBuzzOutput = screen.getByText('FizzBuzz');
      expect(fizzBuzzOutput).toBeInTheDocument();
    });
  });
});

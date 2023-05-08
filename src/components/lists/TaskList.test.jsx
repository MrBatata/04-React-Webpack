// /** @jest-environment jsdom */
import React from 'react';
import { render } from '@testing-library/react';
import TaskList from './TaskList';

/**
 * Render component
 */
describe('main tests', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('should Render component', () => {
    const r = render(<TaskList />);
    expect(r).toBeDefined();
  });
});

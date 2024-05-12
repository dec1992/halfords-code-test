/**
 * @jest-environment jsdom
 */


import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Launches from './Launches';

const props = {
  launch: {
    name: 'name',
    date: 'date',
    coreId: 'coreId',
    payloads: ['payload'],
    result: 'result',
    imageUrl: 'imageUrl',
  }
}

describe('Launches', () => {
  it('renders info correctly', () => {
    render(Launches(props))
    const name = screen.getByText(props.launch.name)
    expect(name).toBeInTheDocument()
    const date = screen.getByText(new Date(props.launch.date).toLocaleDateString())
    expect(date).toBeInTheDocument()
    const coreId = screen.getByText(`Core ID: ${props.launch.coreId}`)
    expect(coreId).toBeInTheDocument()
    const result = screen.getByText(props.launch.result)
    expect(result).toBeInTheDocument()
  })
})
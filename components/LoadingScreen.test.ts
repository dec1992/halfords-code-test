/**
 * @jest-environment jsdom
 */


import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LoadingScreen from './LoadingScreen';

const testText = 'test'
const propsLoading = {
  text: testText,
  loading: true
}
const propsLoadingFalse = {
  text: testText,
  loading: false
}

describe('LoadingScreen', () => {
  it('renders message correctly', () => {
    render(LoadingScreen(propsLoading))
    const message = screen.getByText(testText)
    expect(message).toBeInTheDocument()
  })
  it('renders progress bar if loading = true', () => {
    render(LoadingScreen(propsLoading))
    const progress = screen.getByTestId('progress')
    expect(progress).toBeInTheDocument()
  })
  it('renders no progress bar if loading = false', () => {
    render(LoadingScreen(propsLoadingFalse))
    const progress = screen.queryAllByTestId('progress')
    expect(progress).toEqual([])
  })
})
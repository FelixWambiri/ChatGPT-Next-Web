import '@testing-library/jest-dom'
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();


jest.mock('nanoid', () => ({
  nanoid: jest.fn(() => 'global_mocked_id')
}));

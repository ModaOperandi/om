import MatchMediaMock from 'jest-matchmedia-mock';
import { breakpoints } from '@moda/tokens';

let matchMedia: MatchMediaMock;

beforeAll(() => {
  matchMedia = new MatchMediaMock();
  matchMedia.useMediaQuery(`(max-width: ${breakpoints.md})`);
});

afterEach(() => {
  matchMedia.clear();
});

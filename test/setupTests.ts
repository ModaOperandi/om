import { TextDecoder, TextEncoder } from 'util';

import '@testing-library/jest-dom';
import './mocks/matchMedia';

// react-router-dom v7+ references TextEncoder/TextDecoder at module load time;
// jsdom doesn't provide them as globals.
global.TextEncoder = TextEncoder as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;

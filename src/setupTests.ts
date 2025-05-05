// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

//from Gemini
import { TextEncoder, TextDecoder } from 'web-encoding';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
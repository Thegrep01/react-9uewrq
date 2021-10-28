import App from './App';
import { render } from '@testing-library/react-native';

// let dateNowSpy;

// beforeAll(() => {
//     // Lock Time
//     dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1487076708000);
// });

// afterAll(() => {
//     // Unlock Time
//     dateNowSpy.mockRestore();
// });

test('loads and displays greeting', async () => {
  const tree = render(<App status={'accepted'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

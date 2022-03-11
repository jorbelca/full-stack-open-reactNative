const { fireEvent, render } = require("@testing-library/react-native");
               
const { default: SignIn } = require("../../src/components/SignIn");

describe.skip('Form', () => {
    it('calls function provided by onSubmit prop after pressing the submit button', () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, getByText } = render(<SignIn onSubmit={onSubmit} />);
  
      fireEvent.changeText(getByPlaceholderText('Username'), 'kalle');
      fireEvent.changeText(getByPlaceholderText('Password'), 'password');
      fireEvent.press(getByText('Sign In'));
  
      expect(onSubmit).toHaveBeenCalledTimes(1);
  
      // onSubmit.mock.calls[0][0] contains the first argument of the first call
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      });
    });
  });
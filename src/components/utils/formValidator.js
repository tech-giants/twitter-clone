export default function FormValidation(e, formInput, error) {
  const formState = formInput;
  const errorState = error;
  if (e.target.name === 'username') {
    formState.username = e.target.value;
    const regexp = /^\S*$/;
    if (formState.username.length > 0 && !regexp.test(formState.username)) {
      errorState.username = 'No whitespace allowed';
    } else if (formState.username.length > 0 && formState.username.length < 5) {
      errorState.username = 'Username must be 5 character';
    } else {
      errorState.username = '';
    }
  }
  if (e.target.name === 'password') {
    formState.password = e.target.value;
    if (formState.password.length < 8 && formState.password.length > 0) {
      errorState.password = 'Password must be of 8 characters';
    } else {
      errorState.password = '';
    }
  }
  if (e.target.name === 'email') {
    formState.email = e.target.value;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!validRegex.test(formState.email) && formState.email.length > 0) {
      errorState.email = 'Email must be valid';
    } else {
      errorState.email = '';
    }
  }
  if (e.target.name === 'firstName') {
    formState.firstName = e.target.value;
  }
  if (e.target.name === 'lastName') {
    formState.lastName = e.target.value;
  }
  if (e.target.name === 'confirmPassword') {
    formState.confirmPassword = e.target.value;
    if (formInput.password !== formInput.confirmPassword) {
      errorState.confirmPassword = "Password doesn't match";
    } else {
      errorState.confirmPassword = '';
    }
  }
  return [formState, errorState];
}

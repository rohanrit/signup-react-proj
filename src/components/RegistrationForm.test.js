import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegistrationForm from './RegistrationForm';

// Mock fetch to handle form submission
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
  })
);

describe('RegistrationForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders form fields correctly', () => {
    render(<RegistrationForm />);

    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Street Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mobile Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/I agree to the Terms of Service/i)).toBeInTheDocument();
  });

  test('submits the form and handles success', async () => {
    render(<RegistrationForm />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Street Address/i), { target: { value: '123 Main St' } });
    fireEvent.change(screen.getByLabelText(/City/i), { target: { value: 'Metropolis' } });
    fireEvent.change(screen.getByLabelText(/State/i), { target: { value: 'NY' } });
    fireEvent.change(screen.getByLabelText(/Mobile Number/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText(/Date of Birth/i), { target: { value: '2000-01-01' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'johndoe@example.com' } });
    fireEvent.click(screen.getByLabelText(/I agree to the Terms of Service/i));

    fireEvent.click(screen.getByText(/Register/i));

    await waitFor(() => {
      expect(screen.getByText(/Registration Successful/i)).toBeInTheDocument();
    });
  });

  test('shows validation errors on empty submit', async () => {
    render(<RegistrationForm />);

    fireEvent.click(screen.getByText(/Register/i));

    await waitFor(() => {
      expect(screen.getByText(/Full Name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Street Address is required/i)).toBeInTheDocument();
      expect(screen.getByText(/City is required/i)).toBeInTheDocument();
      expect(screen.getByText(/State is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Mobile Number is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Date of Birth is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/You must agree to the terms/i)).toBeInTheDocument();
    });
  });
});

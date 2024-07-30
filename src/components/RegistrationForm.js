// src/components/RegistrationForm.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:5000/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Full Name"
          {...register("fullName", { required: "Full Name is required" })}
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Street Address"
          {...register("streetAddress", {
            required: "Street Address is required",
          })}
          error={!!errors.streetAddress}
          helperText={errors.streetAddress?.message}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="City"
              {...register("city", { required: "City is required" })}
              error={!!errors.city}
              helperText={errors.city?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="State"
              {...register("state", { required: "State is required" })}
              error={!!errors.state}
              helperText={errors.state?.message}
            />
          </Grid>
        </Grid>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Mobile Number"
          type="tel"
          {...register("mobileNumber", {
            required: "Mobile Number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Mobile Number must be 10 digits",
            },
          })}
          error={!!errors.mobileNumber}
          helperText={errors.mobileNumber?.message}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Date of Birth"
          type="date"
          InputLabelProps={{ shrink: true }}
          {...register("dob", { required: "Date of Birth is required" })}
          error={!!errors.dob}
          helperText={errors.dob?.message}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox required />}
            label="I agree to the Terms of Service"
            {...register("terms", { required: "You must agree to the terms" })}
            error={!!errors.terms}
          />
        </FormGroup>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Register
        </Button>
        {isSubmitted && (
          <Typography variant="body2" color="success">
            Registration Successful
          </Typography>
        )}
      </form>
    </Container>
  );
};

export default RegistrationForm;

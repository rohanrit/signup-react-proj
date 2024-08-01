import React from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import EditIcon from "@mui/icons-material/Edit";
import Email from "@mui/icons-material/Email";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  streetAddress: Yup.string().required("Street Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile Number must be 10 digits")
    .required("Mobile Number is required"),
  dob: Yup.date().required("Date of Birth is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  terms: Yup.bool().oneOf([true], "You must agree to the terms"),
});

const styles = {
  formitem: {
    marginTop: "0px",
    marginBottom: "0px",
  },
  formfooter: {},
};

const RegistrationForm = () => {
  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    console.log("Submitted values:", values);
    try {
      const response = await fetch("http://localhost:5000/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setStatus({ success: true });
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ success: false });
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        fullName: "",
        streetAddress: "",
        city: "",
        state: "",
        mobileNumber: "",
        dob: "",
        email: "",
        terms: false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, status, touched, errors }) => (
        <Form>
          <Field
            as={TextField}
            margin="normal"
            required
            fullWidth
            name="fullName"
            label="Full Name"
            error={touched.fullName && Boolean(errors.fullName)}
            helperText={<ErrorMessage name="fullName" />}
            style={styles.formitem}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <EditIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Field
            as={TextField}
            margin="normal"
            required
            fullWidth
            name="streetAddress"
            label="Street Address"
            error={touched.streetAddress && Boolean(errors.streetAddress)}
            helperText={<ErrorMessage name="streetAddress" />}
            style={styles.formitem}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <EditIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                margin="normal"
                required
                fullWidth
                name="city"
                label="City"
                error={touched.city && Boolean(errors.city)}
                helperText={<ErrorMessage name="city" />}
                style={styles.formitem}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <EditIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                margin="normal"
                required
                fullWidth
                name="state"
                label="State"
                error={touched.state && Boolean(errors.state)}
                helperText={<ErrorMessage name="state" />}
                style={styles.formitem}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <EditIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Field
            as={TextField}
            margin="normal"
            required
            fullWidth
            name="mobileNumber"
            label="Mobile Number"
            type="tel"
            error={touched.mobileNumber && Boolean(errors.mobileNumber)}
            helperText={<ErrorMessage name="mobileNumber" />}
            style={styles.formitem}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <EditIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Field
            as={TextField}
            margin="normal"
            required
            fullWidth
            name="dob"
            label="Date of Birth"
            type="date"
            InputLabelProps={{ shrink: true }}
            error={touched.dob && Boolean(errors.dob)}
            helperText={<ErrorMessage name="dob" />}
            style={styles.formitem}
          />
          <Field
            as={TextField}
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            error={touched.email && Boolean(errors.email)}
            helperText={<ErrorMessage name="email" />}
            style={styles.formitem}
          />
          {/* <FormGroup>
            <FormControlLabel
              control={<Field as={Checkbox} name="terms" />}
              label="I agree to the Terms of Service"
            />
            <ErrorMessage name="terms">
              {(msg) => <Typography color="error">{msg}</Typography>}
            </ErrorMessage>
          </FormGroup> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            startIcon={<Email />}
          >
            Continue with email
          </Button>
          <Typography component="div" align="center" style={styles.formfooter}>
            By signing up, I agree to the <Link href="#">Offer Terms</Link>
          </Typography>
          {status?.success && (
            <Box mt={2}>
              <Typography variant="body2" color="success.main">
                Registration Successful
              </Typography>
            </Box>
          )}
          {status?.success === false && (
            <Box mt={2}>
              <Typography variant="body2" color="error">
                Registration Failed
              </Typography>
            </Box>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;

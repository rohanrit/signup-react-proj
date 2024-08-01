import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Grid,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Link,
  Card,
  CardContent,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Email from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  gender: Yup.string()
    .oneOf(["male", "female", "other"], "Invalid gender")
    .required("Gender is required"),
  terms: Yup.bool().oneOf([true], "You must agree to the terms"),
});

const styles = {
  formitem: {},
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
        gender: "",
        terms: false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, status, touched, errors }) => (
        <Form>
          <Card
            sx={{
              padding: 0,
              border: "1px solid #efefef",
              boxShadow: "1px 1px 5px #333",
            }}
          >
            <CardContent>
              <Field
                as={TextField}
                margin="thin"
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
                        <EditOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Field
                as={TextField}
                margin="thin"
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
                        <EditOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    margin="thin"
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
                            <EditOutlinedIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    margin="thin"
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
                            <EditOutlinedIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Field
                as={TextField}
                margin="thin"
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
                        <EditOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Field
                as={TextField}
                margin="thin"
                required
                fullWidth
                name="dob"
                label=""
                type="date"
                style={styles.formitem}
                InputLabelProps={{ shrink: true }}
                error={touched.dob && Boolean(errors.dob)}
                helperText={<ErrorMessage name="dob" />}
              />
              <FormControl fullWidth margin="thin">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Field
                  as={Select}
                  margin="thin"
                  labelId="gender-label"
                  name="gender"
                  required
                  error={touched.gender && Boolean(errors.gender)}
                  render={({ field }) => (
                    <Select {...field} label="Gender">
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  )}
                />
                <ErrorMessage name="gender">
                  {(msg) => <Typography color="error">{msg}</Typography>}
                </ErrorMessage>
              </FormControl>
            </CardContent>
          </Card>
          <Field
            as={TextField}
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            error={touched.email && Boolean(errors.email)}
            style={styles.formitem}
            helperText={<ErrorMessage name="email" />}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            sx={{
              backgroundColor: "#152438",
              color: "#fff",
              border: "1px solid #152438",
              verticalAlign: "middle",
              "&:hover": {
                backgroundColor: "#2B3649",
                border: "1px solid #2B3649",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
              },
            }}
            startIcon={<Email />}
          >
            Continue with email
          </Button>
          <Typography
            component="div"
            align="center"
            sx={{
              marginTop: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            By signing up, I agree to the <Link href="#">Offer Terms</Link>
            <IconButton
              sx={{ ml: 1 }} // Adjusts margin-left for spacing
            >
              <ExpandMoreIcon />
            </IconButton>
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

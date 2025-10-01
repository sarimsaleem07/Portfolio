import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string().required("Name is required").min(2),
  email: yup.string().required("Email is required").email("Invalid email"),
  subject: yup.string().required("Subject is required").min(3),
  budget: yup
    .number()
    .typeError("Must be a number")
    .required("Budget is required")
    .min(0),
  comment: yup.string().required("Comment is required").min(10),
});

export default validationSchema; 

import * as Yup from 'yup'

export const validateLoginForm =
    Yup.object().shape({
        email: Yup.string().email('Please Enter a Valid Email').required('This field is required').nullable(),
        password: Yup.string().min(6, "Minimum 6 characters").required("This field is required").nullable(),
    })
export const validateSignUpForm =
    Yup.object().shape({
        fullname: Yup.string().min(6, "Minimum 6 characters").required("This field is required").nullable(),
        username: Yup.string().min(6, "Minimum 6 characters").required("This field is required").nullable(),
        email: Yup.string().email('Please Enter a Valid Email').required('This field is required').nullable(),
        password: Yup.string().min(6, "Minimum 6 characters").required("This field is required").nullable(),
    })
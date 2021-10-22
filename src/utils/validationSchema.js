import * as yup from 'yup';

export const TODO_SCHEMA = yup.object({
  taskText: yup
    .string('Task must been "string" type')
    .matches(/^[^\s].{2,}$/, 'You must use 3 symbols or more, without whitespaces on beginning')
    .required('Field is required'),
});
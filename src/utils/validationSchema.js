import * as yup from 'yup';

export const SIGN_IN_SCHEMA = yup.object({
  email: yup.string().email('мыло не правильное').required('введи эмейл плиз'),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[a-z])(?=.*?[$_#^!%]).{8,32}$/,
      'Пароль должен содержать 8 - 32 симовла, заглавную, строчную буквы, число и спец символ'
    )
    .required(),
});

export const TODO_SCHEMA = yup.object({
  taskText: yup
    .string('нужна строка')
    .matches(/^.{3,}$/, 'реуглярка завалила')
    .required('поле обязательно'),
});
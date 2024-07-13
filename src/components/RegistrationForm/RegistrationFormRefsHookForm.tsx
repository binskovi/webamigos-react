import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Input } from "../../ui"
import { type RegistrationFormData, validationSchema } from "./types";

export const RegistrationFormRefsHookForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<RegistrationFormData>({  // ten typo powstałna bazie schematu walidacyjnego  // Schemat
    resolver: zodResolver(validationSchema), //resolver na podstawie schematu validacyjnego // Walidacja
  });

  const watchedFields = watch(['email', 'password']);
  const [email, password] = watchedFields;

  console.log({ watchedFields });

  const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (data) => {

    console.log(data)
  };


  return (
    <form onSubmit={handleSubmit(handleRegistrationForm)}>
      <p>Email: {email}, Password: {password}</p>
      <Input
        label="E-mail"
        {...register('email')}
        type="email"
        error={errors.email}
      />
      <Input
        label="Password"
        {...register('password')}
        type="password"
        error={errors.password}
      />
      <Input
        label="Language"
        {...register('language')}
        error={errors.language}
      />
      <Button label="Send" type="submit" />
    </form>
  )
}
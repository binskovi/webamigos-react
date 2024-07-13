import { type FormEventHandler, useRef, useEffect } from "react"
import { Button, Input } from "../../ui"

type RegistrationFormData = {
  email: string;
  password: string;
  language: string;
}

export const RegistrationFormRefsCustomInput = () => {
  const emailFieldRef = useRef<HTMLInputElement>(null);      // określenie na TS na jakim elemcnie będzie operował <HTMLInputElement>
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {  // użycie hooka
    if (emailFieldRef.current) {    // current odwołanie do funkcji js na dom
      emailFieldRef.current.focus();
      emailFieldRef.current.style.border = "1px solid #f00";
    }
  }, []);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const data: RegistrationFormData = {
      email: emailFieldRef.current?.value || '',
      password: passwordFieldRef.current?.value || '',
      language: languageFieldRef.current?.value || '',
    }
    console.log(data)
  }


  return (
    <form onSubmit={handleSubmit}>
      <Input label="E-mail" type="email" />
      <Input label="Password" ref={passwordFieldRef} type="password" />
      <Input label="Language" ref={languageFieldRef} />
      <Button label="Send" type="submit" />
    </form>
  )
}
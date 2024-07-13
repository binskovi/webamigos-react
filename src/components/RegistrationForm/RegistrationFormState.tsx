import { type ChangeEventHandler, useState, FormEventHandler } from "react"
import { Button } from "../../ui"

type RegistrationFormData = {
  email: string;
  password: string;
  language: string;
}

export const RegistrationFormState = () => {
  //useState jest f generyczną więc możemy określić jakie dane mogą być  w środku
  // stan będzie przechowywany w obiekcie
  const [formData, setFormData] = useState<RegistrationFormData>({
    email: "dupa",
    password: "",
    language: "",
  });
  const { email, password, language} = formData;   // destrukturyzacja

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [language, setLanguage] = useState('');

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log(formData)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setFormData({
      ...formData, // destrukturyzacja
      [id]: value,
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Email: {email}, password: {password}</p>
      <div className="my-2">
        <label className="mr-2" htmlFor="email">E-mail</label>
        <input id="email" type="email" onChange={handleChange} value={email} />
      </div>
      <div className="my-2">
        <label className="mr-2" htmlFor="password">Hasło</label>
        <input id="password" type="password" onChange={handleChange} value={password} />
      </div>
      <div className="my-2">
        <label className="mr-2" htmlFor="language">Language</label>
        <input id="language" onChange={handleChange} value={language} />
      </div>
      <Button label="Send" type="submit" />
    </form>
  )
}
import { Input, Text , Button} from "../../components";
import { Formik, Form, useFormik } from "formik";
import * as yup from 'yup';
import Card from "../../components/Card";
import { useState } from "react";


const HomeContainer = () =>  {

  const [step, setStep] = useState<number>(1);
  
  const handleNext = () => {
    if(step === 3) {
      return
    }
    setStep((prevState) => prevState + 1)
  }
  const handlePrevious = () => {
    if (step === 1) {
      return
    }
    setStep((prevState) => prevState - 1)
  }

  const formMik = useFormik({
    initialValues: {
      name: '',
      email: '',
      birthday: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      username: '',
      password: ''
    },
    onSubmit: (values) => console.log(values),
    validationSchema: yup.object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      birthday: yup.date().nullable().min(new Date(1900, 0, 1)).required()
    })
  });
  
  return (
    <Card border>
      {step === 1 && (
        <form onSubmit={formMik.handleSubmit}>
          <div>
            <Text>{'Full Name'}</Text>
            <Input className="block border-neutral-400 border" 
              name={'name'}
              value={formMik.values.name}
              onChange={formMik.handleChange('name')}
            />
            {
              formMik.errors.name && (
                <Text>{formMik.errors.name}</Text>
              )
            }
          </div>
          <div>
            <Text>{'Email Address'}</Text>
            <Input className="block border-neutral-400 border" 
              name={'email'}
              value={formMik.values.email}
              onChange={formMik.handleChange('email')}
            />
            {
              formMik.errors.email && (
                <Text>{formMik.errors.email}</Text>
              )
            }
          </div>
          <div className="my-4">
            <Text>{'Date of Birth'}</Text>
            <Input className="block border-neutral-400 border" 
              name={'birthday'}
              value={formMik.values.birthday}
              onChange={formMik.handleChange('birthday')}
            />
            {
              formMik.errors.birthday && (
                <Text>{formMik.errors.birthday}</Text>
              )
            }
          </div>
          <Button label={'Next'} onClick={handleNext} type="button" className={'bg-green-500'}/>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={formMik.handleSubmit}>
          <div>
            <Text>{'Street Address'}</Text>
            <Input className="block border-neutral-400 border" 
              name={'address'}
              value={formMik.values.address}
              onChange={formMik.handleChange('address')}
            />
            {
              formMik.errors.address && (
                <Text>{formMik.errors.address}</Text>
              )
            }
          </div>
          <div>
            <Text>{'City'}</Text>
            <Input className="block border-neutral-400 border" 
              name={'city'}
              value={formMik.values.city}
              onChange={formMik.handleChange('city')}
            />
            {
              formMik.errors.city && (
                <Text>{formMik.errors.city}</Text>
              )
            }
          </div>
          <div>
            <Text>{'State'}</Text>
            <Input className="block border-neutral-400 border" 
              name={'state'}
              value={formMik.values.state}
              onChange={formMik.handleChange('state')}
            />
            {
              formMik.errors.state && (
                <Text>{formMik.errors.state}</Text>
              )
            }
          </div>
          <div className="my-4">
            <Text>{'Zip Code'}</Text>
            <Input className="block border-neutral-400 border" 
              name={'zip'}
              value={formMik.values.zip}
              onChange={formMik.handleChange('zip')}
            />
            {
              formMik.errors.zip && (
                <Text>{formMik.errors.zip}</Text>
              )
            }
          </div>
          <Button label={'Previous'} onClick={handlePrevious} type="button" className={'bg-green-500'}/>
          <Button label={'Next'} onClick={handleNext} type="button" className={'bg-green-500'}/>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={formMik.handleSubmit}>
          <div>
            <Text>{'Username'}</Text>
            <Input className="block border-neutral-400 border" 
              name={'username'}
              value={formMik.values.username}
              onChange={formMik.handleChange('username')}
            />
            {
              formMik.errors.username && (
                <Text>{formMik.errors.username}</Text>
              )
            }
          </div>
          <div className="my-4">
            <Text>{'Password'}</Text>
            <Input className="block border-neutral-400 border" 
              name={'password'}
              value={formMik.values.password}
              onChange={formMik.handleChange('password')}
            />
            {
              formMik.errors.password && (
                <Text>{formMik.errors.password}</Text>
              )
            }
          </div>
          <Button label={'Previous'} onClick={handlePrevious} type="button" className={'bg-green-500'}/>
          <Button label={'Submit'} onClick={handleNext} type="submit" className={'bg-green-500'}/>
        </form>
      )}
    </Card>
  )
}
export default HomeContainer
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { object, string, TypeOf } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Button from './button';
import FormLabel from '@/components/formLabel';
import FormError from '@/components/formError';

const contactFormSchema = object({
  // defines a required field called name
  name: string({
    required_error: 'Please enter your name',
  }),
  // defines a required field called email.
  // we use the built-in email validator from zod
  email: string().email('Please enter a valid email'),
  // defines a required field called message with length constraints of 150-1000 characters.
  message: string().min(150).max(1000),
});

// Get the infered input type from the schema using TypeOf
type ContactFormInputs = TypeOf<typeof contactFormSchema>

const initialValue: ContactFormInputs = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const handleSubmit = () => {};
  return (
    <Formik<ContactFormInputs>
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={toFormikValidationSchema(contactFormSchema)}
    >
      {(formikState) => {
        const values = formikState.values;
        const errors = formikState.errors;
        return (
          <div className='card shadow-md'>
            <Form className='card-body'>
              <div className='card-title'>Contact Us</div>
              <div className='flex space-between gap-2'>
                <div className='form-control w-full max-w-xs'>
                  <FormLabel className='label-text' value='Your name' />
                  <Field
                    type='text'
                    name='name'
                    placeholder='e.g. John Doe'
                    className='input input-bordered w-full max-w-xs'
                    value={values.name}
                  />
                  <FormError className='label-text text-error' value={errors.name} />
                </div>
                <div className='form-control w-full max-w-xs'>
                  <FormLabel className='label-text' value='Your email' />
                  {/* use the Field component instead of input we leave all props as is */}
                  {/* note that the name property should match the formik initialValues */}
                  <Field
                    type='text'
                    name='email'
                    placeholder='e.g johndoe@gmail.com'
                    className='input input-bordered w-full max-w-xs'
                    value={values.email}
                  />
                  <FormError className='label-text text-error' value={errors.email} />
                </div>
              </div>
              <div className='form-control'>
                <FormLabel className='label-text' value='Your message' />
                {/* use as property to transform the field into a textarea */}
                <Field
                  as='textarea'
                  type='text'
                  name='message'
                  className='textarea textarea-bordered h-24'
                  placeholder='Message'
                  value={values.message}
                  />
                <FormError className='label-text text-error' value={errors.message} />
              </div>
              <div className='card-actions justify-end'>
                <Button className='btn btn-primary'>
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default ContactForm;

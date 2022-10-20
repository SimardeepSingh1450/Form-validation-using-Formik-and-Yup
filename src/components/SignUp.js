import { Field, Form, Formik ,ErrorMessage} from 'formik'
import * as yup from 'yup'
import React from 'react'

const SignUp = () => {

    const defaultValue={
        name1:'',
        email2:'',
        password3:''
    }

    const validationSchema=yup.object().shape({
        name1:yup.string().required('Please enter your name'),
        email2:yup.string().required('Enter your e-mail').email('Please enter valid e-mail'),
        password3:yup.string().required('Enter you password'),

    })

    const handleSubmit=(values)=>{
        console.log('Values : ',values);
    }

  return (
    <div>
        <Formik 
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
            <Form>
    <Field type="text" name="name1" placeholder='Enter your Name'/>
    {/* Error Message for name1 */}
    <p>
        <ErrorMessage name="name1"/>
    </p>

    <Field type="text" name="email2" placeholder='Enter your Email'/>
    {/* Error Message for email2 */}
    <p>
        <ErrorMessage name="email2"/>
    </p>

    <Field type="text" name="password3" placeholder='Enter your Password'/>
    {/* Error Message for password3 */}
    <p>
        <ErrorMessage name="password3"/>
    </p>

    <button type='submit'>Submit</button>
            </Form>
        </Formik>
    </div>
  )
}

export default SignUp
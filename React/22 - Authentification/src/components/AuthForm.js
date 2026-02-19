import { Form, Link, useSearchParams, useActionData, useNavigation } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const data = useActionData()
  const navigation = useNavigation()
  const [seatrchParams] = useSearchParams()
  const isLogin = seatrchParams.get('mode') === 'login'
  const isSubmitting = navigation.state === 'submitting'

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.errors && <ul>
            {Object.values(data.errors).map(err => <li key={err}>{err}</li>)}
          </ul>}
        {data && data.message && <o>{data.message}</o>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <p >
            {isLogin ? 'Not signed up?' : ''}
            <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
              {isLogin ? ' Create a new user' : 'Back to login'}
            </Link>
          </p>
          <button disabled={isSubmitting}>{isLogin ? 'Login' : 'Create'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;

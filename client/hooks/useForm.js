import * as React from 'react';
import { useHistory } from 'react-router-dom';

function useForm(callback, validate) {

  const history = useHistory();

  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(async () => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const res = await callback(values);
      if (res.status === 409) setErrors({ ...errors, username: 'Username already in use' });
      if (res.status === 401) setErrors({ ...errors, username: 'Incorrect username and/or password' });
      if (res.status === 200 || res.status === 201) history.push('/game');
    } else {
      setValues({});
    }
  }, [errors]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = event => {
    event.persist();
    setValues({ ...values, [event.target.name]: event.target.value })
  };

  return {
    handleChange,
    handleSubmit,
    errors,
    values
  }
};

export default useForm;
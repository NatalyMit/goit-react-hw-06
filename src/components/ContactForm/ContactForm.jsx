import { ErrorMessage, Field, Form, Formik } from 'formik';

import * as Yup from 'yup';
import { MdOutlineGroupAdd } from 'react-icons/md';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import { initialValues } from '../../redux/constants';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.formBox}>
        <label className={css.formLabel} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.formField}
          name="name"
          type="text"
          id={nameId}
          placeholder="Anna Schmidt"
        />
        <div>
          <ErrorMessage name="name" as="span" />
        </div>

        <label className={css.formLabel} htmlFor={numberId}>
          Number
        </label>
        <Field
          className={css.formField}
          name="number"
          type="number"
          id={numberId}
          placeholder="123-45-67"
        />
        <div>
          <ErrorMessage name="number" as="span" />
        </div>

        <button className={css.buttonAdd} type="submit">
          <MdOutlineGroupAdd className={css.btnImg} />
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

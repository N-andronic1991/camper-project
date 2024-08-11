import { useForm } from 'react-hook-form';
import css from './BookingForm.module.css';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(32, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('You must enter a valid email address')
    .required('Required'),
  bookingDate: Yup.date()
    .typeError('Invalid date')
    .required('This field is required'),
  comment: Yup.string().max(300, 'Max symbols= 300'),
});

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(BookingSchema),
  });

  const onSubmitHandler = formData => {
    console.log({ formData });
    reset();
  };
  return (
    <form className={css.bookForm} onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <input
        className={css.inputText}
        name="name"
        type="text"
        placeholder="Name"
        {...register('name')}
      />
      {errors.name && <p className={css.error}>{errors.name.message}</p>}
      <input
        className={css.inputText}
        name="email"
        type="email"
        placeholder="Email"
        {...register('email')}
      />
      {errors.email && <p className={css.error}>{errors.email.message}</p>}
      <input
        className={css.inputText}
        name="bookingDate"
        type="date"
        placeholder="Booking date"
        {...register('bookingDate')}
      />
      {errors.bookingDate && (
        <p className={css.error}>{errors.bookingDate.message}</p>
      )}
      <textarea
        name="comment"
        placeholder="Comment"
        {...register('comment')}
      ></textarea>
      {errors.comment && <p className={css.error}>{errors.comment.message}</p>}

      <button className={css.submitBtn} type="submit">
        Send
      </button>
    </form>
  );
};

export default BookingForm;

import { useForm, Controller } from 'react-hook-form';
import css from './BookingForm.module.css';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { icons as sprite } from '../../assets/icons/index.js';

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
    control,
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
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
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

      <Controller
        name="bookingDate"
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <div className={css.datePickerWrapper}>
            <DatePicker
              placeholderText="Booking date"
              onChange={date => field.onChange(date)}
              selected={field.value}
              dateFormat="dd.MM.yyyy" // Custom date format
              className={css.customDatepicker}
              calendarClassName={css.customCalendar}
            />
            <svg className={css.iconCalendar} width="20" height="20">
              <use xlinkHref={`${sprite}#icon-calendar`}></use>
            </svg>
            {errors.bookingDate && (
              <p className={css.error}>{errors.bookingDate.message}</p>
            )}
          </div>
        )}
      />
      <textarea
        className={css.comment}
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

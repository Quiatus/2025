import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui';
import classes from './Notification.module.css';

const Notification = (props) => {
  const dispatch = useDispatch()
  const [isHiding, setIsHiding] = useState(false)

  let specialClasses = '';

  if (props.status === 'error') {
    specialClasses = classes.error;
  }
  if (props.status === 'success') {
    specialClasses = classes.success;
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsHiding(true)
    }, 3000)

    let timer2 = setTimeout(() => {
      dispatch(uiActions.hideNotification())
    }, 3500)

    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
    }
  }, [dispatch])

  const cssClasses = `${classes.notification} ${specialClasses} ${isHiding ? classes.hide : null}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;

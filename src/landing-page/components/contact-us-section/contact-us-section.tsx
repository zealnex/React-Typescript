import { Data } from '../../types';
import s from './contact-us-section.module.css';
import Snackbar from '@mui/material/Snackbar';
import React from 'react';

interface Props {
  data: Data;
}
export const ContactUsSection = ({ data }: Props) => {
  const { title, description, email, phone } = data.contact;
  const [open, setOpen] = React.useState(false);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(true);
    window.location.reload();
  };


  return (
    <section id="contact" className={s.background}>
      <div className={s.container}>
        <div className={s.head}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.description}>{description}</p>
        </div>
        <div className={s.body}>
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.content}>
              <div className={s.box}>
                <label htmlFor="name" className={s.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={s.input}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className={s.box}>
                <label htmlFor="email" className={s.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={s.input}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className={s.m_bottom}>
              <label htmlFor="message" className={s.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={s.input}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div className={s.text_align_center}>
              <button type="submit" className={s.btn}>Submit</button>              
              <Snackbar
                  open={open}
                  autoHideDuration={5000}
                  onClose={handleClose}
                  message="Message Sent Successfully!!!"
                />
            </div>
          </form>
          <div className={s.m_top}>
            {' '}
            <span>Email us at: </span> <strong>{email} </strong>{' '}
            <span>or Call / Whatsapp at</span> <strong>{phone}</strong>{' '}
          </div>
        </div>
      </div>
    </section>
  );
};

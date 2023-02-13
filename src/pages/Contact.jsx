import React, { useState } from "react";
import { send } from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);
  const [buttonResponse, setButtonResponse] = useState("Sending Mail..");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);

    send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then(() => {
        setButtonResponse("Thanks for reaching out! We'll be in touch soon.");
        e.target.reset();
      })
      .catch((error) => {
        console.error("Failed to send message. Error: ", error);
        setButtonResponse(
          "Failed to send message. Check your internet connection and try again later."
        );
      });
    formReset();
  };

  const formReset = () => {
    setTimeout(() => {
      setFormSent(false);
    }, 10000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='bg-gradient-to-b from-teal-200 to-teal-500 dark:from-gray-900 dark:to-gray-900  dark:bg-opacity-40 rounded-xl'>
        <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
            Connect with me and let's bring your ideas to life.
          </h2>

          <form onSubmit={handleSubmit} className='space-y-8'>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                Your email
              </label>
              <input
                type='email'
                name='from_email'
                onChange={handleChange}
                required
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                placeholder='Your digital doorstep'
              />
            </div>
            <div>
              <label
                htmlFor='subject'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                Your Name
              </label>
              <input
                type='text'
                name='from_name'
                onChange={handleChange}
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                placeholder="The name's Bond... (just kidding, what's yours?)"
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
                Your message
              </label>
              <textarea
                name='message'
                onChange={handleChange}
                required
                rows='6'
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder="What's on your mind?"></textarea>
            </div>

            {formSent ? (
              <p>{buttonResponse}</p>
            ) : (
              <button
                type='submit'
                className='bg-gradient-to-r from-cyan-600 to-teal-600 px-4 py-3 rounded-md font-medium'>
                Send Mail
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

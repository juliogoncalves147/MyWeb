import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        'serviceID', // paste your ServiceID here (you'll get one when your service is created).
        'templateID', // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: 'YourName', // put your name here.
          from_email: form.email,
          to_email: 'youremail@gmail.com', //put your email here.
          message: form.message,
        },
        'yourpublickey' //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-start">
  <div className="border-b-2 border-gray-300 text-center pb-2">
    <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          <li className="text-[35px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links">
            <a href="https://www.linkedin.com/in/juliogoncalvess/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ color: '#f4f4f6' }} />
            </a>
          </li>
          <li className="text-[35px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links">
            <a href="mailto:juliobeites@hotmail.com">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: '#f4f4f6' }}/>
            </a>
          </li>
          <li className="text-[35px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links">
            <a href="https://github.com/juliogoncalves147">
              <FontAwesomeIcon icon={faGithub} style={{ color: '#f4f4f6' }}/>
            </a>
          </li>
        </ul>
  </div>
  <div className="text-center pt-2">
    <p>@2023 Júlio Gonçalves</p>
  </div>
</div>
  );
};

export default SectionWrapper(Contact, 'contact');

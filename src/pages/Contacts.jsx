import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

import { ImGithub, ImLinkedin, ImFilePdf } from 'react-icons/im';

import { StyledSocials } from '../ui/StyledSocials';
import { StyledLink } from '../ui/Link';
import { StyledBtn } from '../ui/FormButton';
import { StyledInput } from '../ui/Input';
import { StyledTextarea } from '../ui/TextArea';
import { StyledLabel } from '../ui/Label';
import { StyledForm } from '../ui/Form';
import { StyledContacts } from '../ui/ContactsContainer';
import { StyledSection } from '../ui/ContactsSection';
import { StyledInputBox } from '../ui/InputBox';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const linkedIn = 'https://www.linkedin.com/in/denis-hristov-73a859274/';
const gitHub = 'https://github.com/DenisHristov12';
const cvPath = 'Denis_Hristov_CV.pdf';

const serviceId = 'service_h5xc6xi';
const templateId = 'template_ph40a4c';
const key = 'vgkVc0XkcC0bq13xg';

function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const [isDisabled, setIsDisabled] = useState(false);

  function reset() {
    setName('');
    setEmail('');
    setTitle('');
    setEmailBody('');
  }

  const validate = useCallback(
    function validateFN() {
      const isValidEmail = emailRegex.test(email);

      const isValidName = name.length > 0;

      return isValidName & isValidEmail;
    },
    [email, name.length]
  );

  useEffect(() => {
    const check = validate();
    setIsDisabled(check);
  }, [name, email, validate]);

  function handleSubmit(e) {
    e.preventDefault();

    if (emailBody.length < 10) {
      toast.error('Message must have more then 10 symbols!');
      return;
    }

    try {
      emailjs.sendForm(serviceId, templateId, e.target, key);

      toast.success('Email was send successfully!');
      reset();
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0%' }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.5 }}>
      <StyledSection>
        <StyledSocials>
          <StyledLink to={linkedIn} target='_blank'>
            <ImLinkedin />
          </StyledLink>
          <StyledLink to={gitHub} target='_blank'>
            <ImGithub />
          </StyledLink>
          <StyledLink
            to='route'
            onClick={(event) => {
              event.preventDefault();
              window.open(cvPath);
            }}>
            <ImFilePdf />
          </StyledLink>
        </StyledSocials>
        <StyledContacts>
          <StyledForm onSubmit={handleSubmit}>
            <StyledInputBox>
              <StyledLabel>Full Name</StyledLabel>
              <StyledInput
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </StyledInputBox>

            <StyledInputBox>
              <StyledLabel>Email</StyledLabel>
              <StyledInput
                type='email'
                name='email'
                placeholder='email@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </StyledInputBox>

            <StyledInputBox>
              <StyledLabel>Subject</StyledLabel>
              <StyledInput
                type='text'
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </StyledInputBox>

            <StyledInputBox>
              <StyledLabel>Message</StyledLabel>
              <StyledTextarea
                cols='55'
                rows='5'
                name='message'
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}></StyledTextarea>
            </StyledInputBox>
            <StyledBtn disabled={!isDisabled}>Submit</StyledBtn>
          </StyledForm>
        </StyledContacts>
      </StyledSection>
    </motion.div>
  );
}

export default Contacts;

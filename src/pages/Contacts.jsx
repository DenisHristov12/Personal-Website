import emailjs from '@emailjs/browser';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ImGithub, ImLinkedin, ImFilePdf } from 'react-icons/im';

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  /* flex-direction: row-reverse; */

  /* background-color: blue; */

  gap: 0.8rem;

  /* background-color: aliceblue; */
`;

const StyledSocials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 4.4rem;

  /* background-color: red; */
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-main-700);

  font-size: 2.4rem;
  text-decoration: none;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  &:hover {
    /* background-color: aliceblue; */
    transform: scale(1.3);
    overflow: visible;

    transition: all 0.5s;
  }
`;

const StyledContacts = styled.div`
  /* background-color: blue; */

  width: 90%;
  height: 100%;
  /* margin: 1.2rem auto; */
  padding: 2.4rem 5.2rem;

  border-left: 5px solid var(--color-main-700);
`;

const StyledForm = styled.form`
  margin: 1.2rem 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;

const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 1.6rem;
  color: var(--color-main-700);
  transition: all 0.5s ease-in-out;
`;

const StyledInput = styled.input`
  border: 0;
  border-bottom: 1px solid var(--color-main-700);

  background: transparent;
  width: 100%;
  padding: 0.8rem 0 0.5rem 0;
  font-size: 1.6rem;
  color: var(--color-main-100);

  &::placeholder {
    color: var(--color-main-100);
  }

  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid var(--color-orange);
  }
`;

const StyledTextarea = styled.textarea`
  border: 0;
  border-bottom: 1px solid var(--color-main-700);
  background: transparent;
  width: 100%;
  padding: 0.8rem 0 0.5rem 0;
  font-size: 1.6rem;
  color: var(--color-main-100);

  resize: none;

  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid var(--color-orange);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledBtn = styled.button`
  margin-top: 2.4rem;
  font-size: 1.6rem;
  font-weight: 600;

  outline: none;
  border: 0;
  padding: 1.2rem 2.4rem;
  text-transform: uppercase;

  color: var(--color-grey-900);

  background-color: var(--color-main-700);
  border: 3px solid var(--color-main-700);

  transition: all 0.5s;

  &:hover,
  &:active {
    color: var(--color-main-100);

    border: 3px solid var(--color-main-700);
    background-color: transparent;
  }

  &:disabled {
    border: 3px solid var(--color-grey-400);
    color: var(--color-grey-300);
    background-color: var(--color-grey-400);
  }
`;

const linkedIn = 'https://www.linkedin.com/in/denis-hristov-73a859274/';
const gitHub = 'https://github.com/DenisHristov12';
const cvPath = 'Denis_Hristov_CV.pdf';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const serviceId = 'service_h5xc6xi';
const templateId = 'template_ph40a4c';
const key = 'vgkVc0XkcC0bq13xg';

function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const [error, setError] = useState('');
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
      return;
    }

    try {
      emailjs.sendForm(serviceId, templateId, e.target, key);

      toast.success('Email was send successfully!');
      reset();
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
      setError(err.message);
    }
  }

  return (
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
  );
}

export default Contacts;

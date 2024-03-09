import emailjs from '@emailjs/browser';
import { useState } from 'react';
import styled from 'styled-components';

const StyledContacts = styled.section`
  /* background-color: red; */

  width: 50%;
  height: 75vh;

  margin-left: auto;
  margin-right: 8%;
  margin-top: 3%;

  padding: 2.4rem 5.2rem;

  border-left: 5px solid var(--color-main-700);
`;

const StyledForm = styled.form`
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
  color: var(--color-main-800);
  transition: all 0.5s ease-in-out;
`;

const StyledInput = styled.input`
  border: 0;
  border-bottom: 1px solid var(--color-main-100);

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
    border-bottom: 1px solid var(--color-main-700);
  }
`;

const StyledTextarea = styled.textarea`
  border: 0;
  border-bottom: 1px solid var(--color-main-100);
  background: transparent;
  width: 100%;
  padding: 0.8rem 0 0.5rem 0;
  font-size: 1.6rem;
  color: var(--color-main-100);

  resize: none;

  &::placeholder {
    color: var(--color-main-100);
  }

  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid var(--color-main-700);
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
`;

const emailRegex = '^[w-.]+@([w-]+.)+[w-]{2,4}$';

function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [emailBody, setEmailBody] = useState('');

  function reset() {
    setName('');
    setEmail('');
    setTitle('');
    setEmailBody('');
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(e.target);
    console.log(emailBody);

    emailjs.sendForm('service_id', 'template_id', e.target, 'public_key');
  }

  // style required messages and show allerts

  return (
    <StyledContacts>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInputBox>
          <StyledLabel>Full Name</StyledLabel>
          <StyledInput
            type='text'
            placeholder='Denis Hristov'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </StyledInputBox>

        <StyledInputBox>
          <StyledLabel>Email</StyledLabel>
          <StyledInput
            type='email'
            placeholder='email@example.com'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </StyledInputBox>

        <StyledInputBox>
          <StyledLabel>Subject</StyledLabel>
          <StyledInput
            type='text'
            placeholder='Hello Denis'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </StyledInputBox>

        <StyledInputBox>
          <StyledLabel>Body</StyledLabel>
          <StyledTextarea
            cols='55'
            rows='5'
            placeholder='Message...'
            value={emailBody}
            onChange={(e) => setEmailBody(e.target.value)}></StyledTextarea>
        </StyledInputBox>
        <StyledBtn>Submit</StyledBtn>
      </StyledForm>
    </StyledContacts>
  );
}

export default Contacts;

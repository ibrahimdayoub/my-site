import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { PaddingContainer, Heading, BlueText, FlexContainer, IconContainer, ButtonAlt } from './styled-components/Global.styled';
import { ContactForm, FormArea, FormInput } from './styled-components/MyContact.styled'
import { fadeInTopVariant, fadeInBottomVariant } from '../utils/Variants';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

const MyContact = () => {
  const [contact, setContact] = useState({
    fromName: "",
    fromEmail: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({
    text: "",
    type: "success"
  });

  const validationRules = {
    fromName: {
      validate: (val) => val.trim() !== "",
      message: "Don't forget your name!"
    },
    fromEmail: {
      validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      message: "This email looks off!"
    },
    message: {
      validate: (val) => val.length >= 10,
      message: "Say a bit more..."
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContact((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => {
      const isValid = validationRules[name].validate(value);
      const newErrors = { ...prev };

      if (isValid) delete newErrors[name];
      else newErrors[name] = validationRules[name].message;

      return newErrors;
    });
  };

  const validate = () => {
    let newErrors = {};

    for (const key in validationRules) {
      if (!validationRules[key].validate(contact[key])) {
        newErrors[key] = validationRules[key].message;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const result = await emailjs.send(
        'service_vfreky9',
        'template_yt24kr5',
        contact,
        'itEePDD3EQajkwde5'
      );

      console.log("Email.js Res:", result.text);
      setMessage({ text: "Your message has been sent successfully, Thank!", type: "success" })
    } catch (error) {
      console.error("Email.js error:", error);
      setMessage({ text: "Something went wrong, try again.", type: "error" })
    } finally {
      setContact({
        fromName: "",
        fromEmail: "",
        message: ""
      });
      setLoading(false);
      setTimeout(() => setMessage({
        text: "",
        type: "success"
      }), 5000);
    }
  };

  return (
    <PaddingContainer id="my-contact" $left="1%" $right="1%">
      <Heading
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        $size="h4"
        $align="center"
      >
        MY CONTACT
      </Heading>
      <Heading
        as={motion.h2}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        $size="h2"
        $align="center"
        $top="0.5rem"
      >
        Contact
        <BlueText> me here</BlueText>
      </Heading>
      <PaddingContainer $top="2.5rem">
        <FlexContainer $justify="center">
          <ContactForm
            as={motion.form}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            onSubmit={sendEmail}
          >
            <PaddingContainer $bottom="1.5rem">
              <FormInput name="fromName" value={contact.fromName} onChange={handleChange} type="text" placeholder={errors.fromName || "What should I call you?"} $error={errors.fromName} />
            </PaddingContainer>
            <PaddingContainer $bottom="1.5rem">
              <FormInput name="fromEmail" value={contact.fromEmail} onChange={handleChange} type="email" placeholder={errors.fromEmail || "Where can I reach you?"} $error={errors.fromEmail} />
            </PaddingContainer>
            <PaddingContainer $bottom="1.5rem">
              <FormArea name="message" value={contact.message} onChange={handleChange} rows="5" placeholder={errors.message || "Tell me what's on your mind..."} $error={errors.message} />
            </PaddingContainer>
            {
              message.text &&
              <Heading
                as={motion.h5}
                variants={fadeInBottomVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                $size="h5"
                $align="center"
                $bottom="2rem"
              >
                <BlueText style={{ fontWeight: "normal" }} $error={message.type === "error"}> {message.text}</BlueText>
              </Heading>
            }
            <FlexContainer $justify="center" $responsiveflex>
              <ButtonAlt
                type='submit'
                disabled={loading}
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  padding: "10px",
                  opacity: loading ? 0.75 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                <IconContainer $color="blue" $size="1rem">
                  {
                    loading ?
                      <FaSpinner className="spin" /> :
                      <FaPaperPlane />
                  }
                </IconContainer>
                <span>{loading ? "Sending" : "Send Message"}</span>
              </ButtonAlt>
            </FlexContainer>
          </ContactForm>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  )
}

export default MyContact;
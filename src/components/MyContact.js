import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { PaddingContainer, Heading, BlueText, FlexContainer, IconContainer, ButtonAlt } from './styled-components/Global.styled'
import { ContactForm, FormLabel, FormInput } from './styled-components/MyContact.styled'
import { fadeInBottomVariant } from '../utils/Variants';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

const MyContact = () => {
  const [contact, setContact] = useState({
    from_name: "",
    from_email: "",
    message: ""
  })
  const [isOk, setIsOk] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setIsOk(false)
    console.log(contact);
    emailjs.send('service_vfreky9', 'template_yt24kr5', contact, 'itEePDD3EQajkwde5')
      .then((result) => {
        console.log(result.text);
        setContact({
          from_name: "",
          from_email: "",
          message: ""
        })
        setIsOk(true)
        setLoading(false)

        setTimeout(() => setIsOk(false), 5000);
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <PaddingContainer id="my-contact" left="1%" right="1%">
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        MY CONTACT
      </Heading>
      <Heading
        as={motion.h2}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
      >
        Contact
        <motion.p style={{ display: "inline", marginLeft: "10px" }} variants={fadeInBottomVariant} initial="hidden" whileInView="visible">
          <BlueText>me here</BlueText>
        </motion.p>
      </Heading>
      <PaddingContainer top="2.5rem">
        <FlexContainer justify="center">
          <ContactForm
            as={motion.form}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            onSubmit={sendEmail}
          >
            <PaddingContainer bottom="1.5rem">
              <FormLabel>Name:</FormLabel>
              <FormInput name="from_name" value={contact.from_name} onChange={handleChange} type="text" placeholder="Enter your name" required />
            </PaddingContainer>
            <PaddingContainer bottom="1.5rem">
              <FormLabel>Email:</FormLabel>
              <FormInput name="from_email" value={contact.from_email} onChange={handleChange} type="email" placeholder="Enter your email" required />
            </PaddingContainer>
            <PaddingContainer bottom="1.5rem">
              <FormLabel>Message:</FormLabel>
              <FormInput name="message" value={contact.message} onChange={handleChange} as="textarea" rows="5" placeholder="Enter your message" required />
            </PaddingContainer>
            {
              isOk ?
                <Heading
                  as={motion.h5}
                  variants={fadeInBottomVariant}
                  initial="hidden"
                  whileInView="visible"
                  size="h5"
                  align="center"
                  bottom="2rem"
                >
                  <motion.p style={{ display: "inline", marginLeft: "10px" }} variants={fadeInBottomVariant} initial="hidden" whileInView="visible">
                    <BlueText style={{ fontWeight: "normal" }}>Your message has been successfully sent, I will respond as soon as possible, Thank!</BlueText>
                  </motion.p>
                </Heading> :
                null
            }
            <FlexContainer justify="center" responsiveFlex>
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
                <IconContainer color="blue" size="1rem">
                  {
                    loading ?
                      <FaSpinner /> :
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

export default MyContact
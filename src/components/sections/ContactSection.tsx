'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useScroll, useTransform, m, LazyMotion } from 'framer-motion';
import contactStyles from '@/styles/pages/Contact.module.scss';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { loadFeatures } from '@/helpers';
import tokens from '@/config';
import { LinkIds, Links } from '@/enums';
import yaml from '@/templates/home.yaml';
import { useMousePosition } from '@/hooks';
import { Button } from '../common/Button';
import { DownArrowSVG } from '../svg/arrows/DownArrow';

const DynamicModal = dynamic(() => import('../others/Modal'), { ssr: false });
type ErrorFieldProps = {
  fieldName: string;
};
const labelIds = {
  name: 'label-name',
  email: 'label-email',
  message: 'label-message',
};
const ErrorFieldMessage = ({ fieldName }: ErrorFieldProps) => {
  return (
    <p className={contactStyles['form-error-text']}>
      Please specify {fieldName}
    </p>
  );
};
type FormProps = {
  email: string;
  message: string;
  name: string;
};

export const ContactSection = (props: typeof yaml.contactSection) => {
  const defaultValues = { name: '', email: '', message: '' };

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues,
  });
  const {
    blurDataUrl,
    title,
    subtitle,
    image,
    maskSubtitle,
    maskTitle,
    modalError,
    modalSuccess,
  } = props;
  const { errors } = formState;
  const { API_KEY, SERVICE_ID, TEMPLATE_ID } = tokens;
  const ref = useRef<HTMLFormElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const [isHovered, setIsHovered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSuccesful, setIsSuccessful] = useState(false);
  const [hasError, setHasError] = useState(false);
  const size = isHovered ? 300 : 40;
  const formHandler = async (data: any) => {
    const formData = data as FormProps;
    const emailjs = await import('@emailjs/browser');
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, API_KEY).then(
      () => {
        setIsDisabled(true);
        setIsSuccessful(true);
      },
      () => {
        setHasError(true);
      }
    );
    reset();
  };
  const onFocusHandler = (id: string) => {
    const element = document.getElementById(id);
    element?.classList.add(`${contactStyles['label-fadeout']}`);
  };
  const onFocusOutHandler = (id: string) => {
    const element = document.getElementById(id);
    element?.classList.remove(`${contactStyles['label-fadeout']}`);
  };
  const position = useMousePosition();

  const { MEDIUM_LINK, GITHUB_LINK, LINKEDIN_LINK } = Links;
  return (
    <div>
      <LazyMotion features={loadFeatures}>
        <m.div
          className={contactStyles.mask}
          animate={{
            WebkitMaskPosition: `${position.x - size / 2}px ${position.y - size / 2}px`,

            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        >
          <div
            className={`${contactStyles.wrapper} ${contactStyles['mask-content']}`}
          >
            <div className="wrapper">
              <h2
                className={`${contactStyles.title} `}
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              >
                {maskTitle}
              </h2>
              <div className={contactStyles.bounce}>
                <DownArrowSVG />
              </div>
              <h2
                className={`${contactStyles.subtitle} `}
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              >
                {maskSubtitle}
              </h2>
            </div>
          </div>
        </m.div>
      </LazyMotion>
      <div
        className={`${contactStyles['unmask-content']} ${contactStyles.wrapper}`}
      >
        <div className="wrapper">
          <h2 className={contactStyles.title}>{title}</h2>
          <div className={contactStyles.bounce}>
            <Link href={`#${LinkIds.CONTACT_ID}`}>
              <DownArrowSVG />
            </Link>
          </div>
          <h2 className={contactStyles.subtitle}>{subtitle}</h2>
        </div>
      </div>

      <section
        className={`${contactStyles['contact-section']} ${contactStyles.wrapper}`}
      >
        <div className="wrapper" style={{ position: 'relative' }}>
          {isSuccesful && (
            <DynamicModal closeHandler={() => setIsSuccessful(false)}>
              <div className={contactStyles.modal}>
                <h4 className={contactStyles['modal-title']}>
                  {modalSuccess.title}
                </h4>
                <p className={contactStyles['modal-description']}>
                  {modalSuccess.description}
                </p>
              </div>
            </DynamicModal>
          )}
          {hasError && (
            <DynamicModal closeHandler={() => setHasError(false)}>
              <div className={contactStyles.modal}>
                <h4 className={contactStyles['modal-title']}>
                  {modalError.title}
                </h4>
                <p className={contactStyles['modal-description']}>
                  {modalError.description}
                </p>
              </div>
            </DynamicModal>
          )}
          <div style={{ position: 'relative' }}>
            <div className={contactStyles.spacer} />
            <div className={contactStyles['scroll-content']} ref={scrollRef}>
              <LazyMotion features={loadFeatures}>
                <m.div style={{ y }} className={contactStyles.page}>
                  <div className={contactStyles['img-wrapper']}>
                    <Image
                      width={900}
                      height={700}
                      className={contactStyles.img}
                      src={image}
                      sizes="(min-width: 1020px) 904px, calc(95.43vw - 50px)"
                      alt="mac computer coding screen"
                      placeholder="blur"
                      blurDataURL={blurDataUrl}
                    />
                  </div>
                </m.div>
              </LazyMotion>
            </div>
            <div className={contactStyles.spacer} />
          </div>
          <div className={contactStyles.grid} id={LinkIds.CONTACT_ID}>
            <div className={contactStyles['grid-item-form']}>
              <form
                ref={ref}
                className={contactStyles.form}
                onSubmit={handleSubmit(formHandler)}
              >
                <fieldset
                  className={`${contactStyles.group} ${contactStyles['first-group']}`}
                >
                  <label
                    htmlFor="name"
                    className={contactStyles.label}
                    id={labelIds.name}
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    onFocus={() => onFocusHandler(labelIds.name)}
                    {...register('name', { required: true })}
                    className={`${contactStyles.field} ${
                      errors?.name ? contactStyles['field-error'] : ''
                    }`}
                    onBlur={() => onFocusOutHandler(labelIds.name)}
                  />
                  {errors?.name && <ErrorFieldMessage fieldName="name" />}
                </fieldset>
                <div className={contactStyles.group}>
                  <label
                    htmlFor="email"
                    className={contactStyles.label}
                    id={labelIds.email}
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    onFocus={() => onFocusHandler(labelIds.email)}
                    {...register('email', { required: true })}
                    className={`${contactStyles.field} ${
                      errors?.email ? contactStyles['field-error'] : ''
                    }`}
                    onBlur={() => onFocusOutHandler(labelIds.email)}
                  />
                  {errors?.email && <ErrorFieldMessage fieldName="email" />}
                </div>
                <fieldset className={contactStyles.group}>
                  <label
                    htmlFor="message"
                    className={contactStyles.label}
                    id={labelIds.message}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    onFocus={() => onFocusHandler(labelIds.message)}
                    {...register('message', { required: true })}
                    cols={50}
                    className={`${contactStyles.label} ${
                      contactStyles['message-field']
                    } ${errors?.message ? contactStyles['field-error'] : ''}`}
                    onBlur={() => onFocusOutHandler(labelIds.message)}
                  />
                  {errors?.message && <ErrorFieldMessage fieldName="message" />}
                </fieldset>

                <Button
                  type="submit"
                  className={`${contactStyles.btn} ${isDisabled ? contactStyles['btn-disabled'] : ''}`}
                  width="md"
                  disabled={isDisabled}
                >
                  Submit
                </Button>
              </form>
            </div>
            <div className={contactStyles['grid-item-media']}>
              <Link href={MEDIUM_LINK} className={contactStyles.icon}>
                <Image
                  alt="medium"
                  src="/svgs/medium.svg"
                  height={40}
                  width={40}
                />
              </Link>
              <Link href={LINKEDIN_LINK} className={contactStyles.icon}>
                <Image
                  alt="linkedin"
                  src="/svgs/linkedin.svg"
                  height={40}
                  width={40}
                />
              </Link>
              <Link href={GITHUB_LINK} className={contactStyles.icon}>
                <Image
                  alt="github"
                  src="/svgs/github.svg"
                  height={40}
                  width={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactSection;

'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import contactStyles from '@/styles/pages/Contact.module.scss';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import tokens from '@/config';
import { Links } from '@/enums';
import emailjs from '@emailjs/browser';
import yaml from '@/templates/home.yaml';
import { Button } from '../common/Button';
import { MediumSVG } from '../svg/social/Medium';
import { LinkedinSVG } from '../svg/social/Linkedin';
import { GithubSVG } from '../svg/social/Github';
import { DownArrowSVG } from '../svg/arrows/DownArrow';

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
  const { blurDataUrl, title, subtitle, image } = props;
  const { errors } = formState;
  const { API_KEY, SERVICE_ID, TEMPLATE_ID } = tokens;
  const ref = useRef<HTMLFormElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);

  const formHandler = (data: any) => {
    const formData = data as FormProps;
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, API_KEY).then(
      () => {},
      (error) => {
        console.log(error.text);
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

  const { MEDIUM_LINK, GITHUB_LINK, LINKEDIN_LINK } = Links;
  return (
    <section className={contactStyles['contact-section']}>
      <h2 className={contactStyles.title}>{title}</h2>
      <div className={contactStyles.bounce}>
        <DownArrowSVG />
      </div>
      <h2 className={contactStyles.subtitle}>{subtitle}</h2>
      <div>
        <div className={contactStyles.spacer} />
        <div className={contactStyles['scroll-content']} ref={scrollRef}>
          <motion.div style={{ y }} className={contactStyles.page}>
            <div className={contactStyles['img-wrapper']}>
              <Image
                fill
                className={contactStyles.img}
                src={image}
                alt="mac computer coding screen"
                placeholder="blur"
                blurDataURL={blurDataUrl}
              />
            </div>
          </motion.div>
        </div>
        <div className={contactStyles.spacer} />
      </div>
      <div className={contactStyles.grid}>
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
            <fieldset className={contactStyles.group}>
              <label
                htmlFor="email"
                className={contactStyles.label}
                id={labelIds.email}
              >
                Email *
              </label>
              <input
                id={labelIds.email}
                onFocus={() => onFocusHandler(labelIds.email)}
                {...register('email', { required: true })}
                className={`${contactStyles.field} ${
                  errors?.email ? contactStyles['field-error'] : ''
                }`}
                onBlur={() => onFocusOutHandler(labelIds.email)}
              />
              {errors?.email && <ErrorFieldMessage fieldName="email" />}
            </fieldset>
            <fieldset className={contactStyles.group}>
              <label htmlFor="message" className={contactStyles.label}>
                Message *
              </label>
              <textarea
                id={labelIds.message}
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

            <Button type="submit" className={contactStyles.btn} width="md">
              Submit
            </Button>
          </form>
        </div>
        <div className={contactStyles['grid-item-media']}>
          <Link href={MEDIUM_LINK} className={contactStyles.icon}>
            <MediumSVG />
          </Link>
          <Link href={LINKEDIN_LINK} className={contactStyles.icon}>
            <LinkedinSVG />
          </Link>
          <Link href={GITHUB_LINK} className={contactStyles.icon}>
            <GithubSVG height={50} width={50} />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;

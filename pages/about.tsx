import Image from 'next/image';
import tw from 'twin.macro';

import SEO from '../components/SEO';

export default function About() {
  return (
    <div css={tw`py-16`}>
      <SEO
        title="About me — Roman Slonov"
        description="With over 6 years of experience working with tech companies and startups, I
        am a Frontend developer, UI/UX designer specializing in building fast and
        convenient User Interfaces."
      />
      <div>
        <header css={tw`mb-16`}>
          <div>
            <h1 css={tw`font-bold text-4xl mb-4`}>Hey, I am Roman 👋</h1>
            <p css={tw`text-2xl leading-relaxed text-gray-600 dark:text-gray-400 mb-4`}>
              With over 6 years of experience working with tech companies and startups, I
              am a Frontend developer, UI/UX designer specializing in building fast and
              convenient User Interfaces.
            </p>
            <a
              href="https://romanslonov.com/resume.pdf"
              css={tw`inline-flex items-center bg-green-500 hover:bg-green-700 transition-colors duration-300 text-white dark:text-black h-10 rounded-md space-x-2 px-4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                height={20}
                width={20}
              >
                <path d="M13.75 7h-3v5.296l1.943-2.048a.75.75 0 011.114 1.004l-3.25 3.5a.75.75 0 01-1.114 0l-3.25-3.5a.75.75 0 111.114-1.004l1.943 2.048V7h1.5V1.75a.75.75 0 00-1.5 0V7h-3A2.25 2.25 0 004 9.25v7.5A2.25 2.25 0 006.25 19h7.5A2.25 2.25 0 0016 16.75v-7.5A2.25 2.25 0 0013.75 7z" />
              </svg>
              <span css={tw`font-medium`}>Resume</span>
            </a>
          </div>
        </header>
        <main className="prose prose-p:text-gray-500 lg:prose-xl dark:prose-invert dark:prose-p:text-gray-400 mb-16">
          <h2>Beginning</h2>
          <p>
            I started developing and designing websites at school. Participated in
            olympiads and various competitions. Since then I have a passion for designing
            and building user interfaces that are user friendly and fast.
          </p>
          <p>
            Since 2014 I have worked as a freelancer with awesome clients and have
            launched many projects, one of my favorite was <strong>2do2go</strong>. Also
            worked with some design studios where we&apos;re creating design systems for
            web and mobile.
          </p>
          <h2>The moment</h2>
          <p>
            The big change in my career happened in 2016 when I started working at{' '}
            <strong>ServerHub</strong>. I started working as UI/UX designer but after few
            month I was involved in Frontend development. I already knew well HTML/CSS and
            many methodologies to make code clean and consistent such as BEM. But there
            was a lack of strong knowledge in Javascript.
          </p>
          <p>
            So I successfuly finished few basic and advanced courses of Javascript at{' '}
            <strong>htmlacademy</strong>. After that I learned <strong>Vuejs</strong> and
            did a few internal projects using it. It was an amazing experience and
            journey. Projects are still working and went through the whole development
            path of <strong>Vuejs</strong> from v1 to v3. Including Nuxtjs that was
            primarily used for <strong>SSR/SSG</strong> apps.
          </p>
          <p>
            Also have experience working on backend side using Nodejs, some of databases
            such as <strong>MySQL</strong>
            (MariaDB), <strong>Mongodb</strong>, technologies like <strong>WEBRTC</strong>
            , <strong>Websocket</strong>, frameworks <strong>Express</strong>,{' '}
            <strong>Koa</strong>, <strong>TypeORM</strong>, <strong>NestJS</strong>.
          </p>
          <p>
            While I changed direction in my career into Frontend development, I still
            designing user interfaces in our internal projects. Especially designing and
            developing design systems.
          </p>
          <p>
            You can find all technologies that I use, experience and other details in
            my&nbsp;
            <a href="https://romanslonov.com/resume.pdf">resume</a> down below.
          </p>
        </main>
        <div css={tw`bg-neutral-100 dark:bg-neutral-900 text-center rounded-md p-8`}>
          <h2 css={tw`text-3xl font-bold mb-4`}>Get in touch</h2>
          <p css={tw`text-xl text-gray-500 dark:text-gray-400 mb-8`}>
            If you have a project in mind or simply interested in finding out more, <br />
            get in touch by email I will get back to you asap.
          </p>
          <a
            css={tw`text-2xl underline text-green-500`}
            href="mailto:hello@romanslonov.com"
          >
            hello@romanslonov.com
          </a>
        </div>
      </div>
    </div>
  );
}

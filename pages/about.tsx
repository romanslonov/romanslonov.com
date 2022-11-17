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
        <header css={tw`flex items-start gap-16 mb-16`}>
          <div>
            <h1 css={tw`font-bold text-4xl mb-4`}>Hey, I am Roman 👋</h1>
            <p css={tw`text-xl leading-relaxed text-gray-600 dark:text-gray-400`}>
              With over 6 years of experience working with tech companies and startups, I
              am a Frontend developer, UI/UX designer specializing in building fast and
              convenient User Interfaces.
            </p>
          </div>
          <div>
            <Image
              priority
              width={600}
              height={600}
              css={tw`rounded-md`}
              src="/me.webp"
              alt="Roman Slonov photo"
            />
          </div>
        </header>
        <main className="prose prose-p:text-gray-500 lg:prose-xl dark:prose-invert dark:prose-p:text-gray-400">
          <p>
            I started developing and designing websites at school. Participated in
            olympiads and various competitions. Since then I have a passion for designing
            and building user interfaces that are user friendly and fast.
          </p>
          <p>
            Since 2014 I have worked as a freelancer with awesome clients and have
            launched many projects, one of my favorite was <b>2do2go</b>. Also worked with
            some design studios where we&apos;re creating design systems for web and
            mobile.
          </p>
          <p>
            The big change in my career happened in 2016 when I started working at{' '}
            <b>ServerHub</b>. I started working as UI/UX designer but after few month I
            was involved in Frontend development. I already knew well HTML/CSS and many
            methodologies to make code clean and consistent such as BEM. But there was a
            lack of strong knowledge in Javascript.
          </p>
          <p>
            So I successfuly finished few basic and advanced courses of Javascript at{' '}
            <b>htmlacademy</b>. After that I learned <b>Vuejs</b> and did a few internal
            projects using it. It was an amazing experience and journey. Projects are
            still working and went through the whole development path of <b>Vuejs</b> from
            v1 to v3. Including Nuxtjs that was primarily used for <b>SSR/SSG</b> apps.
          </p>
          <p>
            Also have experience working on backend side using Nodejs, some of databases
            such as <b>MySQL</b>
            (MariaDB), <b>Mongodb</b>, technologies like <b>WEBRTC</b>, <b>Websocket</b>,
            frameworks <b>Express</b>, <b>Koa</b>, <b>TypeORM</b>, <b>NestJS</b>.
          </p>
          <p>
            While I changed direction in my career into Frontend development, I still
            designing user interfaces in our internal projects. Especially designing and
            developing design systems.
          </p>
          <p>
            You can find all technologies that I use, experience and other details in my
            CV down below.
          </p>
        </main>
      </div>
    </div>
  );
}

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
          {/* <h2>Beginning</h2> */}
          <p>
            I started developing and designing websites at school. Since then I have a
            passion for designing and building user interfaces that are user friendly and
            fast.
          </p>
          <p>
            Since 2014 I have worked as a freelancer with awesome clients and have
            launched many projects. Working as a UI/UX designer and Frontend developer I
            realized that I cannot live without one of this things.
          </p>
          <p>
            I love to create things that people enjoy to use. From idea to prototyping and
            development with testing. I am inspired by everything related to technology
            and the web. Keep learning new stuff everyday and do open-source projects. As
            well as trying to share my experience in my blog.
          </p>
          <p>
            In my spare time you can find me doing yoga, running, reading or spending time
            with my family.
          </p>
          <p>
            You can find all technologies that I use, experience and other details in
            my&nbsp;
            <a
              css={tw`text-green-500 hover:text-green-400 transition-colors duration-300`}
              href="https://romanslonov.com/resume.pdf"
            >
              resume
            </a>
            .
          </p>
        </main>
        <div css={tw`bg-neutral-100 dark:bg-neutral-900 text-center rounded-md p-8`}>
          <h2 css={tw`text-3xl font-bold mb-4`}>Get in touch</h2>
          <p css={tw`text-xl text-gray-500 dark:text-gray-400 mb-8`}>
            If you have a project in mind or simply interested in finding out more, <br />
            get in touch by email I will get back to you asap.
          </p>
          <a
            css={tw`text-2xl underline text-green-500 hover:text-green-400 transition-colors duration-300`}
            href="mailto:hello@romanslonov.com"
          >
            hello@romanslonov.com
          </a>
        </div>
      </div>
    </div>
  );
}

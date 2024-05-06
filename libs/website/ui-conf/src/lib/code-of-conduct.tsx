/* eslint-disable-next-line */
import {
  ArrowTopRightOnSquareIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

export function CodeOfConduct() {
  return (
    <div className="relative mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div>
        <h1
          id="coc"
          className="group text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
        >
          Code of Conduct
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#coc"
            className="flex inline-flex items-center text-gray-900 dark:text-white"
          >
            <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
          </a>
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
          Nx is dedicated to providing a harassment-free conference experience
          for everyone, regardless of gender, gender identity and expression,
          age, sexual orientation, disability, physical appearance, body size,
          race, ethnicity, religion (or lack thereof), or technology choices.
        </p>
        <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
          We do not tolerate harassment of conference participants in any form.
          Sexual language and imagery are not appropriate for any conference
          venue, including talks, workshops, parties, Twitter, and other online
          media.
        </p>
        <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
          Conference participants violating these rules may be sanctioned or
          expelled from the conference without a refund at the discretion of the
          conference organizers.
        </p>
      </div>
      <div className="py-12">
        <a
          className="hover:bg-mw-green flex flex w-auto items-center items-center text-xl transition hover:rounded hover:text-gray-800"
          href="https://docs.google.com/document/d/1biFWD08Wrd99gRZNv4Q1tawEYGZEI3bd3J55E5uG2ZU/edit?usp=sharing"
        >
          <span className="group-hover:underline">
            Review full Code of Conduct
          </span>
          <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

export default CodeOfConduct;

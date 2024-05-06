import { LinkIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const speakers: Array<{
  name: string;
  description: string;
  imageUrl: string;
  twitter?: string;
}> = [
  {
    description: 'Co-Founder/CEO of Nx, and collector of kunekune pigs.',
    imageUrl: '/images/conf/speakers/jeff-cross.avif',
    name: 'Jeff Cross',
    twitter: 'jeffbcross',
  },
  {
    description: 'Co-Founder/CTO of Nx',
    imageUrl: '/images/conf/speakers/victor-savkin.avif',
    name: 'Victor Savkin',
    twitter: 'victorsavkin',
  },
  {
    description:
      'Jonathan Cammisuli is the lead developer on Nx Console, and a key member of the Nx core team. He is also a passionate advocate for the Rust programming language within the core of Nx.',
    imageUrl: '/images/conf/speakers/jonathan-cammisuli.avif',
    name: 'Jonathan Cammisuli',
    twitter: 'jcammisuli',
  },
  {
    description: `Max Kless is a senior software engineer at Nx, focussed on building Nx Console and breaking Jon's code.`,
    imageUrl: '/images/conf/speakers/max-kless.avif',
    name: 'Max Kless',
    twitter: 'MaxKless',
  },
  {
    description: `As Sr. Director of Developer Experience at Nx, Juri Strumpflohner helps to shape the evolution of Nx. He loves to break down complex topics and teach them in a simple, digestible form, leveraging his 15+ years of expertise working from backend to frontend systems and consulting as architect for some of the world's biggest companies. Juri is a Google Developer Expert, an international speaker and an Egghead instructor.`,
    imageUrl: '/images/conf/speakers/juri-strumpflohner.avif',
    name: 'Juri Strumpflohner',
    twitter: 'juristr',
  },
  {
    description:
      'As Director of Engineering at Nx, James manages our European Nxians and leads our efforts on the Lerna project. He is a prolific open-source contributor, 5x Microsoft MVP, ESLint Core Team Alum, and has worked on a number of projects alongside the TypeScript Team.',
    imageUrl: '/images/conf/speakers/james-henry.avif',
    name: 'James Henry',
    twitter: 'MrJamesHenry',
  },
  {
    description: `Miro is a core member of the Nx team, helping companies build scalable and performant applications. He enjoys sharing with the community so much that he co-founded Angular Austria Association and co-organizes the Vienna JS and ArmadaJS.
        Despite the name, he is not a visual collaboration platform.`,
    imageUrl: '/images/conf/speakers/miroslav-jonas.avif',
    name: 'Miroslav Jonas',
    twitter: 'meeroslav',
  },
  {
    description:
      'Senior Engineer at Nx, open source contributor, GDE for Angular/Web Technologies/Google Maps platform, WTM Ambassador, AngularAthens meetup co-founder. Mentoring women into tech, speaking about the cool things I do, climbing mountains and serving cats for life.',
    imageUrl: '/images/conf/speakers/katerina-skroumpelou.avif',
    name: 'Katerina Skroumpelou',
    twitter: 'psybercity',
  },
  {
    description: `Isaac is an Architect at Nx. He loves introducing devs to the ways that Nx can improve their software development process. He writes docs on nx.dev, gives workshops and joins forces with Nx Champions.
      Isaac has never been to the moon, but he lives in Ohio - where Neil Armstrong was born.`,
    imageUrl: '/images/conf/speakers/isaac-mann.avif',
    name: 'Isaac Mann',
    twitter: 'MannIsaac',
  },
  {
    description: `Brandon is an OSS Advocate, focused on community engagement, content creation, and collaboration. He enjoys learning new things, helping other developers be successful, speaking at conferences, and contributing to open source. He is a GDE, technical writer, maintainer of the NgRx project building libraries for reactive Angular applications, and creator of the AnalogJS meta-framework.`,
    imageUrl: '/images/conf/speakers/brandon-roberts.webp',
    name: 'Brandon Roberts',
    twitter: 'brandontroberts',
  },
  {
    description: `Meet Craigory, a member on the Nx Core Team for the past two years and the innovator behind the .NET plugin for Nx. Residing in Kentucky, he contributes primarily to Nx's core and plugin support. When he's not immersed in code, Craigory engages in woodworking, electronics, gaming, and cherishes his role as a father. Join him as he explores the intricacies of the new project inference API in Nx, illuminating its flexibility and power.`,
    imageUrl: '/images/conf/speakers/craigory-coppola.avif',
    name: 'Craigory Coppola',
    twitter: 'enderagent',
  },
  {
    description: `Johanna is a software architect, problem-solver and science groupie. She has a firm belief that people are always the most interesting component of any system, and a fascination with how we learn and why we often tend to guard too closely the information we acquire.`,
    imageUrl: '/images/conf/speakers/johanna-pearce.avif',
    name: 'Johanna Pearce',
    twitter: 'jhannapearce',
  },
  {
    description: `Michael Hladky is a Google Developer Expert (GDE), Microsoft MVP, Nx Champion, trainer, and consultant with a focus on Angular and RxJS. For years he has been helping companies and developers to set up scalable architectures and performant processes enabling teams to keep up with state-of-the-art development. A vibrant member of the tech community, he organizes multiple community events and workshops each year to give back.`,
    imageUrl: '/images/conf/speakers/michael-hladky.webp',
    name: 'Michael Hladky',
    twitter: 'Michael_Hladky',
  },
  {
    description: `Adrian is a Chicagoland-based Senior Software Engineer at Cisco who loves to focus on developer experience. He helped shape the Cisco CPX enterprise solution since first migrating it to an Nx monorepo and has been involved in most efforts around Nx utilization and DX, especially for linting and CI/CD. When he isn't dabbling with software, he's out hiking, training Muay Thai, or reading a novel by James Rollins.`,
    imageUrl: '/images/conf/speakers/adrian-baran.webp',
    name: 'Adrian Baran',
    twitter: 'AdrianBaran_',
  },
];

export function Speakers() {
  return (
    <div className="relative mx-auto mt-24 max-w-lg lg:mt-36 lg:max-w-7xl">
      <div className="mx-auto">
        <header className="relative">
          <div
            id="speakers"
            className="group text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            Previous Speakers
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#speakers"
              className="flex inline-flex items-center text-gray-900 dark:text-white"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
        </header>
        <p className="mt-3 text-center text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
          While we gather this year's world-class speakers, check out our
          speakers from last year!
        </p>
        <ul className="mt-12 space-y-12 px-4 md:px-0 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
          {speakers.map((speaker) => (
            <li key={speaker.name}>
              <div className="flex space-x-4 lg:space-x-6">
                <img
                  className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
                  src={speaker.imageUrl}
                  alt={speaker.name + ' avatar'}
                />
                <div className="space-y-1 leading-6">
                  <h3>
                    <a
                      href={`https://twitter.com/${speaker.twitter}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center rounded px-1 text-lg font-medium transition  hover:bg-green-500 hover:text-gray-800"
                    >
                      <svg
                        aria-hidden="true"
                        className="mr-2 h-4 w-4"
                        fill="currentColor"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Twitter</title>
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                      {speaker.name}
                    </a>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-500">
                    {speaker.description}
                  </p>
                </div>
              </div>
            </li>
          ))}

          <li key="speaker-you" className="col-span-2 flex justify-center ">
            <div className="flex space-x-4 lg:max-w-[50%] lg:space-x-6">
              <UserCircleIcon className="h-36 w-36 rounded-full md:h-24 md:w-24" />
              <div className="space-y-1 leading-6">
                <h3 className="text-lg font-medium">You!</h3>
                <p className="text-gray-700 dark:text-gray-500">
                  You could be one of our next speakers! Join us by{' '}
                  <a
                    href="https://sessionize.com/monorepo-world"
                    className="border-mw-green hover:bg-mw-green border-b transition hover:rounded hover:text-gray-800"
                  >
                    submitting a proposal
                  </a>
                  .
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

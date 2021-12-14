/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, XIcon } from '@heroicons/react/solid';

const plans = [
  {
    title: 'Turborepo',
    featured: false,
    description:
      'The high-performance build system for JavaScript & TypeScript codebases.',
    priceMonthly: 5,
    priceYearly: 56,
    mainFeatures: [
      { id: 1, value: 'Basic invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
    ],
  },
  {
    title: 'Nx',
    featured: false,
    description: 'Smart, Extensible Build Framework.',
    priceMonthly: 19,
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: 'Advanced invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
      { id: 4, value: 'Tax planning toolkit' },
      { id: 5, value: 'VAT & VATMOSS filing' },
      { id: 6, value: 'Free bank transfers' },
    ],
  },
  {
    title: 'Bazel',
    featured: false,
    description:
      'A fast, scalable, multi-language and extensible build system.',
    priceMonthly: 12,
    priceYearly: 140,
    mainFeatures: [
      { id: 1, value: 'Basic invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
      { id: 4, value: 'Tax planning toolkit' },
    ],
  },
];
const management = [
  {
    title: 'Code boundaries',
    tiers: [
      { title: 'Turborepo', value: true },
      { title: 'Nx', featured: false, value: true },
      { title: 'Bazel', value: true },
    ],
  },
  {
    title: 'Code sharing',
    tiers: [
      { title: 'Turborepo', value: true },
      { title: 'Nx', featured: false, value: true },
      { title: 'Bazel', value: true },
    ],
  },
  {
    title: 'Consistent tooling',
    tiers: [
      { title: 'Turborepo', value: true },
      { title: 'Nx', featured: false, value: true },
      { title: 'Bazel', value: true },
    ],
  },
];
const understandingWorkspace = [
  {
    title: 'Dependency graph visualization',
    tiers: [
      { title: 'Turborepo', value: true },
      { title: 'Nx', featured: false, value: true },
      { title: 'Bazel', value: true },
    ],
  },
  {
    title: 'Detecting affected projects/packages',
    tiers: [
      { title: 'Turborepo', value: false },
      { title: 'Nx', featured: false, value: true },
      { title: 'Bazel', value: true },
    ],
  },
];
const tasksManagement = [
  {
    title: 'Local task coordination',
    tiers: [
      { title: 'Turborepo', value: true },
      { title: 'Nx', featured: false, value: true },
      { title: 'Bazel', value: true },
    ],
  },
  {
    title: 'Local computation caching',
    tiers: [
      { title: 'Turborepo', value: true },
      { title: 'Nx', featured: false, value: true },
      { title: 'Bazel', value: true },
    ],
  },
  {
    title: 'Distributed computation caching',
    tiers: [
      { title: 'Turborepo', value: true },
      { title: 'Nx', featured: false, value: true },
      { title: 'Bazel', value: true },
    ],
  },
  {
    title: 'Distributed task execution',
    tiers: [
      { title: 'Turborepo', value: false },
      { title: 'Nx', featured: false, value: true },
      { title: 'Bazel', value: true },
    ],
  },
  {
    title: 'Transparent remote execution',
    tiers: [
      { title: 'Turborepo', value: false },
      { title: 'Nx', featured: false, value: false },
      { title: 'Bazel', value: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ToolsReview() {
  return (
    <div className="bg-slate-800">
      <div className="relative">
        <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            <span className="block lg:inline">Many tools available,</span>
            <span className="block lg:inline"> which one to pick?</span>
          </h1>
          <p className="mt-4 text-xl text-indigo-100">
            Each tools fit a specific set of needs and gives you a precise set
            of features. <br /> Depending on your needs, chose the one that's
            best for you. (need to rephrase it)
          </p>
        </div>
      </div>

      {/* Feature comparison (up to lg) */}
      <section
        aria-labelledby="mobile-comparison-heading"
        className="lg:hidden"
      >
        <h2 id="mobile-comparison-heading" className="sr-only">
          Feature comparison
        </h2>

        <div className="max-w-2xl mx-auto py-16 px-4 space-y-16 sm:px-6">
          {plans.map((plan, mobilePlanIndex) => (
            <div key="plan.title" className="border-t border-slate-900">
              <div
                className={classNames(
                  plan.featured ? 'border-blue-600' : 'border-transparent',
                  '-mt-px pt-6 border-t-2 sm:w-1/2'
                )}
              >
                <h3
                  className={classNames(
                    plan.featured ? 'text-blue-500' : 'text-gray-300',
                    'text-sm font-bold'
                  )}
                >
                  {plan.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
              </div>
              <h4 className="mt-10 text-sm font-bold text-gray-300">
                Management
              </h4>

              <div className="mt-6 relative">
                {/* Fake card background */}
                <div
                  aria-hidden="true"
                  className="hidden absolute inset-0 pointer-events-none sm:block"
                >
                  <div
                    className={classNames(
                      plan.featured ? 'shadow-md' : 'shadow',
                      'absolute right-0 w-1/2 h-full bg-slate-700 rounded-lg'
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    plan.featured
                      ? 'ring-2 ring-blue-600 shadow-md'
                      : 'ring-1 ring-black ring-opacity-5 shadow',
                    'relative py-3 px-4 bg-slate-700 rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                  )}
                >
                  <dl className="divide-y divide-slate-600">
                    {management.map((feature) => (
                      <div
                        key={feature.title}
                        className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2"
                      >
                        <dt className="pr-4 text-sm font-medium text-gray-300">
                          {feature.title}
                        </dt>
                        <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                          {typeof feature.tiers[mobilePlanIndex].value ===
                          'string' ? (
                            <span
                              className={classNames(
                                feature.tiers[mobilePlanIndex].featured
                                  ? 'text-blue-500'
                                  : 'text-gray-300',
                                'text-sm font-medium'
                              )}
                            >
                              {feature.tiers[mobilePlanIndex].value}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[mobilePlanIndex].value === true ? (
                                <CheckIcon
                                  className="mx-auto h-5 w-5 text-blue-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <XIcon
                                  className="mx-auto h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {feature.tiers[mobilePlanIndex].value === true
                                  ? 'Yes'
                                  : 'No'}
                              </span>
                            </>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Fake card border */}
                <div
                  aria-hidden="true"
                  className="hidden absolute inset-0 pointer-events-none sm:block"
                >
                  <div
                    className={classNames(
                      plan.featured
                        ? 'ring-2 ring-blue-600'
                        : 'ring-1 ring-black ring-opacity-5',
                      'absolute right-0 w-1/2 h-full rounded-lg'
                    )}
                  />
                </div>
              </div>

              <h4 className="mt-10 text-sm font-bold text-gray-300">
                Understanding your workspace
              </h4>

              <div className="mt-6 relative">
                {/* Fake card background */}
                <div
                  aria-hidden="true"
                  className="hidden absolute inset-0 pointer-events-none sm:block"
                >
                  <div
                    className={classNames(
                      plan.featured ? 'shadow-md' : 'shadow',
                      'absolute right-0 w-1/2 h-full bg-slate-700 rounded-lg'
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    plan.featured
                      ? 'ring-2 ring-blue-600 shadow-md'
                      : 'ring-1 ring-black ring-opacity-5 shadow',
                    'relative py-3 px-4 bg-slate-700 rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                  )}
                >
                  <dl className="divide-y divide-slate-600">
                    {understandingWorkspace.map((perk) => (
                      <div
                        key={perk.title}
                        className="py-3 flex justify-between sm:grid sm:grid-cols-2"
                      >
                        <dt className="text-sm font-medium text-gray-300 sm:pr-4">
                          {perk.title}
                        </dt>
                        <dd className="text-center sm:px-4">
                          {perk.tiers[mobilePlanIndex].value === true ? (
                            <CheckIcon
                              className="mx-auto h-5 w-5 text-blue-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <XIcon
                              className="mx-auto h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          )}

                          <span className="sr-only">
                            {perk.tiers[mobilePlanIndex].value === true
                              ? 'Yes'
                              : 'No'}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Fake card border */}
                <div
                  aria-hidden="true"
                  className="hidden absolute inset-0 pointer-events-none sm:block"
                >
                  <div
                    className={classNames(
                      plan.featured
                        ? 'ring-2 ring-blue-600'
                        : 'ring-1 ring-black ring-opacity-5',
                      'absolute right-0 w-1/2 h-full rounded-lg'
                    )}
                  />
                </div>
              </div>

              <h4 className="mt-10 text-sm font-bold text-gray-300">
                Tasks management
              </h4>

              <div className="mt-6 relative">
                {/* Fake card background */}
                <div
                  aria-hidden="true"
                  className="hidden absolute inset-0 pointer-events-none sm:block"
                >
                  <div
                    className={classNames(
                      plan.featured ? 'shadow-md' : 'shadow',
                      'absolute right-0 w-1/2 h-full bg-slate-700 rounded-lg'
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    plan.featured
                      ? 'ring-2 ring-blue-600 shadow-md'
                      : 'ring-1 ring-black ring-opacity-5 shadow',
                    'relative py-3 px-4 bg-slate-700 rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                  )}
                >
                  <dl className="divide-y divide-slate-600">
                    {tasksManagement.map((perk) => (
                      <div
                        key={perk.title}
                        className="py-3 flex justify-between sm:grid sm:grid-cols-2"
                      >
                        <dt className="text-sm font-medium text-gray-300 sm:pr-4">
                          {perk.title}
                        </dt>
                        <dd className="text-center sm:px-4">
                          {perk.tiers[mobilePlanIndex].value === true ? (
                            <CheckIcon
                              className="mx-auto h-5 w-5 text-blue-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <XIcon
                              className="mx-auto h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          )}

                          <span className="sr-only">
                            {perk.tiers[mobilePlanIndex].value === true
                              ? 'Yes'
                              : 'No'}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Fake card border */}
                <div
                  aria-hidden="true"
                  className="hidden absolute inset-0 pointer-events-none sm:block"
                >
                  <div
                    className={classNames(
                      plan.featured
                        ? 'ring-2 ring-blue-600'
                        : 'ring-1 ring-black ring-opacity-5',
                      'absolute right-0 w-1/2 h-full rounded-lg'
                    )}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature comparison (lg+) */}
      <section aria-labelledby="comparison-heading" className="hidden lg:block">
        <h2 id="comparison-heading" className="sr-only">
          Feature comparison
        </h2>

        <div className="max-w-7xl mx-auto py-24 px-8">
          <div className="w-full border-t border-slate-900 flex items-stretch">
            <div className="-mt-px w-1/4 py-6 pr-4 flex items-end">
              <h3 className="mt-auto text-sm font-bold text-gray-300">
                Management
              </h3>
            </div>
            {plans.map((plan, planIdx) => (
              <div
                key={plan.title}
                aria-hidden="true"
                className={classNames(
                  planIdx === plans.length - 1 ? '' : 'pr-4',
                  '-mt-px pl-4 w-1/4'
                )}
              >
                <div
                  className={classNames(
                    plan.featured ? 'border-blue-600' : 'border-transparent',
                    'py-6 border-t-2'
                  )}
                >
                  <p
                    className={classNames(
                      plan.featured ? 'text-blue-500' : 'text-gray-300',
                      'text-sm font-bold'
                    )}
                  >
                    {plan.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    {plan.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            {/* Fake card backgrounds */}
            <div
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="w-full h-full bg-slate-700 rounded-lg shadow" />
              </div>
              <div className="w-1/4 px-4">
                <div className="w-full h-full bg-slate-700 rounded-lg shadow-md" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="w-full h-full bg-slate-700 rounded-lg shadow" />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Business feature comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Feature</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.title} scope="col">
                      <span className="sr-only">{plan.title} plan</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-600">
                {management.map((feature) => (
                  <tr key={feature.title}>
                    <th
                      scope="row"
                      className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-300"
                    >
                      {feature.title}
                    </th>
                    {feature.tiers.map((tier, tierIdx) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          tierIdx === feature.tiers.length - 1
                            ? 'pl-4'
                            : 'px-4',
                          'relative w-1/4 py-0 text-center'
                        )}
                      >
                        <span className="relative w-full h-full py-3">
                          {typeof tier.value === 'string' ? (
                            <span
                              className={classNames(
                                tier.featured
                                  ? 'text-blue-500'
                                  : 'text-gray-300',
                                'text-sm font-medium'
                              )}
                            >
                              {tier.value}
                            </span>
                          ) : (
                            <>
                              {tier.value === true ? (
                                <CheckIcon
                                  className="mx-auto h-5 w-5 text-blue-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <XIcon
                                  className="mx-auto h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {tier.value === true ? 'Yes' : 'No'}
                              </span>
                            </>
                          )}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 px-4">
                <div className="w-full h-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>

          <h3 className="mt-10 text-sm font-bold text-gray-300">
            Understanding your workspace
          </h3>

          <div className="mt-6 relative">
            {/* Fake card backgrounds */}
            <div
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="w-full h-full bg-slate-700 rounded-lg shadow" />
              </div>
              <div className="w-1/4 px-4">
                <div className="w-full h-full bg-slate-700 rounded-lg shadow-md" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="w-full h-full bg-slate-700 rounded-lg shadow" />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Perk comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Perk</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.title} scope="col">
                      <span className="sr-only">{plan.title} plan</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-600">
                {understandingWorkspace.map((perk) => (
                  <tr key={perk.title}>
                    <th
                      scope="row"
                      className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-300"
                    >
                      {perk.title}
                    </th>
                    {perk.tiers.map((tier, tierIdx) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          tierIdx === perk.tiers.length - 1 ? 'pl-4' : 'px-4',
                          'relative w-1/4 py-0 text-center'
                        )}
                      >
                        <span className="relative w-full h-full py-3">
                          {tier.value === true ? (
                            <CheckIcon
                              className="mx-auto h-5 w-5 text-blue-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <XIcon
                              className="mx-auto h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          )}

                          <span className="sr-only">
                            {tier.value === true ? 'Yes' : 'No'}
                          </span>
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 px-4">
                <div className="w-full h-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>

          <h3 className="mt-10 text-sm font-bold text-gray-300">
            Tasks management
          </h3>

          <div className="mt-6 relative">
            {/* Fake card backgrounds */}
            <div
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="w-full h-full bg-slate-700 rounded-lg shadow" />
              </div>
              <div className="w-1/4 px-4">
                <div className="w-full h-full bg-slate-700 rounded-lg shadow-md" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="w-full h-full bg-slate-700 rounded-lg shadow" />
              </div>
            </div>

            <table className="relative w-full">
              <caption className="sr-only">Perk comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Perk</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.title} scope="col">
                      <span className="sr-only">{plan.title} plan</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-600">
                {tasksManagement.map((perk) => (
                  <tr key={perk.title}>
                    <th
                      scope="row"
                      className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-300"
                    >
                      {perk.title}
                    </th>
                    {perk.tiers.map((tier, tierIdx) => (
                      <td
                        key={tier.title}
                        className={classNames(
                          tierIdx === perk.tiers.length - 1 ? 'pl-4' : 'px-4',
                          'relative w-1/4 py-0 text-center'
                        )}
                      >
                        <span className="relative w-full h-full py-3">
                          {tier.value === true ? (
                            <CheckIcon
                              className="mx-auto h-5 w-5 text-blue-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <XIcon
                              className="mx-auto h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          )}

                          <span className="sr-only">
                            {tier.value === true ? 'Yes' : 'No'}
                          </span>
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fake card borders */}
            <div
              className="absolute inset-0 flex items-stretch pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 px-4">
                <div className="w-full h-full rounded-lg ring-2 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

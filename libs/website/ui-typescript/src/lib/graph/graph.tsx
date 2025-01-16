import { ProgressBar } from './progress-bar';
export interface BenchmarkProps {
  data: BenchmarkData;
}
export type BenchmarkData = Record<
  string,
  {
    label: string;
    metrics: Array<{ time: number; desc: string }>;
  }
>;
const findMaxTime = (data: BenchmarkData) => {
  let max = 0;

  for (const item of Object.values(data)) {
    for (const metric of item.metrics) {
      if (metric.time > max) {
        max = metric.time;
      }
    }
  }

  return max;
};
const BENCHMARK_DATA = {
  aliases: {
    label: 'Path Aliases',
    metrics: [
      {
        time: 186.53,
        desc: 'cold',
      },
    ],
  },
  projectRef: {
    label: 'References + Workspace',
    metrics: [
      {
        time: 175.52,
        desc: 'cold',
      },
      {
        time: 25.33,
        desc: 'hot',
      },
    ],
  },
  projectRefCache: {
    label: 'References + Workspace (nested updated)',
    metrics: [
      {
        time: 36.33,
        desc: '1 package',
      },
      {
        time: 48.21,
        desc: '5 packages',
      },
      {
        time: 65.25,
        desc: '25 packages',
      },
      { time: 80.69, desc: '100 packages' },
    ],
  },
};

export function Graph(): React.JSX.Element {
  const maxTime = findMaxTime(BENCHMARK_DATA);
  return (
    <div className="align-center flex flex-col justify-center self-stretch">
      {Object.values(BENCHMARK_DATA).map((item) => (
        <div
          key={item.label}
          className="align-center my-4 flex w-full flex-col justify-center self-stretch"
        >
          <p className="min-w-44 text-lg font-semibold text-gray-700 dark:text-gray-300">
            {item.label}
          </p>
          <div className="align-center mt-3 flex shrink-0 grow flex-col justify-center">
            {item.metrics.map((metric) => (
              <ProgressBar
                key={metric.desc}
                value={metric.time}
                max={maxTime}
                desc={metric.desc}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function formatTime(time: number) {
  return time + 's ';
}

export function ProgressBar({
  value,
  max,
  desc,
}: {
  value: number;
  max: number;
  desc: string;
}) {
  return (
    <div className="content-box flex h-7 w-full items-center justify-between rounded-lg">
      <div className="flex h-2 w-full justify-stretch rounded bg-slate-500">
        <div
          className="h-full rounded bg-blue-300"
          style={{ width: `${(value / max) * 100}%` }}
        ></div>
      </div>
      <div className="ml-4 w-52 min-w-20 text-left font-mono text-xs text-gray-700 dark:text-gray-300">
        <span>{`${value}s `}</span> {desc}
      </div>
    </div>
  );
}

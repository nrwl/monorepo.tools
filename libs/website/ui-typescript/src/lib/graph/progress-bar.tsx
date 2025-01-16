export function formatTime(time: number) {
 return time + 's '
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
    <div className="w-full flex items-center justify-between h-7 rounded-lg content-box">
      <div className="flex justify-stretch w-full h-2 bg-slate-500 rounded">
        <div
          className="h-full rounded bg-blue-300"
          style={{ width: `${(value / max) * 100}%` }}
        ></div>
      </div>
      <div className="min-w-20 ml-4 text-xs w-52 text-gray-700 dark:text-gray-300 font-mono text-left">
        <span>{`${value}s `}</span> {desc}
      </div>
    </div>
  );
}

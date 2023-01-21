interface Props {
  content: string;
  source: string;
}

export default function SimpleQuote({ content, source }: Props) {
  return (
    <div className="w-full flex items-center justify-center relative h-64">
      <div className="bg-zinc-800 w-1/3 h-64 absolute z-0 left-0" />
      <div className="bg-zinc-600 w-2/3 h-64 absolute z-0 right-0" />
      <div className="flex flex-col gap-2 items-center justify-center max-w-3xl z-10 px-4">
        <blockquote className="text-md lg:text-xl text-center text-white">
          {content}
        </blockquote>
        <p className="text-md lg:text-lg text-center text-white">({source})</p>
      </div>
    </div>
  );
}

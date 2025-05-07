import React, { type ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function Content({ title, children }: Props) {
  return (
    <section className="flex flex-col">
      <h1 className="text-xl font-bold text-gray-600 border-b-2 border-blue-200 pt-6 pb-2 px-6">
        {title}
      </h1>
      <div className="flex-1 my-6 mx-6 rounded-xl">{children}</div>
    </section>
  );
}

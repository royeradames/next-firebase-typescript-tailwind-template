import React from "react";

type TeaserProps = {
  blok: {
    headline: string;
  };
};

export default function Teaser({ blok }: TeaserProps) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold">{blok.headline}</h3>
    </div>
  );
} 
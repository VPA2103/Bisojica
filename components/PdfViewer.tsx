"use client";

import React from "react";

type PdfViewerProps = {
  file: string;
  title: string;
};

export default function PdfViewer({ file, title }: PdfViewerProps) {
  return (
    <div className="w-full my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>

      <div className="w-full h-[800px] border rounded-lg overflow-hidden shadow">
        <iframe
          src={file}
          width="100%"
          height="100%"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
"use client";

import React from "react";

type Props = {
  html: string;
  className?: string;
  as?: React.ElementType;
};

export default function RichText({ html, className, as = "span" }: Props) {
  const Component = as as React.ElementType;
  return React.createElement(Component, {
    className,
    dangerouslySetInnerHTML: { __html: html },
  });
}

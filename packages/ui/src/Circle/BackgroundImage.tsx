"use client";

export function BackgroundImage({ url }: { url: string }) {
  return (
    <img
      onClick={() => alert("open profile")}
      className="rounded-full w-full h-full"
      src={url}
      alt=""
    />
  );
}

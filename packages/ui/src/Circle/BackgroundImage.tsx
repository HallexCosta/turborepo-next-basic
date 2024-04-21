import Image from "next/image";

export function BackgroundImage({ url }: { url: string }) {
  return (
    <Image className="rounded-full w-full h-full" src={url} alt="Circle" />
  );
}

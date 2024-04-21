interface ButtonProps {
  content?: string;
  className?: string;
  slot?: boolean;
  pdfUrl: string;
}

// const gradient = tv({
//   variants: {

//   }
// })

// import { Poppins } from 'next/font/google';
// const poppins = Poppins({
//   weight: '600',
//   display: 'swap',
//   subsets: ['latin']
// })

export const ButtonGradient = ({
  content,
  className,
  slot,
  pdfUrl,
}: ButtonProps) => {
  slot = slot || false;
  className = className || "";
  className = `px-12 py-6 text-center text-white rounded-full
  bg-gradient-to-r from-purple-500 via-blue-600 to-blue-400 
  hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-600 hover:to-blue-400 
  active:bg-gradient-to-r active:from-purple-500 active:via-blue-600 active:to-blue-400 
  ${className}`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "curriculo-hallexcosta.pdf";
    link.click();
  };

  return slot ? (
    <a className={className} href={pdfUrl} target="_blank">
      {content}
    </a>
  ) : (
    <button className={className}>{content}</button>
  );
};

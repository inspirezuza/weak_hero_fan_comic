import { Image } from "@nextui-org/react";

export default function App() {
  return (
    <>
      <div className="w-11">
        <div className="m-5 flex flex-wrap">
          <Image
            width={300}
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            className=""
          />
          <Image
            width={300}
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            className=""
          />
          <Image
            width={300}
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            className="m-5"
          />
        </div>
      </div>
    </>
  );
}

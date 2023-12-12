import { Image } from "@nextui-org/react";

export default function App() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.discordapp.com/attachments/910760112422002698/1184224143307194458/pxfuel.jpg?ex=658b31ad&is=6578bcad&hm=0dd3e7e20225f76f2bee0bc5f431ae319a45510c684dbc83ada898c2ba9d5896&)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              <span className="inline bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] bg-clip-text tracking-tight text-transparent ">
                Weak Hero
              </span>{" "}
              Fan Comic
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Read Now</button>
          </div>
        </div>
        <div className="flex h-full w-full items-end">
          <div className="w-full">
            <Image
              src="https://cdn.discordapp.com/attachments/910760112422002698/1184188832111927489/0Details_PC_cha.png?ex=658b10ca&is=65789bca&hm=52c083e9412b77296422d8870273c92de5fbe8d35a232173cc3df9226848250f&"
              alt="Image 1"
              width="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
}

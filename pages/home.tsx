import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import {
  Explore,
  Group,
  BusinessCenter,
  OndemandVideoSharp,
  ForwardRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import PersonImage from "../assets/home.svg";
import LinkedInLogo from "../assets/linkedInlogo.svg";
import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";

interface IHome {
  providers: Object;
}

const Home = ({ providers }: IHome) => {
  return (
    <div className="space-y-10 relative">
      <Head>
        <title>LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-around items-center py-4">
        <div className="relative w-36 h-10">
          <Image
            src={LinkedInLogo}
            layout="fill"
            objectFit="contain"
            alt="Logo"
          />
        </div>
        <div className="flex inline items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={Explore} title="Discover" />
            <HeaderLink Icon={Group} title="People" />
            <HeaderLink Icon={OndemandVideoSharp} title="Learning" />
            <HeaderLink Icon={BusinessCenter} title="Jobs" />
          </div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className="pl-4">
                <button
                  className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign in
                </button>
              </div>
            </div>
          ))}
        </div>
      </header>
      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">
            Welcome to your professional community
          </h1>

          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl">Search for a job</h2>
              <ArrowForwardIosRounded className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Find person know you</h2>
              <ArrowForwardIosRounded className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Learn new skill</h2>
              <ArrowForwardIosRounded className="text-gray-700" />
            </div>
          </div>
          <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 right-5">
            <Image
              src={PersonImage}
              layout="fill"
              priority
              alt="person with laptop"
            />
          </div>
        </div>
        <div></div>
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

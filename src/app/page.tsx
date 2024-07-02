import Link from "next/link";
import MaxwidthWrapper from "../components/MaxwidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { LuArrowDownToLine,LuLeaf  } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";

const perks = [
  {
    name:"Instant Delivery",
    icon:"<LuArrowDownToLine />",
    desc:"Get your assets delivered to your email in seconds and download them right away."
  }, {
    name:"Granted quality",
    icon:<FaRegCheckCircle />,
    desc:"Every assets on our platfrom is verified by our team to ensure our highest quality standard."
  }, {
    name:"For the planet",
    icon:<LuLeaf />,
    desc:"We've plaged 1% of sales to the preservation and restoration of the nature enviroment"
  }
]



export default function Home() {
  return (
    <>
      <MaxwidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl ">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your market place for high-quality <span className="text-blue-600">Digital Assets</span>.</h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground ">Wellcome to E-Shop. Every assets on our platfrom is verified by our team to ensure our highest quality standard</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link className={buttonVariants()} href="/products">Browse Trending</Link>
            <Button variant="ghost">Our quality promise <span className="mx-1 text-lg">→</span></Button>
          </div>
        </div>
        {/* Products list */}
      </MaxwidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxwidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk,index)=>(
              <div key={index} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 items-center flex justify-center rounded-full bg-blue-100 text-blue-900">
                    {perk.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MaxwidthWrapper>
      </section>
    </>
  );
}

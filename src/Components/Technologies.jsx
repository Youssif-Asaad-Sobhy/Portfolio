import { AiOutlineDotNet } from "react-icons/ai"
import { DiMsqlServer } from "react-icons/di"
import { PiFileCSharp } from "react-icons/pi"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const Technologies = () => {
  return (
    <>
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl bg-neutral-800 border-4 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl bg-neutral-800 border-4 p-4">
                <TbBrandNextjs className="text-7xl " />
            </div>
            <div className="rounded-2xl bg-neutral-800 border-4 p-4">
                <PiFileCSharp className="text-7xl text-violet-800" />
            </div>
            <div className="rounded-2xl bg-neutral-800 border-4 p-4">
                <AiOutlineDotNet  className="text-7xl text-white" />
            </div>
            <div className="rounded-2xl bg-neutral-800 border-4 p-4">
                <DiMsqlServer   className="text-7xl text-red-600" />
            </div>
            <div className="rounded-2xl bg-neutral-800 border-4 p-4">
                <SiMongodb className="text-7xl text-green-500" />
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Technologies
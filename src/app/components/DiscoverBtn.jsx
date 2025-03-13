import Image from "next/image"

const DiscoverBtn = () => {
  return (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <div className="relative w-[302px] h-[602px]">
            <Image
              src="/assets/LeftRectangle.png"
              alt="rectangle"
              width={360}
              height={360}
              className="w-full h-full"
            />
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center cursor-not-allowed whitespace-nowrap">
              <Image
                className="mr-2"
                src="/assets/ButtonIcon.png"
                alt="button-Take-Test"
                width={50}
                height={50}
              />
              <p className="mr-0.5 tracking-tighter text-gray-700 font-semibold">DISCOVER A.I</p>
            </div>
          </div>
        </div>
  )
}

export default DiscoverBtn
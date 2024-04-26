import Link from "next/link";
const Navbar = () => {

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <div className="">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">Shihab</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.dev</span>
                </Link>
            </div>
            <div>
                <button className="w-10 h-8 flex flex-col justify-center ">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </button>
            </div>
            <div>3</div>
            <div>5</div>
            <div>6</div>
        </div>
    )
}

export default Navbar;
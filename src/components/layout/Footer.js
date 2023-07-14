export default function Footer() {
    return (
        <div className="w-full bg-sky-950 text-white pb-3 pt-6 px-3 lg:px-[6rem] flex flex-col divide-y">
            <div className="md:flex flex-wrap ">
                <div className="flex-1 md:flex sm:block ">
                    <div className="w-20 flex pl-4 sm:pb-3">
                        <a href="#" className="">
                            <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                        </a>
                    </div>
                    <div className="grid justify-between grid-cols-2 md:grid-cols-3 lg:pl-10 pl-5 lg:gap-x-[8rem] gap-x-[2rem] place-items-stretch">
                        <div className="flex flex-col space-y-2 sm:mb-5 w-[7rem] ">
                            <span>Item 1</span>
                            <span>Item 1</span>
                            <span>Item 1</span>
                            <span>Item 1</span>
                            <span>Item 1</span>
                        </div> <div className="flex flex-col space-y-2 w-[7rem] sm:mb-5  ">
                            <span>Item 1</span>
                            <span>Item 1</span>
                            <span>Item 1</span>
                            <span>Item 1</span>
                            <span>Item 1</span>
                        </div> <div className="flex flex-col space-y-2 w-[7rem] sm:mb-5 ">
                            <span>Item 1</span>
                            <span>Item 1</span>
                            <span>Item 1</span>
                            <span>Item 1</span>
                            <span>Item 1</span>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/5 basis-2/6">sdisadaisd sandisadoiaods dasdisndaiodas dsadiasdsado row2 col 2</div>
            </div>
            <div className="text-center pt-4 pb-2"> <span>&copy; 2015 RapidTables.com</span></div>
        </div>
    )
}
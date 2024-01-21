import logoimg from "./../assets/logo.png"
import menuBurgerPng from "./../assets/menu.png"
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <div className="fixed bg-black w-full overflow-hidden border-opacity-10 border-b-[1px] border-white">

      <div className={`px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1900px] w-full`}>

          <nav className="w-full flex py-2 justify-between items-center navbar">
            <img src={logoimg} className="w-[38px]" />
            <div className="text-xl font-Sora">DOGETHER</div>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              <li><Button variant="link">Home</Button></li>
              <li><Button variant="link">Wallets</Button></li>
              <li><Button variant="link">Miners</Button></li>
              <button type="button" className="text-white bg-[#b89509] hover:bg-[#cb9800] focus:outline-none font-medium rounded-full text-sm px-4 py-2.5 text-center me-2 mb-2">Buy Dogether</button>
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <Sheet>
                <SheetTrigger><img src={menuBurgerPng} className="w-[25px]" /></SheetTrigger>
                <SheetContent className="w-[300px] sm:w-[540px]">
                  <SheetHeader>
                    <SheetDescription>

                      <div className="flex flex-col items-center pt-10">
                        <Button variant="link" className="text-xl">Home</Button>
                        <Button variant="link" className="text-xl">Wallets</Button>
                        <Button variant="link" className="text-xl">Miners</Button>
                        {/* <Button variant="link" className="text-[#cb9800] font-bold text-xl">Buy Dogether</Button> */}
                        <button type="button" className="max-w-[300px] text-white bg-[#b89509] hover:bg-[#cb9800] focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">Buy Dogether</button>
                      </div>

                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
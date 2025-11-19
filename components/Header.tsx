import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";

const Header = () => {
    return (
        <header className="sticky top-0 bg-black z-50">
            <div className="container mx-auto flex justify-between items-center py-2">
                <Link href="/">
                    <Image
                        src="/assets/icons/logo.svg"
                        width={140}
                        height={32}
                        alt="logo"
                        className="h-8 w-auto cursor-pointer"
                    />
                </Link>

                <nav className="hidden sm:block">
                    <NavItems />
                </nav>

                <UserDropdown />
            </div>
        </header>
    )
}

export default Header;

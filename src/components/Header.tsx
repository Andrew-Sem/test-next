import React, {FC} from 'react';

export const Header: FC = () => {
    return (
        <header className={"bg-black flex items-center border-b border-gray-500/50 sticky top-0 h-header"}>
            <div className={"container mx-auto flex justify-between"}>
                <div className={"text-2xl text-white"}>
                    Header
                </div>
                <nav className={"space-x-6 flex text-gray-400 items-center font-mono"}>
                    <div className={"hover:text-gray-50 cursor-pointer duration-200"}>Home</div>
                    <div className={"hover:text-gray-50 cursor-pointer duration-200"}>About</div>
                    <div className={"hover:text-gray-50 cursor-pointer duration-200"}>Pricing</div>
                    <div className={"hover:text-gray-50 cursor-pointer duration-200"}>Features</div>
                </nav>
            </div>
        </header>
    );
}

"use client"
import { useEffect, useState } from "react";

export default function Home() {
    const [isArray, setIsArray] = useState<any[]>([]);

    const renderDivs = (obje: any[]): JSX.Element[] => {
        return obje.map((item, index) => {
            if (Array.isArray(item)) {
                return (
                    <div key={index} className="p-20 m-20 border-[black] border-[5px] max-w-[50rem]">
                        {renderDivs(item)}
                    </div>
                );
            } else {
                return (
                    <div
                        key={index}
                        style={{ backgroundColor: item.color }}
                        className="p-20 m-20 max-w-[10rem]"
                    >
                        {item.number}
                    </div>
                );
            }
        });
    };

    useEffect(() => {
        const obj = [{ color: "blue", number: 1 }, [{ color: "green", number: 12 }, [[], [], { color: "yellow", number: 4 }]]];
        setIsArray(obj);
    }, []);

    return (
        <div className="flex flex-col">
            {renderDivs(isArray)}
        </div>
    );
}
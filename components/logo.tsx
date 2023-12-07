import Image from 'next/image';

export function Logo(
    {image, title, subtitle} : {
    image: string;
    title: string;
    subtitle: string;
}) {
    return <div className="flex">
        <div className="bg-blue-200 h-3/5 p-4">
            <Image
                src={image}
                width={50}
                height={50}
                className="hidden md:block"
                alt="Image du logo"
            />
        </div>
        <div className="flex flex-col">
            <span className="font-bold">{title}</span>
            <span className="font-thin">{subtitle}</span>
        </div>
 
    </div>
}
import Image from "next/image"

interface AboutImageProp {
    src: string;
    alt: string;
    href: string;
}

const AboutImage = ({ src, alt, href }: AboutImageProp) => {
    return (
        <a 
            href={href}
            target="blank"
        >
            <Image
                src={src}
                alt={alt}
                className="mt-8 object-contain"
                width={70}
                height={70}
                priority={true}
            />
        </a>
    )
}

export default AboutImage;
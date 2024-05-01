import Image from "next/image"

interface AboutImageProp {
    src: string;
    alt: string;
}

const AboutImage = ({ src, alt }: AboutImageProp) => {
    return (
        <a 
            href="https://github.com/flizze" 
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
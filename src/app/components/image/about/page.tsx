import Image from "next/image"

const AboutImage = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <a href="https://github.com/flizze" target="blank">
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
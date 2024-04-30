import Image from "next/image";

const ImageComponent = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <div>
            <p className="text-green-500 w-full flex my-6 flex-col text-center">[{alt}]</p>
            <a href={src} target="blank">
                <Image
                    src={src}
                    draggable="false"
                    alt={alt}
                    className="mb-6"
                    width={1920}
                    height={1080}
                    priority={true}
                />
            </a>
        </div>
    );
};

export default ImageComponent;
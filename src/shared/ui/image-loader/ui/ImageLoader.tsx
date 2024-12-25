import Image, { ImageProps } from 'next/image'

export const ImageLoader = (props: ImageProps) => {
    return (
        <>
            <Image
                {...props}
                data-loaded='false'
                onLoad={event => {
                    event.currentTarget.setAttribute('data-loaded', 'true')
                }}
                className='data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
            />
        </>
    );
};

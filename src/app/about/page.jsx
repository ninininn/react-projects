//!About me
import Image from 'next/image';
import me from '../../../public/me.png';

export default function About() {
    return (
        <>
            <Image src={me} alt="me" width={200}></Image>
        </>
    );
}
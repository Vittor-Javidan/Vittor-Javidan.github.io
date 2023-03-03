import Link from "next/link";

export default function SocialMedia(): JSX.Element {
    return (
        <div
            className={`
                flex justify-end
                w-[100%]
            `}
        >
            <ul
                className={`
                    flex gap-[10px]
                    text-white
                    text-[6rem]
                `}
            >
                <li
                    className={`
                        hover:scale-[1.4]
                        hover:translate-y-[-10px]
                        hover:duration-[200ms]
                    `}
                >
                    <Link
                        className="tabIndex-1"
                        href="https://github.com/Vittor-Javidan"
                        target="_blank"
                    >
                        <i className="bx bxl-github"></i>
                    </Link>
                </li>
                <li
                    className={`
                        hover:scale-[1.4]
                        hover:translate-y-[-10px]
                        hover:duration-[200ms]
                    `}
                >
                    <Link
                        className="tabIndex-1"
                        href="https://www.linkedin.com/in/vittor-javidan/"
                        target="_blank"
                    >
                        <i className="bx bxl-linkedin-square"></i>
                    </Link>
                </li>
                <li
                    className={`
                        hover:scale-[1.4]
                        hover:translate-y-[-10px]
                        hover:duration-[200ms]
                    `}
                >
                    <Link
                        className={`
                            ACCESSIBILITY_lastWindowElement
                            tabIndex-1
                        `}
                        href="https://www.instagram.com/vittorjavidan/"
                        target="_blank"
                    >
                        <i className="bx bxl-instagram-alt"></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
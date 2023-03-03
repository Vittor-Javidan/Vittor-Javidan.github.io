import WindowBox from "@/components/WindowBox";
import Link from "next/link";

export default function AboutMeWindow(): JSX.Element {
    return (
        <WindowBox
            windowName="About Me"
            startVisible={true}
            startExpanded={false}
            CSS_PositionUtilityClass="CSS_AboutMe_Position"
        >
            <div
                className={`
                    flex flex-col items-center justify-between h-full
                `}
            >
                <div
                    className={`
                        flex flex-col items-center content-between 
                    `}
                >
                    <img 
                        src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/profilePic.jpg" 
                        alt="Profile picture" 
                        className={`
                            w-[300px] h-[300px] rounded-[50%]
                            border-solid border-2 border-gray-700 
                        `}
                    />
                    <div className={`
                        flex flex-col items-start content-between
                        text-white
                    `}>
                        <h1
                            className={`
                                text-[5rem]
                                w-auto m-auto mb-[20px]
                            `}
                        >
                            About me
                        </h1>
                        <p
                            className={`
                                mb-[20px]
                                first-letter:text-[2.5rem] 
                                first-letter:font-bold
                            `}
                        >
                            Hello, my name is Vittor Javidan. The bird in the
                            picture is Teca, my beloved and now deceased
                            cockatiel. May she rest peacefully with God.
                        </p>
                        <p
                            className={`
                                mb-[20px]
                                first-letter:text-[2.5rem] 
                                first-letter:font-bold
                            `}
                        >
                            As a programmer, I am currently focused on
                            technologies related to JavaScript. However, I have
                            also gained experience in other programming
                            languages such as Java, C++, C#, and Python. I am a
                            self-taught individual and I am constantly striving
                            to expand my knowledge and skills. My thirst for
                            learning is never-ending and I will continue to
                            study and explore new programming languages and
                            technologies
                        </p>
                        <p
                            className={`
                                mb-[20px]
                                first-letter:text-[2.5rem] 
                                first-letter:font-bold
                            `}
                        >
                            Welcome to my website! It is a place where I share
                            my projects with others. I invite you to take a look
                            at the results of my work. If you are interested in
                            how the projects function, you can find their
                            repositories on my GitHub profile. I hope you enjoy
                            your visit!
                        </p>
                    </div>
                </div>
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
            </div>
        </WindowBox>
    )
}
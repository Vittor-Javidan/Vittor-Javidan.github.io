export default function ProfilePicture(): JSX.Element {
    return (
        <img 
            src="https://raw.githubusercontent.com/Vittor-Javidan/Assets/main/profilePic.jpg" 
            alt="Profile picture" 
            className={`
                w-[300px] h-[300px] rounded-[50%]
                border-solid border-2 border-gray-700 
            `}
        />
    )
}

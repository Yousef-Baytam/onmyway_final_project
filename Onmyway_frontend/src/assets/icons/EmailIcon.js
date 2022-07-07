import Svg, { Path } from 'react-native-svg';

export default function EmailIcon() {

    return (
        <Svg
            width={25}
            height={50}
            viewBox="0 0 22 35"
            fill='#858585'
        >
            <Path fillRule="evenodd"
                d="M15.464 15.605A5 5 0 1 1 15 8V7h2v5c0 2.47.19 3 1 3 1.305 0 2-.617 2-3 0-5.29-2.652-8-8-8a8 8 0 1 0 4.693 14.48l1.173 1.62A10 10 0 1 1 11.999 2c6.462 0 10 3.616 10 10 0 3.545-1.64 5-4 5-1.343 0-2.112-.433-2.535-1.395ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            />
        </Svg>
    );
}
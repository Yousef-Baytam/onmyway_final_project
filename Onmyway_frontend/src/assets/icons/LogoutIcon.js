import Svg, { Path } from 'react-native-svg';

export default function LogoutIcon() {

    return (
        <Svg
            width={25}
            height={25}
            viewBox="0 0 48 48"
        >
            <Path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
            <Path
                d="M23.992 6H6v36h18M33 33l9-9-9-9M16 23.992h26"
                stroke="#fff"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
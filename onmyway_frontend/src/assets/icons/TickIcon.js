import Svg, { Path } from 'react-native-svg';

export default function TickIcon() {

    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 15 15"
            fill="none"
            strokeWidth={1.5}
            stroke="#92D293"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="m2.75 8.75 3.5 3.5 7-7.5" />
        </Svg>
    );
}
import Svg, { Path } from 'react-native-svg';

export default function ThreeDotsIcon() {

    return (
        <Svg
            width={4}
            height={20}
            viewBox="0 0 4 20"
            fill='#858585'
        >
            <Path
                d="M2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                fill="#000"
            />
        </Svg>
    );
}
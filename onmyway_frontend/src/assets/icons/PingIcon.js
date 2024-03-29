import Svg, { Path } from 'react-native-svg';

export default function PingIcon({ color }) {

    return (
        <Svg
            width={8}
            height={10}
            viewBox="0 0 8 10"
        >
            <Path
                d="M3.506 9.775C2.42 8.518 0 5.471 0 3.76 0 1.683 1.79 0 4 0c2.208 0 4 1.683 4 3.76C8 5.47 5.562 8.518 4.494 9.775c-.256.3-.731.3-.988 0ZM4 5.013c.735 0 1.333-.562 1.333-1.253 0-.692-.598-1.254-1.333-1.254s-1.333.562-1.333 1.254c0 .691.598 1.253 1.333 1.253Z"
                fill={color}
            />
        </Svg>
    );
}

PingIcon.defaultProps = {
    color: "#005A9C"
}
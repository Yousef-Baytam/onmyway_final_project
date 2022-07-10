import Svg, { Path } from 'react-native-svg';

export default function BackArrowIcon() {

    return (
        <Svg
            width={30}
            height={50}
            viewBox="0 0 28 30"
        >
            <Path
                d="m.513 12.764 7-7A1.75 1.75 0 1 1 9.987 8.24l-4.01 4.011H26.25a1.749 1.749 0 1 1 0 3.5H5.977l4.013 4.013a1.75 1.75 0 1 1-2.474 2.475l-7-7a1.745 1.745 0 0 1-.003-2.474Z"
                fill="#005A9C"
            />
        </Svg >
    );
}
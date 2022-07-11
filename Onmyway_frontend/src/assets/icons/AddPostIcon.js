import Svg, { Circle, Path } from 'react-native-svg';

export default function AddPostIcon() {

    return (
        <Svg
            width={30}
            height={50}
            viewBox="0 0 28 30"
        >
            <Circle cx={30} cy={30} r={30} fill="#005A9C" />
            <Path
                d="M36 30c0 .51-.413.923-.923.923h-4.154v4.154a.923.923 0 1 1-1.846 0v-4.154h-4.154a.923.923 0 0 1 0-1.846h4.154v-4.154a.923.923 0 1 1 1.846 0v4.154h4.154c.51 0 .923.412.923.923Z"
                fill="#fff"
            />
        </Svg >
    );
}
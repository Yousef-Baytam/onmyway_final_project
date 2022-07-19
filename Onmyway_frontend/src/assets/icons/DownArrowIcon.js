import Svg, { Path } from 'react-native-svg';

export default function DownArrowIcon() {

    return (
        <Svg
            width={25}
            height={25}
            viewBox="0 0 500 500"
            fill='#A1CCE4'
        >
            <Path d="M227.5 0C101.855 0 0 101.855 0 227.5S101.855 455 227.5 455 455 353.145 455 227.5 353.145 0 227.5 0zm0 327.148L99.411 199.476l21.178-21.248L227.5 284.791l106.911-106.563 21.178 21.248L227.5 327.148z" />
        </Svg>
    );
}
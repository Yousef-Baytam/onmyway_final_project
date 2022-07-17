import Svg, { Path } from 'react-native-svg';

export default function ArrowHeadIcon() {

    return (
        <Svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill='#858585'
        >
            <Path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
        </Svg>
    );
}
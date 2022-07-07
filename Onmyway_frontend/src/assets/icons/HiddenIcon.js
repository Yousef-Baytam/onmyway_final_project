import Svg, { Path } from 'react-native-svg';

export default function HiddenIcon() {

    return (
        <Svg
            width={30}
            height={38}
            viewBox="0 0 34 34"
            style={{
                fill: 'none', stroke: '#858585', borderBottomWidth: 0.2, borderColor: 'rgba(0,0,0, 0.7)'
            }}
            strokeLinecap='round'
            strokeLinejoin='bevel'
            strokeWidth={1.5}
        >
            <Path
                className="cls-1"
                d="m3.86 10.23-1.27 2.23M7.72 13.26l-1.43 2.51M20.14 10.32l1.27 2.24M16.26 13.32l1.45 2.54M11.91 14.38v2.33M3 9.29h0c5.52 6.7 12.25 6.79 17.8.24l.2-.24"
            />
        </Svg >
    );
}
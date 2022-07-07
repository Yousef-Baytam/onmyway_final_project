import Svg, { Path } from 'react-native-svg';

export default function PhoneIcon() {

    return (
        <Svg
            width={25}
            height={50}
            viewBox="0 0 550 1100"
            fill='#858585'
        >
            <Path d="m511.2 387-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45L125.02.8c14.68-3.402 29.68 4.218 35.78 18.12l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
        </Svg>
    );
}
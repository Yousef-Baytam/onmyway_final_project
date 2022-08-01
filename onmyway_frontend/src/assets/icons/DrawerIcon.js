import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../../context/ThemeContext';

export default function DrawerIcon() {
    const { theme } = useTheme()

    return (
        <Svg
            width={50}
            height={50}
            viewBox="0 0 50 50"
        >
            <Path
                d="M0 1.813C0 .812.928 0 2.071 0H26.93C28.074 0 29 .812 29 1.813c0 1.002-.926 1.812-2.071 1.812H2.07C.928 3.625 0 2.815 0 1.812Zm0 9.062c0-1.003.928-1.813 2.071-1.813H26.93c1.145 0 2.071.81 2.071 1.813 0 1.002-.926 1.813-2.071 1.813H2.07C.928 12.688 0 11.877 0 10.874ZM26.929 21.75H2.07C.928 21.75 0 20.94 0 19.937c0-1.002.928-1.812 2.071-1.812H26.93c1.145 0 2.071.81 2.071 1.813 0 1.002-.926 1.812-2.071 1.812Z"
                fill={theme.themeBlue}
            />
        </Svg>
    );
}
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../../context/ThemeContext';

export default function ThreeDotsIcon() {
    const { theme } = useTheme()

    return (
        <Svg
            width={40}
            height={20}
            viewBox="0 0 4 20"
            fill={theme.outline}
        >
            <Path
                d="M2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            />
        </Svg>
    );
}
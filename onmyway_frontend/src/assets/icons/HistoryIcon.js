import Svg, { Path } from 'react-native-svg';

export default function HistoryIcon() {

    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill='#858585'
        >
            <Path
                d="M9 .48c4.971 0 9 4.122 9 9.206 0 5.085-4.029 9.206-9 9.206a8.839 8.839 0 0 1-5.143-1.65c-.51-.396-.635-1.083-.278-1.604a1.107 1.107 0 0 1 1.564-.284A6.612 6.612 0 0 0 9 16.59c3.727 0 6.75-3.093 6.75-6.905 0-3.844-3.023-6.904-6.75-6.904-1.895 0-3.55.772-4.774 2.021l1.083 1.108c.53.543.154 1.474-.595 1.474H.844A.853.853 0 0 1 0 6.522V2.564c0-.769.909-1.154 1.44-.61l1.196 1.223C4.264 1.512 6.514.48 8.968.48H9Zm0 4.604c.468 0 .844.384.844.863V9.33l2.253 2.334c.359.338.359.885 0 1.19-.299.367-.833.367-1.163 0l-2.532-2.589c-.158-.129-.246-.348-.246-.579v-3.74c0-.478.376-.862.844-.862Z"
                fill="#005A9C"
            />
        </Svg>
    );
}
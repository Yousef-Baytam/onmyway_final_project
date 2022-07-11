import Svg, { Path } from 'react-native-svg';

export default function TargetIcon() {

    return (
        <Svg
            width={50}
            height={30}
            viewBox="0 0 20 25"
        >
            <Path
                d="M7.906 11.913c0-2.025 1.608-3.665 3.594-3.665 1.986 0 3.594 1.64 3.594 3.665 0 2.024-1.608 3.664-3.594 3.664-1.986 0-3.594-1.64-3.594-3.664ZM11.5.187c.795 0 1.438.657 1.438 1.466V3.24c3.611.618 6.464 3.524 7.066 7.207h1.558c.796 0 1.438.655 1.438 1.466 0 .81-.642 1.465-1.438 1.465h-1.558c-.602 3.683-3.455 6.591-7.067 7.205v1.59c0 .81-.642 1.465-1.437 1.465s-1.438-.655-1.438-1.466v-1.589c-3.611-.614-6.462-3.522-7.068-7.205H1.437C.644 13.378 0 12.723 0 11.913c0-.811.644-1.466 1.438-1.466h1.556c.606-3.683 3.457-6.59 7.069-7.207V1.653c0-.81.642-1.466 1.437-1.466ZM5.75 11.913c0 3.238 2.574 5.862 5.75 5.862s5.75-2.624 5.75-5.862c0-3.239-2.574-5.863-5.75-5.863s-5.75 2.624-5.75 5.863Z"
                fill="#005A9C"
            />
        </Svg>
    );
}
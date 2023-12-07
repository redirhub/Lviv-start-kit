import { Icon } from '@chakra-ui/react';

export default function NoData({ width = '56px', height = '56px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 240 160" fill="#135280" {...props}>
            <g fill-rule="evenodd" transform="">
                <g>
                    <g>
                        <circle cx="84.666667" cy="62" opacity=".02" r="62"></circle>
                        <circle cx="194.666667" cy="64" opacity=".06" r="24"></circle>
                        <circle cx="112.666667" cy="148" opacity=".08" r="12"></circle>
                    </g>

                    <path d="m0 4c0-2.20914 1.79086-4 4-4h18c2.2091 0 4 1.79086 4 4v34h-26z" fill-rule="nonzero" opacity=".05" transform="translate(56 96)"></path>
                    <path d="m0 4c0-2.20914 1.79086-4 4-4h18c2.2091 0 4 1.79086 4 4v56h-26z" fill-rule="nonzero" opacity=".25" transform="translate(90 74)"></path>
                    <path d="m0 4c0-2.20914 1.79086-4 4-4h18c2.2091 0 4 1.79086 4 4v90h-26z" fill-rule="nonzero" opacity=".35" transform="translate(124 40)"></path>
                    <path d="m0 4c0-2.20914 1.79086-4 4-4h18c2.2091 0 4 1.79086 4 4v102h-26z" fill-rule="nonzero" opacity=".45" transform="translate(158 28)"></path>
                </g>
                <path d="m40 137c0-1.65685 1.34315-3 3-3h154c1.657 0 3 1.34315 3 3s-1.343 3-3 3h-154c-1.65685 0-3-1.34315-3-3z" fill="#e8e9ea" fill-rule="nonzero"></path>
            </g>
        </Icon>
    );
}

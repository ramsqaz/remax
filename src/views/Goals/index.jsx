import React from "react";

import { Container, Title, Text, FlexBox, Grid, Block } from "../../components";
import avatar from "../../assets/images/avatar.png";
import flag from "../../assets/images/flag.png";

import "./styles.scss";
import useAdaptive from "../../hooks/useAdaptive";

const Goals = () => {
    const isMobile = useAdaptive() 
    return (
        <div className="goals">
            <Container>
                <FlexBox direction="column" gap={isMobile ? 30 : 50}>
                    <FlexBox direction="column" gap={20}>
                        <Title iconColor="red-500" textColor="white">Миссия и цель</Title>
                        <Text withAnimation as={isMobile ? "h2" : "h1"} color="white">RE/MAX Сегодня</Text>
                    </FlexBox>
                    <FlexBox direction="column" gap={20}>
                        <Grid columns={isMobile ? 1 : 3} gap={20}>
                            <FlexBox direction="column" gap={20}>
                                <Block p={isMobile ? 30 : 40} height={186}>
                                    <FlexBox direction="column" gap={10}>
                                        <Text weight={600}>Наша цель</Text>
                                        <Text>Быть лидером рынка недвижимости в Казахстане и лучшим выбором для брокеров, агентов и клиентов</Text>
                                    </FlexBox>
                                </Block>
                                <Block p={isMobile ? 20 : "32px 71px"} height={238}>
                                    <FlexBox align="center" height="100%" justify="center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="131" height="106" viewBox="0 0 131 106" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M74.5826 43.0959C78.7068 47.3379 84.3334 49.459 91.4624 49.459C97.5898 49.459 102.421 48.0155 105.956 45.1285C109.491 42.1827 111.877 38.4709 113.115 33.9931H99.8581C98.8565 35.525 97.7666 36.6444 96.5882 37.3514C95.4099 38.0584 93.7013 38.4119 91.4624 38.4119C85.7474 38.4119 82.3597 35.3188 81.2991 29.1324H113.556L113.998 24.2718C113.998 17.3784 111.936 11.7518 107.812 7.39192C103.688 3.03203 98.2379 0.852081 91.4624 0.852081C84.3334 0.852081 78.7068 3.00257 74.5826 7.30354C70.5173 11.5456 68.4846 17.4963 68.4846 25.1555C68.4846 32.8148 70.5173 38.7949 74.5826 43.0959ZM101.184 19.853H81.2991C82.8899 14.5504 86.2777 11.8991 91.4624 11.8991C94.1137 11.8991 96.2642 12.665 97.9139 14.1969C99.6225 15.7287 100.712 17.6141 101.184 19.853ZM0 1.73584L12.8145 48.5752H27.3966L35.3505 18.9692H35.7923L43.7462 48.5752H57.4445L70.259 1.73584H58.3283L50.3744 33.1094H49.9325L41.9787 1.73584H29.1641L21.2103 33.1094H20.7684L12.8145 1.73584H0ZM31.3368 94.9847C34.2238 94.9847 36.551 94.1893 38.3185 92.5986C40.145 90.9489 41.0582 88.7984 41.0582 86.1471V84.8215H30.453C28.3909 84.8215 26.8296 85.2928 25.7691 86.2355C24.7675 87.1193 24.2667 88.2682 24.2667 89.6822C24.2667 91.2729 24.8559 92.5691 26.0342 93.5707C27.2126 94.5134 28.9801 94.9847 31.3368 94.9847ZM28.2436 105.148C23.2357 105.148 19.2587 103.793 16.3129 101.083C13.367 98.3725 11.894 94.8669 11.894 90.5659C11.894 86.206 13.4554 82.7004 16.578 80.0492C19.7595 77.339 24.2372 75.9839 30.0112 75.9839H41.0582V73.7745C41.0582 71.5945 40.3512 69.9448 38.9371 68.8254C37.5231 67.706 35.5788 67.1462 33.1043 67.1462C31.3957 67.1462 29.8933 67.5292 28.5971 68.2951C27.3599 69.0611 26.5056 70.0037 26.0342 71.1232H13.6616C14.6632 66.94 16.8137 63.4639 20.113 60.6948C23.4713 57.9257 27.949 56.5411 33.5462 56.5411C39.7914 56.5411 44.6521 58.073 48.1283 61.1367C51.6633 64.2004 53.4308 68.5603 53.4308 74.2163V104.264H42.8257L41.5001 98.9617H41.0582C38.2891 103.086 34.0175 105.148 28.2436 105.148ZM57.3801 104.264V57.4249H67.9853L69.3109 62.7274H69.7528C72.1095 59.1924 75.7918 57.4249 80.7998 57.4249H86.5443V69.3557H81.6836C77.9718 69.3557 75.0554 70.3867 72.9343 72.4488C70.8133 74.5109 69.7528 77.3095 69.7528 80.8446V104.264H57.3801ZM90.9403 98.7849C95.0645 103.027 100.691 105.148 107.82 105.148C113.948 105.148 118.779 103.705 122.314 100.818C125.849 97.8717 128.235 94.1599 129.472 89.6822H116.216C115.214 91.214 114.124 92.3335 112.946 93.0405C111.768 93.7475 110.059 94.101 107.82 94.101C102.105 94.101 98.7174 91.0078 97.6569 84.8215H129.914L130.356 79.9608C130.356 73.0675 128.294 67.4408 124.17 63.0809C120.045 58.7211 114.596 56.5411 107.82 56.5411C100.691 56.5411 95.0645 58.6916 90.9403 62.9926C86.875 67.2346 84.8423 73.1853 84.8423 80.8446C84.8423 88.5038 86.875 94.4839 90.9403 98.7849ZM117.542 75.542H97.6569C99.2476 70.2394 102.635 67.5881 107.82 67.5881C110.471 67.5881 112.622 68.3541 114.272 69.8859C115.98 71.4178 117.07 73.3031 117.542 75.542Z" fill="#003DA5"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="94" height="118" viewBox="0 0 94 118" fill="none">
                                            <path d="M41.362 106.778C40.9856 106.778 40.6295 106.634 40.3597 106.373L35.4312 101.525C33.6375 99.735 31.8417 97.9129 30.0946 96.1098L29.3638 95.3555L28.7081 94.6742L28.0497 93.9871L27.3883 93.2948L26.7259 92.5972L26.0634 91.895L25.3955 91.1866L24.7342 90.4798L24.0702 89.767L23.4056 89.0488L22.7514 88.3392L22.1016 87.6295C21.9288 87.4403 21.4526 86.9172 21.4526 86.9172C21.2761 86.723 20.8286 86.2273 20.8286 86.2273C20.642 86.0217 20.2603 85.5962 20.2504 85.5859C11.5482 75.884 6.19434 68.6231 4.33718 64.0011L4.2514 63.7902C4.1859 63.6295 4.15562 63.5545 4.04878 63.2707C4.0417 63.2489 4.03455 63.2283 4.02792 63.207C4.02629 63.2015 3.97632 63.0683 3.94402 62.9818C3.92862 62.9371 3.91374 62.891 3.9023 62.8448C3.8986 62.8317 3.89405 62.8197 3.88989 62.8067C2.25693 58.5125 1.09486 53.4568 0.617733 48.5707C-0.0104169 42.1373 0.494393 36.0795 2.11663 30.565C2.12261 30.546 2.12787 30.5276 2.1345 30.5095C2.1345 30.5095 2.22184 30.2502 2.22366 30.2448C3.00381 27.5223 4.19707 24.7468 5.76979 21.9946C8.84938 16.7015 12.2217 13.3485 14.5072 11.4686C16.6555 9.70173 18.8182 8.44472 20.2919 8.10744C20.352 8.09347 20.4082 8.06416 20.4544 8.02264C25.7096 3.2308 31.7964 2.5155 34.9564 2.5155C35.499 2.5155 36.0241 2.53565 36.5167 2.57672C36.5266 2.57717 36.5369 2.57763 36.547 2.57763C36.6215 2.57763 36.6935 2.55449 36.7556 2.51115C39.9604 0.242177 44.4968 -0.00262451 46.2985 -0.00262451C46.5097 -0.00262451 46.6823 0.000105008 46.8116 0.00400414H46.8311C46.9597 0.000105008 47.1326 -0.00262451 47.3446 -0.00262451C49.1466 -0.00262451 53.6828 0.242177 56.8876 2.51115C56.949 2.55449 57.0215 2.57763 57.0958 2.57763C57.1058 2.57763 57.1154 2.57717 57.1256 2.57672C57.6182 2.53565 58.1435 2.5155 58.6863 2.5155C61.8489 2.5155 67.9406 3.23216 73.1979 8.03134C73.243 8.07241 73.2979 8.10153 73.3572 8.1155C74.8783 8.47701 76.9842 9.69965 79.1358 11.4686C81.4213 13.3489 84.7922 16.6997 87.8672 21.9852C89.4731 24.7953 90.6774 27.5831 91.4454 30.2697C91.4582 30.3131 91.4903 30.4244 91.4903 30.4244C91.4919 30.4309 91.5305 30.5471 91.5359 30.5657C91.5747 30.6973 91.6116 30.8314 91.6479 30.9651L91.7283 31.2557C91.7561 31.3532 91.7829 31.449 91.8086 31.5453C91.8599 31.737 91.9073 31.927 91.9544 32.1173L91.9885 32.2507C92.0307 32.4208 92.0736 32.5907 92.1141 32.7606C92.138 32.8617 92.1593 32.9626 92.182 33.0636L92.2082 33.1835C92.267 33.4431 92.3248 33.7026 92.3778 33.9626C92.3893 34.0141 92.4241 34.2017 92.4241 34.2017C92.4981 34.5696 92.5548 34.8715 92.6043 35.1542L92.613 35.2106C92.9945 37.4105 93.2182 39.6976 93.2764 42.0105V42.0369C93.2868 42.4101 93.2914 42.7644 93.2923 43.0979C93.3349 52.4959 90.7941 60.1269 89.6996 62.9722C89.6549 63.0967 89.6178 63.1937 89.5871 63.2746C89.483 63.5571 89.4516 63.632 89.3878 63.7876L89.3049 63.994C89.2709 64.0802 89.2363 64.159 89.2026 64.2382C89.2026 64.2382 89.1137 64.4511 89.0955 64.4924C89.0781 64.53 89.0318 64.6336 89.016 64.6698C88.9653 64.7835 88.9197 64.8838 88.8718 64.986C88.8331 65.0683 88.7968 65.1435 88.7609 65.2184C88.751 65.2388 88.6393 65.4674 88.6341 65.4786C88.5772 65.5912 88.5187 65.7073 88.4596 65.8232L88.3936 65.9495C88.0948 66.5229 87.7523 67.1327 87.3757 67.7609L87.3676 67.7751C84.8445 71.9836 80.4987 77.5746 74.4501 84.3947C74.4453 84.3995 74.4228 84.4256 74.4228 84.4256C74.1977 84.6792 73.9718 84.933 73.7451 85.1865L73.7236 85.2104C73.5028 85.4575 73.2765 85.7097 73.0496 85.9619L73.0301 85.9846C72.8008 86.239 72.5757 86.4871 72.3501 86.7372L72.3235 86.7661C72.0956 87.0174 71.8707 87.265 71.6443 87.5121L71.6073 87.5531C71.39 87.7913 71.1647 88.0366 70.9386 88.2828L70.9102 88.3142C70.6809 88.5642 70.4572 88.8071 70.2325 89.0501L70.1903 89.0965C69.9682 89.337 69.7419 89.5799 69.5156 89.8236L69.4906 89.8505C69.2621 90.0969 69.0335 90.3422 68.8052 90.5857C68.8056 90.5857 68.3214 91.1031 68.0935 91.3457L67.3629 92.1203C67.1341 92.3631 66.6591 92.8647 66.6591 92.8647C60.9048 98.9239 55.8066 103.928 53.2803 106.372C53.01 106.634 52.6537 106.778 52.2768 106.778H41.362Z" fill="white"/>
                                            <path d="M43.8144 118.003C43.3827 118.003 43.0035 117.715 42.8877 117.299L41.3402 111.75C40.8739 111.673 40.5186 111.267 40.5186 110.779V110.089C40.5186 109.546 40.9599 109.105 41.5028 109.105H52.354C52.8978 109.105 53.3392 109.546 53.3392 110.089V110.779C53.3392 111.274 52.9726 111.685 52.4955 111.754L50.9494 117.299C50.8332 117.715 50.4543 118.003 50.0223 118.003H43.8144Z" fill="white"/>
                                            <path d="M58.5565 117.206C56.4389 117.206 54.7791 115.559 54.7791 113.457C54.7791 111.398 56.4737 109.722 58.5565 109.722C60.6365 109.722 62.3174 111.398 62.3174 113.457C62.3174 115.559 60.6654 117.206 58.5565 117.206Z" fill="white"/>
                                            <path d="M58.57 110.083C60.457 110.083 61.9563 111.584 61.9563 113.458C61.9563 115.36 60.457 116.846 58.5558 116.846C56.6709 116.846 55.1401 115.36 55.1401 113.458C55.1401 111.584 56.6709 110.083 58.5558 110.083H58.57Z" fill="white"/>
                                            <path d="M5.39755 62.4846C5.53142 62.851 5.53259 62.8402 5.66854 63.1804C7.23047 67.1094 11.3559 72.7722 16.3999 78.8011C22.4177 86.0279 29.6598 93.6424 35.2461 99.2612C37.3242 101.366 39.2213 103.247 40.824 104.814C40.8318 104.821 40.8389 104.828 40.8461 104.834C40.9675 104.952 41.0863 105.067 41.2041 105.181H41.2683L46.6622 105.201H46.6718L51.7927 105.22L52.1316 105.221C60.8985 96.8035 79.3842 78.1984 86.13 67.0328C86.4933 66.4253 86.8224 65.8411 87.114 65.2809C87.1449 65.2231 87.1754 65.1646 87.2045 65.1073C87.2513 65.016 87.2967 64.9248 87.3416 64.8349C87.3801 64.756 87.4182 64.6777 87.4562 64.6002C87.4929 64.524 87.5294 64.4489 87.564 64.3728C87.6094 64.2763 87.6529 64.1822 87.6947 64.0878C87.7208 64.0296 87.7474 63.9713 87.7724 63.9142C87.8389 63.7618 87.9028 63.6105 87.9627 63.4631C87.9792 63.4207 87.994 63.3845 88.0076 63.351C88.0562 63.2308 88.0853 63.163 88.1167 63.0807C88.1793 62.8959 88.2192 62.7535 88.2123 62.7462C91.1037 55.3858 93.7105 42.6699 90.061 30.6783C90.0681 30.6877 81.2973 6.90689 47.0058 6.90689C16.3969 5.86816 3.74991 30.5258 3.74991 30.5258L3.74738 31.1419L3.59927 30.9725C0.126512 42.7742 2.61142 55.223 5.4058 62.4743C5.40353 62.4775 5.39937 62.4814 5.39755 62.4846Z" fill="white"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M75.0647 63.8073C67.8127 81.8909 55.644 100.67 53.0605 104.573C58.4079 99.3706 66.7647 90.9451 74.0376 82.6805C75.1697 81.384 76.2788 80.0862 77.3492 78.7998C82.1557 73.0558 86.1262 67.6441 87.8417 63.7493C87.8818 63.6539 87.924 63.5569 87.9623 63.4634C88.0198 63.318 88.0538 63.2369 88.0829 63.1637C88.0609 63.2126 88.0496 63.2341 88.1069 63.0769C88.1047 63.0748 88.1803 62.9345 88.3438 62.4742C91.1388 55.2231 93.6226 42.7748 90.1505 30.9725L89.9997 30.5262C89.9997 30.5262 84.9313 20.6519 73.4541 13.6642C75.843 22.2987 81.7073 47.2404 75.0647 63.8073Z" fill="url(#paint0_linear_42_759)"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M40.6154 104.611H40.6157C38.0883 100.794 25.8624 81.9509 18.587 63.8073C11.9435 47.2404 17.8088 22.2987 20.198 13.6642C8.72087 20.6519 3.65271 30.5262 3.65271 30.5262L3.50168 30.9725C0.0289185 42.7748 2.51358 55.2231 5.30815 62.4742C5.30568 62.4776 5.30178 62.4815 5.29971 62.4838C5.43384 62.851 5.43494 62.84 5.57089 63.1811C7.13281 67.1095 11.258 72.772 16.3023 78.7998C17.9105 80.7315 19.6059 82.6905 21.334 84.6318C28.1871 92.2704 35.6892 99.8188 40.6154 104.611Z" fill="url(#paint1_linear_42_759)"/>
                                            <path d="M46.8209 1.44849C45.7582 1.41385 40.2852 1.37557 37.0714 4.08976C37.0714 4.08976 28.1253 2.63148 21.0326 9.45841C19.3451 9.44762 12.4639 13.3611 7.02308 22.7109C5.54758 25.2944 4.37518 27.965 3.59912 30.6828C4.67457 29.26 8.80115 23.6128 17.5312 24.4053C18.1394 23.931 23.5848 18.0091 34.8828 20.0658C36.4238 18.4509 42.0956 16.7269 46.8209 16.6669C51.5468 16.7269 57.219 18.4509 58.7601 20.0658C70.0578 18.0091 75.503 23.931 76.1114 24.4053C84.8419 23.6128 88.9859 29.2559 90.0609 30.6787C89.2851 27.9609 88.095 25.2944 86.6196 22.7109C81.1787 13.3611 74.2978 9.44762 72.6094 9.45841C65.5176 2.63148 56.5709 4.08976 56.5709 4.08976C53.3575 1.37557 47.8845 1.41385 46.8209 1.44849Z" fill="#D80C21"/>
                                            <path d="M37.0713 4.08976C37.0713 4.08976 28.1255 2.63129 21.0338 9.45893C19.3451 9.44723 12.4645 13.3611 7.02425 22.7114C5.54739 25.294 4.3757 27.9648 3.6001 30.6824C4.67437 29.2605 8.80167 23.6128 17.5317 24.405C18.139 23.932 23.5663 18.0305 34.8221 20.0557C35.9003 10.9867 37.0713 4.08976 37.0713 4.08976Z" fill="#C40E1D"/>
                                            <path d="M17.5312 24.405C17.536 24.4014 17.5419 24.396 17.5472 24.3915C19.1728 15.9045 21.0333 9.45898 21.0333 9.45898C19.345 9.44728 12.4637 13.3611 7.02302 22.7113C5.54758 25.2941 4.37518 27.9647 3.59912 30.6825C4.67457 29.2606 8.80115 23.613 17.5312 24.405Z" fill="#A61218"/>
                                            <path d="M56.5713 4.08976C56.5713 4.08976 65.517 2.63129 72.6088 9.45893C74.297 9.44724 81.1781 13.3611 86.6185 22.7114C88.0945 25.294 89.2843 27.9604 90.0604 30.6783C88.9846 29.2562 84.8414 23.6129 76.1106 24.405C75.5033 23.932 70.0765 18.0305 58.8205 20.0557C57.7432 10.9867 56.5713 4.08976 56.5713 4.08976Z" fill="#C40E1D"/>
                                            <path d="M76.111 24.405C76.1062 24.4014 76.1005 24.396 76.0945 24.3915C74.4688 15.9045 72.6091 9.45898 72.6091 9.45898C74.298 9.44728 81.1784 13.3611 86.6191 22.7113C88.0946 25.2941 89.2851 27.9605 90.0607 30.6781C88.9855 29.2562 84.8415 23.613 76.111 24.405Z" fill="#A61218"/>
                                            <path d="M46.9712 110.544H46.8524H41.9858L42.0472 110.703L43.8146 117.041H46.9712V110.544Z" fill="#3C3C3B"/>
                                            <path d="M46.8655 110.544H46.9845H51.8516L51.7894 110.703L50.0225 117.041H46.8655V110.544Z" fill="#636362"/>
                                            <path d="M52.3547 110.801H41.5032C41.4912 110.801 41.481 110.791 41.481 110.778V110.089C41.481 110.077 41.4912 110.066 41.5032 110.066H52.3547C52.3673 110.066 52.3774 110.077 52.3774 110.089V110.778C52.3774 110.791 52.3673 110.801 52.3547 110.801Z" fill="#636362"/>
                                            <path d="M51.712 110.985L51.7634 110.801H42.0696L42.1335 110.985H51.712Z" fill="#3C3C3B"/>
                                            <path d="M76.7961 57.7737C76.6643 57.7737 71.148 52.0055 60.1495 53.0117C59.5427 52.6446 55.4642 50.4871 46.8195 50.0231C38.8605 50.1891 34.0954 52.6446 33.4895 53.0117C22.4917 52.0055 16.9754 57.7737 16.842 57.7737C10.2357 57.592 5.79669 62.2268 5.40308 62.7678C5.53812 63.1328 5.53993 63.1227 5.67634 63.4639C9.81117 73.7505 31.6153 95.9073 41.3628 105.335H46.8195H52.2769C62.0241 95.9073 83.8276 73.7505 87.9627 63.4639C88.0998 63.1227 88.1004 63.1328 88.2353 62.7678C87.8423 62.2268 83.4028 57.592 76.7961 57.7737Z" fill="#024490"/>
                                            <path d="M60.1491 53.0117C71.1479 52.0052 76.664 57.7737 76.7958 57.7737C83.4026 57.592 87.8426 62.2261 88.2358 62.7674C88.1001 63.1328 88.0994 63.1222 87.9623 63.463C83.8279 73.7514 62.024 95.9061 52.2765 105.334H49.2791C56.8598 89.0548 59.6069 70.0666 60.1485 53.011L60.1491 53.0117Z" fill="#033A7E"/>
                                            <path d="M76.7963 57.7736C83.4027 57.5918 87.8425 62.2261 88.2361 62.7672C88.1006 63.1328 88.0992 63.1221 87.9628 63.4632C83.8278 73.7513 62.0236 95.9066 52.2766 105.334C52.2766 105.334 66.7064 84.1908 74.9258 63.9096C75.7129 61.9668 76.3275 59.9084 76.7963 57.7736Z" fill="#04326C"/>
                                            <path d="M33.4883 53.0117C22.4898 52.0052 16.9735 57.7737 16.8412 57.7737C10.2346 57.592 5.79482 62.2261 5.40186 62.7674C5.53761 63.1328 5.53826 63.1222 5.67519 63.463C9.8095 73.7514 31.6139 95.9061 41.3609 105.334H44.3587C36.7777 89.0548 34.0303 70.0666 33.489 53.011L33.4883 53.0117Z" fill="#033A7E"/>
                                            <path d="M16.8431 57.7736H16.8424C10.2357 57.5918 5.79578 62.2261 5.40308 62.7672C5.53857 63.1328 5.53993 63.1221 5.67634 63.4632C9.81117 73.7513 31.6153 95.9066 41.3621 105.334C41.3621 105.334 26.9321 84.1908 18.7129 63.9096C17.9263 61.9668 17.3117 59.9084 16.8431 57.7736Z" fill="#04326C"/>
                                            <path d="M19.9685 37.2482C19.9685 37.2549 19.969 37.2583 19.969 37.2654C20.0185 38.3808 19.3016 39.2739 18.0618 39.6905C17.3185 39.9413 16.9488 40.0701 16.2105 40.3363C16.1383 38.9071 16.1026 38.1923 16.0306 36.7632C16.7511 36.5031 17.1127 36.3768 17.8378 36.132C19.1764 35.6811 19.9165 36.0829 19.9685 37.2482ZM22.7039 36.3881C22.7028 36.3603 22.7021 36.3459 22.701 36.3188C22.654 35.1279 22.239 34.2388 21.5006 33.7622C20.6627 33.2218 19.4396 33.175 17.9761 33.6641C16.3777 34.1932 14.7866 34.7734 13.2231 35.3979C13.4473 39.4876 13.672 43.5766 13.8965 47.6656C14.9451 47.2506 15.4728 47.0511 16.5301 46.6701C16.4492 45.0681 16.4093 44.2671 16.3277 42.6653C16.9386 42.445 17.2447 42.3379 17.858 42.1286C18.8506 43.42 19.3449 44.0734 20.3316 45.3925C21.5572 45.0108 22.1721 44.8308 23.4077 44.4925C22.4616 43.2217 21.5047 41.9578 20.537 40.7036C21.9007 39.6804 22.7803 38.1265 22.7039 36.3881Z" fill="#024490"/>
                                            <path d="M64.6266 37.8616C63.567 37.6599 63.036 37.5672 61.9716 37.3973C62.5427 35.9677 62.8292 35.2549 63.4056 33.8347C63.8978 35.442 64.1422 36.2477 64.6266 37.8616ZM62.218 29.9757C60.5486 33.903 58.9127 37.843 57.3079 41.797C58.4223 41.9178 58.9778 41.9868 60.0881 42.1422C60.4826 41.128 60.6795 40.622 61.0762 39.6122C62.81 39.8726 63.6748 40.0239 65.3978 40.3685C65.7451 41.5086 65.9184 42.0792 66.2614 43.2234C67.3912 43.4611 67.9538 43.5891 69.0769 43.8637C67.7055 39.3761 66.2976 34.9012 64.8511 30.4374C63.8004 30.2373 63.2733 30.1453 62.218 29.9757Z" fill="#024490"/>
                                            <path d="M77.6577 40.0165C78.9385 38.4441 80.2368 36.8856 81.5513 35.342C80.3604 34.8727 79.762 34.6488 78.5597 34.2223C77.6274 35.4771 77.162 36.1107 76.2349 37.3908C75.5967 35.865 74.9497 34.3415 74.2943 32.8234C73.0487 32.4476 72.4231 32.271 71.1674 31.9403C72.3114 34.2932 73.4371 36.6557 74.5354 39.0298C73.1842 40.7497 71.8529 42.4845 70.5396 44.2337C71.7415 44.5484 72.3415 44.7158 73.5347 45.0721C74.5107 43.6894 75.0002 43.0049 75.9832 41.6497C76.6717 43.2747 77.3495 44.9045 78.0176 46.5377C79.2246 46.967 79.825 47.1931 81.0196 47.666C79.9259 45.1044 78.8021 42.5555 77.6577 40.0165Z" fill="#024490"/>
                                            <path d="M28.9931 40.7432C28.9617 39.6909 28.9458 39.1645 28.9145 38.1126C30.5495 37.7703 32.2045 37.4768 33.8574 37.2345C33.8361 36.2753 33.8258 35.795 33.8047 34.8358C32.146 35.0795 30.4846 35.3743 28.8429 35.7175C28.8127 34.7006 28.7971 34.192 28.7666 33.1751C30.655 32.8069 32.5323 32.4805 34.4342 32.1895C34.4145 31.2296 34.4046 30.7507 34.3851 29.7908C31.544 30.223 28.7411 30.7548 25.939 31.3912C26.0793 35.5066 26.2209 39.6217 26.3615 43.738C28.0543 43.3299 29.7707 42.9732 31.4857 42.6729C31.9612 41.6261 32.1997 41.1036 32.6795 40.0621C31.2008 40.3045 30.4633 40.4404 28.9931 40.7432Z" fill="#024490"/>
                                            <path d="M52.3203 28.9945C51.3528 30.2896 50.3971 31.5936 49.4541 32.9061C48.5064 31.553 47.5475 30.2071 46.5747 28.8719H46.5422C45.5727 30.6901 44.6164 32.5157 43.6724 34.3484C43.6875 36.6787 43.7012 39.0095 43.7154 41.3406C44.7932 41.2964 45.3335 41.2819 46.4117 41.2695C46.4076 38.7111 46.4034 36.1524 46.3986 33.5939C47.3913 34.8557 48.3707 36.129 49.3381 37.411C49.3438 37.4215 49.3468 37.4261 49.3535 37.4362C49.4005 37.438 49.4241 37.4387 49.4706 37.439C50.4569 36.1792 51.4557 34.9281 52.467 33.6886C52.447 36.2585 52.426 38.8282 52.4051 41.3975C53.4906 41.4566 54.0328 41.4942 55.1153 41.5852C55.1667 37.4557 55.2187 33.3256 55.2692 29.1959C54.091 29.0961 53.501 29.0562 52.3203 28.9945Z" fill="#024490"/>
                                            <path d="M37.3537 41.825C39.4571 37.4712 41.618 33.1489 43.84 28.8545C42.4668 28.9079 41.7804 28.9474 40.4096 29.0517C38.2155 33.4256 36.0836 37.828 34.0103 42.2602C35.3454 42.0614 36.0137 41.9745 37.3537 41.825Z" fill="#D80C21"/>
                                            <path d="M57.9119 113.336H58.3557C58.8624 113.336 59.2911 113.156 59.2911 112.692C59.2911 112.361 59.0456 112.032 58.3557 112.032C58.1572 112.032 58.0203 112.048 57.9119 112.062V113.336ZM57.9119 115.421H57.3016V111.657C57.6205 111.61 57.9268 111.567 58.3858 111.567C58.9683 111.567 59.3516 111.688 59.5816 111.852C59.8122 112.016 59.9346 112.269 59.9346 112.629C59.9346 113.126 59.5994 113.427 59.1831 113.546V113.576C59.5224 113.637 59.7503 113.934 59.8266 114.491C59.9197 115.076 60.0103 115.302 60.0731 115.421H59.4279C59.3372 115.302 59.245 114.955 59.1684 114.46C59.0756 113.981 58.8326 113.801 58.3406 113.801H57.9119V115.421ZM58.5565 110.608C57.0382 110.608 55.7991 111.886 55.7991 113.457C55.7991 115.06 57.0382 116.322 58.5712 116.322C60.104 116.334 61.3273 115.06 61.3273 113.471C61.3273 111.886 60.104 110.608 58.5712 110.608H58.5565ZM58.5712 110.083C60.4576 110.083 61.9562 111.583 61.9562 113.457C61.9562 115.36 60.4576 116.846 58.5565 116.846C56.6714 116.846 55.1414 115.36 55.1414 113.457C55.1414 111.583 56.6714 110.083 58.5565 110.083H58.5712Z" fill="#636362"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_42_759" x1="93.4136" y1="54.4377" x2="45.0457" y2="65.1886" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#F1F5FB"/>
                                                <stop offset="0.0313725" stopColor="#F8FAFD"/>
                                                <stop offset="1" stopColor="white"/>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_42_759" x1="30.9422" y1="56.9772" x2="6.26019" y2="62.4633" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"/>
                                                <stop offset="0.968627" stopColor="#F8FAFD"/>
                                                <stop offset="1" stopColor="#F1F5FB"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </FlexBox>
                                </Block>
                            </FlexBox>
                            <Block p={isMobile ? 30 : 40} color="red-500">
                                <FlexBox height="100%" direction="column" align="center" justify="space-between" gap={30}>
                                    <Text centered color="white" weight={600}>RE/MAX входит в Топ-15 лучших франчайзи по всему миру</Text>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="273" height="220" viewBox="0 0 273 220" fill="none">
                                        <path d="M43.3076 66.6197L43.3076 151.831H89.7087L89.7087 0H43.3076V12.3944C43.3076 20.6573 39.1831 24.7887 30.934 24.7887H0V66.6197H43.3076Z" fill="white"/>
                                        <path d="M135.127 202.338C150.182 214.113 168.536 220 190.19 220C216.174 220 236.281 212.873 250.511 198.62C264.947 184.16 272.165 165.981 272.165 144.085C272.165 121.981 265.359 104.113 251.748 90.4789C238.137 76.6385 220.711 69.7183 199.47 69.7183C182.766 69.7183 169.361 73.3333 159.256 80.5634H157.709L162.349 40.2817H259.791V0H123.682L111.308 123.944H156.162C163.793 112.582 174.62 106.901 188.643 106.901C200.398 106.901 209.472 110.413 215.865 117.437C222.464 124.254 225.764 132.62 225.764 142.535C225.764 153.69 222.567 162.469 216.174 168.873C209.988 175.07 200.81 178.169 188.643 178.169C179.569 178.169 172.042 175.793 166.061 171.042C160.081 166.085 156.265 159.681 154.616 151.831H108.215C111.308 173.728 120.279 190.563 135.127 202.338Z" fill="white"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M55.3279 206.738C52.6674 209.531 49.1007 210.928 44.6277 210.928C40.1546 210.928 36.5879 209.531 33.9274 206.738C31.267 203.945 29.9368 200.05 29.9368 195.052C29.9368 190.053 31.267 186.158 33.9274 183.365C36.5879 180.572 40.1546 179.175 44.6277 179.175C49.1007 179.175 52.6674 180.572 55.3279 183.365C57.9883 186.158 59.3185 190.053 59.3185 195.052C59.3185 200.05 57.9883 203.945 55.3279 206.738ZM39.5845 201.534C40.7832 203.093 42.4642 203.872 44.6277 203.872C46.7911 203.872 48.4575 203.093 49.6269 201.534C50.8256 199.976 51.4249 197.815 51.4249 195.052C51.4249 192.288 50.8256 190.127 49.6269 188.569C48.4575 187.011 46.7911 186.231 44.6277 186.231C42.4642 186.231 40.7832 187.011 39.5845 188.569C38.4151 190.127 37.8304 192.288 37.8304 195.052C37.8304 197.815 38.4151 199.976 39.5845 201.534Z" fill="white"/>
                                        <path d="M12.1727 210.487V186.672H3.40206V179.616H28.837V186.672H20.0663V210.487H12.1727Z" fill="white"/>
                                        <path d="M89.5876 179.616H63.7141V210.487H71.6077V186.672H81.694V210.487H89.5876V179.616Z" fill="white"/>
                                    </svg>
                                </FlexBox>
                            </Block>
                            <FlexBox direction="column" gap={20}>
                                <Block className="image" height={238}></Block>
                                <Block height={186} p={isMobile ? 30 : 40}>
                                    <FlexBox direction="column" gap={10}>
                                        <Text weight={600}>Наша миссия</Text>
                                        <Text>Повысить качество риэлторских услуг путем внедрения бизнес-модели RE/MAX.</Text>
                                    </FlexBox>
                                </Block>
                            </FlexBox>
                        </Grid>
                        <Grid columns={isMobile ? 1 : 4} gap={20}>
                            <Block p={isMobile ? 30 : 40}>
                                <Text size={64} ls={-1.3} lh={1} weight={300}>50</Text>
                                <Text>лет опыта</Text>
                            </Block>
                            <Block p={isMobile ? 30 : 40}>
                                <Text size={64} ls={-1.3} lh={1} weight={300}>9 000+</Text>
                                <Text>офисов</Text>
                            </Block>
                            <Block p={isMobile ? 30 : 40}>
                                <Text size={64} ls={-1.3} lh={1} weight={300}>120</Text>
                                <Text>стран мира</Text>
                            </Block>
                            <Block p={isMobile ? 30 : "40px 10px 40px 40px"}>
                                <Text size={64} ls={-1.3} lh={1} weight={300}>140 000</Text>
                                <Text>брокеров</Text>
                            </Block>
                        </Grid>
                    </FlexBox>
                </FlexBox>
            </Container>
        </div>
    );
};

export default Goals;
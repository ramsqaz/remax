import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router";

import {
    Container,
    FlexBox,
    Text,
    Button,
    ButtonTel,
} from "../../../components";
import { PhoneIcon, Remax } from "../../../assets/icons";
import { SCROLL_NAVS } from "../../../constants/app";

import "./styles.scss";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <Container>
                <FlexBox
                    align="center"
                    height={80}
                    justify="space-between"
                    gap={50}
                >
                    <FlexBox height={34} gap={5} direction="column">
                        <Remax />
                        <Text size={11.6} weight={600} lh={1}>
                            Казахстан
                        </Text>
                    </FlexBox>
                    <FlexBox
                        width="100%"
                        align="center"
                        justify="center"
                        gap={30}
                    >
                        {SCROLL_NAVS.map(({ content, label }) => (
                            <Link
                                key={content}
                                to={content}
                                spy
                                offset={-80}
                                smooth
                                onClick={() => navigate("/")}
                            >
                                <Text>{label}</Text>
                            </Link>
                        ))}
                    </FlexBox>
                    <ButtonTel
                        variant="secondary"
                        size="sm"
                        startIcon={<PhoneIcon />}
                    >
                        +7 707 558 88 85
                    </ButtonTel>
                </FlexBox>
            </Container>
        </header>
    );
};

export default Header;

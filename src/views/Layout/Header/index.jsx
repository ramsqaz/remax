import React from "react";
import { Link } from "react-scroll";

import { Container, FlexBox, Text, Button } from "../../../components";
import { PhoneIcon, Remax } from "../../../assets/icons";
import { SCROLL_NAVS } from "../../../constants/app";

import "./styles.scss";

const Header = () => {

    return (
        <header>
            <Container>
                <FlexBox align="center" height={80} justify="space-between" gap={50}>
                    <FlexBox height={34} gap={5} direction="column">
                        <Remax />
                        <Text size={11.6} weight={600} lh={1}>Казахстан</Text>
                    </FlexBox>
                    <FlexBox width="100%" align="center" justify="center" gap={30}>
                        {SCROLL_NAVS.map(({ content, label }) => (
                            <Link
                                key={content}
                                to={content}
                                spy
                                offset={-80}
                                smooth
                            >
                                <Text>{label}</Text>
                            </Link>
                        ))}
                    </FlexBox>
                    <Button
                        variant="secondary"
                        size="sm"
                        startIcon={<PhoneIcon />}
                    >
                        +7 700 888 80 80
                    </Button>
                </FlexBox>
            </Container>
        </header>
    )
};

export default Header;
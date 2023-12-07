import React, { useEffect, useState } from "react";

import { CONTENTS } from "../../constants/app";
import useAdaptive from "../../hooks/useAdaptive";
import { Block, FlexBox, Title, Text, Container, Input, Button, Checkbox } from "../../components";

import "./styles.scss";

const Request = () => {
    const [accepted, setAccepted] = useState(true);
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const isMobile = useAdaptive();

    return (
        <div id={CONTENTS.REQUEST} className="request-form">
            <Container m={isMobile ? "0 5px" : undefined}>
                <Block color="red-500" p={isMobile ? 30 : 70} radius={12}>
                    <FlexBox gap={isMobile ? 30 : 80} direction={isMobile ? "column" : "row"}>
                        <FlexBox direction="column" width={isMobile ? "100%" : "60%"} gap={20}>
                            <Title iconColor="blue-500" textColor="white">Заявка</Title>
                            <Text withAnimation as={isMobile ? "h2" : "h1"} color="white">
                                Станьте успешны вместе с одной из самых эффективных бизнес-моделей мира.
                            </Text>
                            <Text color="white">
                                Оставьте свои контакты и получите расчет инвестиций на открытие вашего бизнеса.
                            </Text>
                        </FlexBox>
                        <form style={{ width: isMobile ? "100%" : "40%" }}>
                            <Input placeholder="Имя" required minLength={2} maxLength={25} value={name} onChange={setName} />
                            <Input
                                placeholder="Телефон"
                                required
                                mask="+7 (799) 999-99-99" 
                                type="phone"
                                // pattern="8 [0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
                                minLength={11}
                                maxLength={20}
                                value={phone}
                                onChange={setPhone}
                            />
                            <Input placeholder="Эл. почта" required maxLength={50} type="email" value={email} onChange={setEmail} />
                            <FlexBox gap={20} justify="space-between" align={isMobile ? "flex-start" : "center"} direction={isMobile ? "column" : "row"}>
                                <Button variant="primary" color="blue" type="submit" disabled={!accepted}>Отправить</Button>
                                <Checkbox onChange={setAccepted} value={accepted} label="Нажимая кнопку 'Отправить', Вы подтверждаете свое согласие с нашей политикой конфиденциальности." />
                            </FlexBox>
                        </form>
                    </FlexBox>
                </Block>
            </Container>
        </div>
    );
};

export default Request;
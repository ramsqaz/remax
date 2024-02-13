import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { CONTENTS } from "../../constants/app";
import useAdaptive from "../../hooks/useAdaptive";
import {
    Block,
    FlexBox,
    Title,
    Text,
    Container,
    Input,
    Button,
    Checkbox,
} from "../../components";
import useTranslate from "../../i18n/useTranslate";

import "./styles.scss";

const Request = () => {
    const { request, notification } = useTranslate();
    const isMobile = useAdaptive();
    const [accepted, setAccepted] = useState(true);
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [status, setStatus] = useState(null);

    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source") ?? "/";
    const utmMedium = urlParams.get("utm_medium") ?? "/";
    const utmCampaign = urlParams.get("utm_campaign") ?? "/";
    const utmContent = urlParams.get("utm_content") ?? "/";
    const utmTerm = urlParams.get("utm_term") ?? "/";
    const utmPlatform = "/";
    const fromSite = "rams.franchise.com.kz";
    const fbclid = urlParams.get("fbclid") ?? "/";
    const yclid = urlParams.get("yclid") ?? "/";
    const gclid = urlParams.get("gclid") ?? "/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("email", email ?? "");
        formData.append("gclid", gclid);
        formData.append("yclid", yclid);
        formData.append("fbclid", fbclid);
        formData.append("utm_source", utmSource);
        formData.append("utm_medium", utmMedium);
        formData.append("utm_campaign", utmCampaign);
        formData.append("utm_content", utmContent);
        formData.append("utm_term", utmTerm);
        formData.append("utm_platform", utmPlatform);
        formData.append("fullurl", window.location.href);
        formData.append("from_site", fromSite);

        try {
            setStatus("fetching");
            await fetch("send.php", {
                method: "POST",
                body: formData,
            });
            setStatus("success");
            setEmail("");
            setName("");
            setPhone("");
        } catch (e) {
            setStatus("error");
        } finally {
            setTimeout(() => {
                setStatus(null);
            }, 6000);
        }
    };

    const getStatusIndicator = (status) => {
        switch (status) {
            case "success":
                return (
                    <Text color="white" size={15}>
                        {notification.request.success}
                    </Text>
                );
            case "error":
                return (
                    <Text color="white" size={15}>
                        {notification.request.error}
                    </Text>
                );
            default:
                return null;
        }
    };
//   + 7   ( 7 0 8 )   6  5  1  -  1  8  -  3  0;
//   0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
    const handleChangePhone = (newPhone) => {
        const onlyNumber = newPhone?.replace(/\D+/g, '');
        const onlyClientInput = onlyNumber.slice(1, onlyNumber.length);
        
        if (onlyClientInput.length > 10) {
            return;
        }

        let result = "";

        if (onlyClientInput.length <= 10) {
            result = `+7 (${onlyClientInput.slice(0, 3)}) ${onlyClientInput.slice(3, 6)}-${onlyClientInput.slice(6, 8)}-${onlyClientInput.slice(8, 10)}`;
        }

        if (onlyClientInput.length <= 8) {
            result = `+7 (${onlyClientInput.slice(0, 3)}) ${onlyClientInput.slice(3, 6)}-${onlyClientInput.slice(6, 8)}`;
        }

        if (onlyClientInput.length <= 6) {
            result = `+7 (${onlyClientInput.slice(0, 3)}) ${onlyClientInput.slice(3, 6)}`;
        }

        if (onlyClientInput.length <= 3) {
            result = `+7 (${onlyClientInput}`;
        }

        setPhone(result);
    };

    return (
        <>
            <div className="notification">
                <div
                    className={`status-container ${
                        status ? status : "success"
                    }`}
                    style={{
                        display: status === "success" ? "block" : "none",
                    }}
                    id="notification-success"
                >
                    {getStatusIndicator(status ? status : "success")}
                </div>
            </div>

            <div id={CONTENTS.REQUEST} className="request-form"  style={{ scrollMarginTop: 80 }}>
                <Container m={isMobile ? "0 5px" : undefined}>
                    <Block color="red-500" p={isMobile ? 30 : 70} radius={12}>
                        <FlexBox
                            gap={isMobile ? 30 : 80}
                            direction={isMobile ? "column" : "row"}
                        >
                            <FlexBox
                                direction="column"
                                width={isMobile ? "100%" : "60%"}
                                gap={20}
                            >
                                <Title iconColor="blue-500" textColor="white">
                                    {request.title}
                                </Title>
                                <Text
                                    withAnimation
                                    as={isMobile ? "h2" : "h1"}
                                    color="white"
                                >
                                    {request.h1}
                                </Text>
                                <Text color="white">
                                    {request.p}
                                </Text>
                            </FlexBox>
                            <form
                                style={{ width: isMobile ? "100%" : "40%" }}
                                onSubmit={handleSubmit}
                            >
                                <Input
                                    placeholder={request.form.name}
                                    required
                                    minLength={2}
                                    maxLength={25}
                                    value={name}
                                    onChange={setName}
                                />
                                <Input
                                    placeholder={request.form.phone}
                                    required
                                    type="phone"
                                    pattern="^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$"
                                    value={phone}
                                    onChange={handleChangePhone}
                                    onFocus={() => setPhone((prev) => prev || '+7 (')}
                                    onBlur={() => setPhone((prev) => prev === '+7 (' ? "" : prev)}
                                />
                                <Input
                                    placeholder={request.form.email}
                                    maxLength={50}
                                    type="email"
                                    value={email}
                                    onChange={setEmail}
                                />
                                <FlexBox
                                    gap={20}
                                    justify="space-between"
                                    align={isMobile ? "flex-start" : "center"}
                                    direction={isMobile ? "column" : "row"}
                                >
                                    <Button
                                        variant="primary"
                                        color="blue"
                                        type="submit"
                                        disabled={
                                            !accepted || (status === "fetching")
                                        }
                                    >
                                        {request.form.submit}
                                    </Button>
                                    <Checkbox
                                        onChange={setAccepted}
                                        value={accepted}
                                        label={(
                                            <span>
                                                <Link to="privacy-policy" className="link">{request.form.confirm}</Link>
                                            </span>
                                        )}
                                    />
                                </FlexBox>
                            </form>
                        </FlexBox>
                    </Block>
                </Container>
            </div>
        </>
    );
};

export default Request;

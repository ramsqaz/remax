import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { LOCALES } from "../../../constants/app";

const LOCALES_ARR = Object.values(LOCALES);

export const useLocale = () => {
    const { locale } = useParams();
    const navigate = useNavigate();

    const setLocale = (locale) => {
        navigate("/" + locale);
        localStorage.setItem("locale", locale);
    };

    useEffect(() => {
        const savedLocale = localStorage.getItem("locale");

        if (!LOCALES_ARR.includes(locale)) {
            setLocale(savedLocale || LOCALES.RU);
        }
    }, [locale, setLocale]);

    console.log(locale);

    return [
        locale,
        setLocale,
    ];
};
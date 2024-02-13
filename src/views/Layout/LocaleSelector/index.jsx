import React, { useState, useRef, useEffect } from "react";

import { LOCALES_OPTIONS, LOCALES } from "../../../constants/app";

import "./styles.scss";
import { useLocale } from "./hooks";

const ArrowDown = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z" fill="#626366"/>
    </svg>
);

const LocaleSelector = () => {
    const containerRef = useRef(null);
    const menuRef = useRef(null);
    const [locale, setLocale] = useLocale();
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const openMenu = () => setIsMenuOpened(true);

    const getValue = () => LOCALES_OPTIONS.find(({ value }) => value === locale)?.label;

    const closeMenu = () => {
        if (menuRef.current) {
            menuRef.current.className = "menu remove";
            const timeoutId = setTimeout(() => {
                setIsMenuOpened(false);
                menuRef.current.className = "menu";
                clearTimeout(timeoutId);
            }, 190);
        }
    };

    const handleChange = (value) => () => {
        setLocale(value);
        closeMenu();
    };

    useEffect(() => {
        if (containerRef.current) {
            const onClickOutside = (e) => {
                if (!containerRef.current.contains(e.target)) {
                    closeMenu();
                }
            };

            document.addEventListener("click", onClickOutside);

            return () => document.removeEventListener("click", onClickOutside);
        }
    }, [containerRef.current, closeMenu]);

    return (
        <div
            className="locale-selector"
            onChange={handleChange}
            ref={containerRef}
        >
            <div className="trigger" onClick={isMenuOpened ? closeMenu : openMenu}>
                <input type="button" value={getValue()} />
                <ArrowDown className={`indicator ${isMenuOpened ? "reverse" : ""}`} />
            </div>
            {isMenuOpened
                ? (
                    <ul className="menu" ref={menuRef}>
                        {LOCALES_OPTIONS.map(({ label, value }) => (
                            <li
                                className={locale === value ? "active" : ""}
                                key={value}
                                onClick={handleChange(value)}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                )
                : null
            }
        </div>
    );
};

export default LocaleSelector;
import { useParams } from "react-router";

import * as keys from "./keys";

const useTranslate = () => {
    const { locale } = useParams();

    return keys[locale] || {};
};

export default useTranslate;
import React from "react";
import { RecoilRoot } from "recoil";

export default function Root({ children }) {
    return <RecoilRoot>{children}</RecoilRoot>;
}

import * as React from "react"
import isBrowser from "../utils/browser";

export default function Component () {

    isBrowser && window.location.replace("/cittadini");
}
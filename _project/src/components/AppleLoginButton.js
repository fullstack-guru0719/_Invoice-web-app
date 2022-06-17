import React from "react";
import { createButton } from "react-social-login-buttons";

const config = {
    text: "Apple",
    icon: "apple",
    iconFormat: name => `fa fa-${name}`,
    style: { background: "#101113" },
    activeStyle: { background: "#444048" }
};
const AppleLoginButton = createButton(config);

export default AppleLoginButton;
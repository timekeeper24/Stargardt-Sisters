// @ts-ignore
import React, {useEffect} from "react";
import {Avatar, Card, Flex, Steps, theme, Layout as AntLayout} from "antd";

interface LayoutProps {
    title: string,
    children: React.ReactNode,
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
    const {useToken} = theme;
    const {token} = useToken();

    useEffect(() => {
        document.body.style.backgroundColor = token.colorBgContainer
    }, [theme, token])

    return (
        <AntLayout style={{ height: "100%", minHeight: "100vh" }}>
            <AntLayout.Header>
                <Avatar src={"https://edu-setonhill-imagehosting-1.s3.amazonaws.com/SHUSealColor.png"}/>
            </AntLayout.Header>
            <AntLayout.Content style={{ padding: "1%" }}>
                <Card title={title} children={children} />
            </AntLayout.Content>
        </AntLayout>
    )
}

export default Layout;

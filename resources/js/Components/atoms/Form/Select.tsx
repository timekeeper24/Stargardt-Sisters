import * as React from "react";
import {Flex, Typography, Select as AntSelect, SelectProps as AntSelectProps, Tooltip, Button} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";

interface SelectProps {
    label?: string
    tooltip?: string
    selectProps?: AntSelectProps,
    children?: React.ReactNode
}

const Select: React.FC<SelectProps> = ({label, selectProps, tooltip, children}) => {
    return (
        <Flex gap={"small"} style={{ flexGrow: 1 }} vertical>
            <Flex justify={"space-between"}>
                {label && <Typography.Text strong style={{ marginTop: 'auto', marginBottom: 'auto' }}>{label}</Typography.Text>}
                {
                    tooltip &&
                    <Tooltip placement="top" title={tooltip}>
                        <QuestionCircleOutlined style={{ fontSize: "large",  cursor: "pointer" }} />
                    </Tooltip>
                }
            </Flex>
            <AntSelect {...selectProps} children={children}/>
        </Flex>
    )
}

export default Select;

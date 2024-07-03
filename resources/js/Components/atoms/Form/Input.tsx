import * as React from "react";
import {Flex, Typography, Input as AntInput, InputProps as AntInputProps, Tooltip, Button} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";

interface InputProps {
    label?: string
    tooltip?: string
    inputProps?: AntInputProps
}

const Input: React.FC<InputProps> = ({label, inputProps, tooltip}) => {
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
            <AntInput {...inputProps}/>
        </Flex>
    )
}

export default Input;

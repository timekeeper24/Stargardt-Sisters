// @ts-ignore
import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    Col,
    Flex,
    Row,
    Form,
    Input
} from "antd";
import "../../../css/contact.css"


const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
    },
};
const onFinish = (values: any) => {
    console.log(values);
};
const DeveloperIndex: React.FC<{}> = () => {

    return (
        <Flex gap={"large"} vertical>
            <Card type={"inner"} title={"Contact Form"}>
                <Form
                    layout="vertical"
                    name="nest-messages"
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                >
                    <Row gutter={[24,18]}>
                        <Col xs={24} xl={12}>
                            <Form.Item label={'Full Name'}  rules={[{ required: true }]}><Input placeholder={'Full Name'} className={'lpfont'}/></Form.Item>
                        </Col>
                        <Col xs={24} xl={12}>
                            <Form.Item name={['user', 'email']} label={'Email'} rules={[{ type: 'email', required: true }]}><Input placeholder={'Valid email'} className={'lpfont'}/></Form.Item>
                        </Col>
                        <Col xs={24} xl={12}>
                            <Form.Item label={'Subject'} rules={[{ type: 'email', required: true }]}><Input placeholder={'Subject'} className={'lpfont'}/></Form.Item>
                        </Col>
                        <Col xs={24} xl={24}>
                            <Form.Item
                                name="body"
                                label="Body"
                                rules={[{ required: true, message: 'Please input body' }]}
                            >
                                <Input.TextArea maxLength={300}  className={'intro-box-height lpfont'}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Flex>
    );
}

export default DeveloperIndex;

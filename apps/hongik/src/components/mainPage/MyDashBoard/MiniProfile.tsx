import styled from "styled-components";
import { theme, FlexBox, Text, Tag } from "@hc/ui";
export const MiniProfile =() => {
    return (
        <Wrapper>
            <FlexBox direction = {'column'}>
                <Text typo ={'Subtitle2'} color ={'main_blue'}>홍시디</Text>
                <Text typo = {'Caption3_2'}>C123456</Text>
                <Tag variant="keyword" color ="key">시각디자인과</Tag>
                <Tag variant="keyword" color ="key">3학년</Tag>
            </FlexBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-width: 110px;
    flex: 1 1 0;
    height: 163px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid ${theme.palette.black_800};
    border-radius: 10px;
    padding: 13px 14px;
    background-image: url('images/hongiklogo.png');
    background-position: 100% 100%;
    background-repeat: no-repeat;
`
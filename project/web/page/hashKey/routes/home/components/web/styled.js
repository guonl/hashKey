import styled, {injectGlobal} from 'styled-components';
const offeringsBG = require("web-hashKey-imgs/home/web/offeringsBG.png");

const WrapperWebView = styled.div`
    .headerMenu {
        position: fixed;
        z-index: 1000;
        top: 0;
        width: 100%;
        height: 60px;
        background: rgba(12,12,12, 0.6);
        .title {
            font-size: 22px;
            color: #fff;
            .logo {
                float: left;
                width: 150px;
                height: 40px;
                margin-top: 10px;
            }
            span {
                float: left;                
                height: 50px;
                line-height: 50px;
            }
        }
        .menuList {
            height: 60px;
            line-height: 60px;
            color: #adad83;
            .eachMenu {
                display: inline-block;
                margin-right: 21px;
                cursor: pointer;
                text-align: center;
                font-size: 16px;
                color: #a7abb3;
                &:last-child {
                    margin-right: 0;
                }
                &:hover, &.active {
                    color: #effcff;
                }
            }
        }
        a {
            &:first-child {
                margin-left: 100px;
            }
            display: inline-block;
            margin-top: 10px;
            padding: 5px 15px;
            background: #416f87;
            opacity: 0.8;
            font-size: 20px;
            color: #c2cdd2;
            border-radius: 5px;
            margin-right: 20px;
            text-decoration: none;
            text-align: center;
            width: 70px;
            &.selected {
                background: #4c94ff;
                opacity: 1;
                color: #ebf9ff;
            }
        }
    }
    .aboutFrame {
        img {
            width: 100%;
            height: ${window.innerHeight}px;
            background-size: 100% ${window.innerHeight}px;
        }
    }
    .assetsFrame {
        margin: 100px 0px 50px 0px;
        text-align: center;
        .ourVision {
            color: #2d4358;
            font-size: 32px;
        }
        .text {
            font-size: 18px;
            color: #34495e;
            margin-bottom: 67px;
            }
        .line {
            width: 68px;
            height: 2px;
            background: #2d4358;
            margin: 28px 0px;
        }
        .ourFocus, .ourBrands {
            color: #2d4358;
            font-size: 32px;
            margin-top: 41px;
        }
        .focusContent {
            img {
                width: 100px;
                height: 120px;
                margin-bottom: 15px;
            }
            .text {
                font-size: 16px;
                color: #34495e;
                margin-bottom: 36px;
            }
        }
        .brandsContent {
            img {
                width: 250px;
                margin-bottom: 50px;
            }
        }
    }
    .teamFrame {
        padding: 50px 0;
        background: #f9fdff;
        .title {
            font-size: 32px;
            color: #2d4358;
            margin: 0 0 15px 0;
            text-align: center;
        }
        .line {
            width: 68px;
            height: 2px;
            background: #2d4358;
            margin-bottom: 63px;
        }
        .member {
            margin-bottom: 35px;
            .desc {
                width: 500px;
            }
        }
        .avator {
            width: 140px;
            height: 140px;
        }
        .name {
            font-size: 24px;
            margin-bottom: 10px;
            margin-top: 16px;
            color: #373d42;
        }
        .position {
            font-size: 18px;
            color: #373d42;
            margin-bottom: 8px;
        }
        .desc {
            font-size: 14px;
            color: #373d42;
        }
        .longLine {
            height: 1px;
            background-color: #c9c9c9;
            opacity: 0.5;
            margin-bottom: 55px;
        }
        .eachMember {
            text-align: center;
        }
    }
    .offeringsFrame {
        position: relative;
        height: ${document.body.clientWidth/1920*760}px;
        min-height: 600px;
        width: 100%;
        background: url(${offeringsBG}) no-repeat;
        background-size: 100% 100%;
        .title {
            font-size: 32px;
            color: #e8f3ff;
            margin-bottom: 28px;
            text-align: center;
        }
        .shortLine {
            height: 1px;
            background: #10CEFF;
            border-radius: 3px;
        }
        .eachItem {
            margin-bottom: 65px;
            color: #E8F3FF;
            text-align: center;
            .subTitle {
                font-size: 32px;
                margin-bottom: 20px;
            }
            .text {
                margin-top: 20px;
                font-size: 14px;
            }
        }
        .learnMore {
            font-size: 14px;
            display: inline-block;
            width: 160px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #fff;
            background: #3e8aff;
            border-radius: 5px;
            margin-botom: 30px;
            text-decoration: none;
        }
    }
    .partnersFrame {
        padding: 50px 0;
        background: #2e2f30;
        .title {
            font-size: 32px;
            color: #f2f2f2;
            margin: 0 0 15px 0;
            text-align: center;
        }
        .shortLine {
            height: 1px;
            background: #10CEFF;
            border-radius: 3px;
            margin-bottom: 56px;
        }
    }
    .contactFrame {
        color: #f2f2f2;
        background: #171723;
        height: 270px;
        .title {
            font-size: 32px;
            margin-bottom: 10px;
        }
        .text {
            font-size: 16px;
            margin-bottom: 10px;
            &.hashkey {
                padding-left: 40px;
                background: url(${require("web-hashKey-imgs/home/web/facebook.png")}) no-repeat;
                background-size: 25px 25px;
                cursor: pointer;
            }
            &.hashquark {
                padding-left: 40px;
                background: url(${require("web-hashKey-imgs/home/web/twitter.png")}) no-repeat;
                background-size: 25px 25px;
                cursor: pointer;
            }
        }
    }
`;

injectGlobal `
    .ant-popover-inner-content {
        font-size: 14px;
        width: 400px;
    }
    .ant-popover-placement-top > .ant-popover-content > .ant-popover-arrow, .ant-popover-placement-topLeft > .ant-popover-content > .ant-popover-arrow, .ant-popover-placement-topRight > .ant-popover-content > .ant-popover-arrow {
        border-top-color: #6888C8;
    }
    .ant-popover-inner-content {
        border: 1px solid #6888C8;
    }
    .ant-popover-placement-top > .ant-popover-content > .ant-popover-arrow, .ant-popover-placement-topLeft > .ant-popover-content > .ant-popover-arrow, .ant-popover-placement-topRight > .ant-popover-content > .ant-popover-arrow {
        bottom: 4px;
    }
`
module.exports = { WrapperWebView }
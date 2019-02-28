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
            height: ${window.innerHeight};
            background-size: 100% ${window.innerHeight}px;
        }
    }
    .assetsFrame {
        margin: 100px 0px;
        text-align: center;
        .ourVision {
            color: #2d4358;
            font-size: 50px;
            margin-bottom: 27px;
        }
        .text {
            font-size: 22px;
            color: #34495e;
            margin-bottom: 107px;
            }
        .line {
            width: 160px;
            height: 2px;
            background: #2d4358;
        }
        .ourFocus, .ourBrands {
            color: #2d4358;
            font-size: 50px;
            margin-top: 61px;
            margin-bottom: 64px;
        }
        .focusContent {
            img {
                width: 120px;
                height: 140px;
                margin-bottom: 15px;
            }
            .text {
                font-size: 24px;
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
        padding: 100px 0;
        background: #f9fdff;
        .title {
            font-size: 50px;
            color: #2d4358;
            margin: 0 0 15px 0;
            text-align: center;
        }
        .line {
            width: 160px;
            height: 2px;
            background: #2d4358;
            margin-bottom: 93px;
        }
        .member {
            margin-bottom: 45px;
            .desc {
                width: 500px;
            }
        }
        .avator {
            width: 150px;
            height: 150px;
        }
        .name {
            font-size: 30px;
            margin-bottom: 10px;
            margin-top: 12px;
            color: #373d42;
        }
        .position {
            font-size: 20px;
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
            margin-bottom: 55px;
        }
        .eachMember {
            text-align: center;
        }
    }
    .offeringsFrame {
        position: relative;
        height: ${document.body.clientWidth/1920*860}px;
        min-height: 650px;
        width: 100%;
        background: url(${offeringsBG}) no-repeat;
        background-size: 100% 100%;
        .title {
            font-size: 50px;
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
            margin-bottom: 35px;
            color: #E8F3FF;
            text-align: center;
            .subTitle {
                font-size: 42px;
                margin-bottom: 20px;
            }
            .text {
                margin-top: 20px;
                font-size: 15px;
            }
        }
        .learnMore {
            font-size: 16px;
            display: inline-block;
            width: 160px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #fff;
            background: #3e8aff;
            border-radius: 5px;
            margin-top: 30px;
            text-decoration: none;
        }
    }
    .partnersFrame {
        padding: 100px 0;
        background: #2e2f30;
        .title {
            font-size: 50px;
            color: #f2f2f2;
            margin: 0 0 15px 0;
            text-align: center;
        }
        .shortLine {
            height: 1px;
            background: #10CEFF;
            border-radius: 3px;
            margin-bottom: 76px;
        }
    }
    .contactFrame {
        color: #f2f2f2;
        background: #171723;
        height: 370px;
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
        width: 500px;
    }
`
module.exports = { WrapperWebView }
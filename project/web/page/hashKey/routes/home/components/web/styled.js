import styled from 'styled-components';

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
    .partnersFrame {
        padding: 100px 0;
        background: #2e2f30;
        .title {
            font-size: 50px;
            color: #f2f2f2;
            margin: 0 0 15px 0;
            text-align: center;
        }
        .line {
            width: 160px;
            height: 2px;
            background: #f2f2f2;
            margin-bottom: 126px;
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

module.exports = { WrapperWebView }
import styled from 'styled-components';
const addressBG = require("web-hashKey-imgs/hk/web/addressBG.png");
const partnerBG = require("web-hashKey-imgs/hk/web/partnerBG.png");
const transBG = require("web-hashKey-imgs/hk/web/transBG.png");

const WrapperFrame = styled.div`
    .langChangeModal {
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 1000;
        width: 100%;
        height: 100%;
        background: #fff;
        .close {
            display: inline-block;
            width: 0.36rem;
            height: 0.36rem;
            position: absolute;
            top: 0.5rem;
            right: 0.8rem;
            z-index: 1001;
            img {
                width: 100%;
                z-index: 1001;
            }
        }
        .langFrame {
            margin-top: 0.9rem;
            text-align: center;
            font-size: 0.4rem;
            .title {
                width: 4.5rem;
                color: #4775ba;
            }
            .ops {
                width: 4.5rem;
                margin-top: 0.6rem;
                color: #868686;
                font-size: 0.36rem;
                &.selected {
                    color: #4775b9;
                    border-top: 1px solid #868686;
                    border-bottom: 1px solid #868686;
                }
            }
        }
    }
    .bannerFrame {
        position: relative;
        img {
            width: 100%;
        }
        .langChange {
            position: absolute;
            top: 0.2rem;
            right: 0.25rem;
            z-index: 1000;
            a {
                display: inline-block;
                height: 0.24rem;
                width: 0.36rem;
                z-index: 1000;
                img {
                    width: 100%;
                    z-index: 1000;
                }
            }
        }
        .bannerImg {
            width: 100%;
            img {width: 100%;}
        }
    }
    .aboutFrame {
        background: #fff;
        padding: 50px 0;
        img {
            width: 100%;
        }
        .seeMore {
            display: inline-block;
            width: 26px;
            height: 22px;
            margin-top: 10px;
            margin-left: 45px;
        }
        .moreContent {
            font-size: 14px;
            margin-left: 45px;
        }
    }
    .addressFrame {
        position: relative;
        .content {
            width: 100%;
        }
        .gmBtn {
            display: inline-block;
            position: absolute;
            bottom: ${document.body.clientWidth/1920*320}px;
            width: 3.2rem;
            height: 0.88rem;
            line-height: 0.88rem;
            color: #fff;
            background: #4775b9;
            font-size: 0.32rem;
            left: 50%;
            margin-left: -1.6rem;
            text-align: center;
            border-radius: 5px;
            img {
                width: 100%;
            }
        }
    }
    .ticketFrame {
        background: #fff;
        img {
            width: 100%; 
        }
        a {
            position: relative;
            display: inline-block;
            left: 50%;
            margin-left: -2.1rem;
            width: 4.2rem;
            height: 0.88rem;
            line-height: 0.88rem;
            color: #fff;
            background: #4775b9;
            text-align: center;
            border-radius: 5px;
            font-size: 0.32rem;
        }
    }
    .agendaFrame {
        position: relative;
        background: #fbfcfc;
        margin-top: 60px;
        .switchTime {
            position: absolute;
            left: 50%;
            margin-left: -3.36rem;
            top: 100px;
            height: 0.58rem;
            width: 6.72rem;
            a {
                display: inline-block;
                width: 3.36rem;
                height: 0.58rem;
                line-height: 0.58rem;
                text-align: center;
                color: #007aff;
                text-decoration: none;
                background: #fff;
                border: 1px solid #007aff;
                font-size: 0.26rem;
                &.focus {
                    color: #fff;
                    background: #007aff;
                }
            }
        }
        .agend {
            width: 100%;
        }
        .apply {
            position: relative;
            display: inline-block;
            left: 50%;
            margin-left: -2.1rem;
            width: 4.2rem;
            height: 0.88rem;
            line-height: 0.88rem;
            color: #fff;
            background: #4775b9;
            text-align: center;
            border-radius: 5px;
            font-size: 0.32rem;
            bottom: 60px;
        }
    }
    .partnerFrame {
        img {
            width: 100%;
        }
    }
    .infoFrame {
        background: #fff;
        .first {
            position: relative;
            margin-bottom: 30px;
            width: 100%;
            img {
                width: 100%;
            }
        }
        .second {
            width: 100%;
        }
        .outerLink {
            height: 226px;
            width: 100%;
            margin-top: 20px;
        }
    }
    .transFrame {
        img {
            width: 100%;
        }
    }
    .contactFrame {
        color: #f2f2f2;
        background: #171723;
        margin-top: -20px;
        padding-top: 50px;
        padding-bottom: 30px;
        .title {
            font-size: 0.52rem;
            margin-bottom: 10px;
        }
        .text {
            font-size: 0.24rem;
            margin-bottom: 10px;
            &.hashkey {
                padding-left: 0.4rem;
                background: url(${require("web-hashKey-imgs/hk/mobile/facebook.png")}) no-repeat;
                background-size: 0.28rem 0.28rem;
                background-position: 0px 2px;
                cursor: pointer;
            }
            &.hashquark {
                padding-left: 0.4rem;
                background: url(${require("web-hashKey-imgs/hk/mobile/twitter hover_pc.png")}) no-repeat;
                background-size: 0.28rem 0.28rem;
                background-position: 0px 2px;
                cursor: pointer;
            }
        }
    }
`;

module.exports = { WrapperFrame }
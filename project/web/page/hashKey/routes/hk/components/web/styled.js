import styled from 'styled-components';
const addressBG = require("web-hashKey-imgs/hk/web/addressBG.png");
const partnerBG = require("web-hashKey-imgs/hk/web/partnerBG.png");
const transBG = require("web-hashKey-imgs/hk/web/transBG.png");

const WrapperFrame = styled.div`
    .bannerFrame {
        position: relative;
        height: ${document.body.clientWidth / 1920 * 960}px;
        img {
            width: 100%;
            height: ${document.body.clientWidth / 1920 * 960}px;
        }
        .langChange {
            position: absolute;
            top: 20px;
            right: 50px;
            z-index: 1000;
            a {
                display: inline-block;
                padding: 0px 15px;
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
        background: url(${addressBG}) no-repeat;
        background-size: 100% 100%;
        height: ${document.body.clientWidth / 1920 * 600}px;
        .content {
            width: 100%;
            height: ${document.body.clientWidth / 1920 * 357}px;
            margin-top: -${document.body.clientWidth / 1920 * 100}px;
        }
        .gmBtn {
            display: inline-block;
            position: absolute;
            top: ${document.body.clientWidth / 1920 * 320}px;
            width: ${document.body.clientWidth / 1920 * 278}px;
            height: ${document.body.clientWidth / 1920 * 55}px;
            left: 50%;
            margin-left: -${document.body.clientWidth / 1920 * 139}px;;
            img {
                width: 100%;
            }
        }
    }
    .ticketFrame {
        background: #fff;
        padding: 100px 0 50px 0;
        img {
            &.content {
                width: 100%;
                margin-top: -50px;
            }
        }
        a {
            position: relative;
            display: inline-block;
            margin-top: 50px;
            left: 50%;
            margin-left: -122px;
            width: 243px;
            height: 55px;
            .buyBtn {
                width: 100%;
            }
        }
    }
    .agendaFrame {
        position: relative;
        background: #fbfcfc;
        padding: 70px 0 20px 0;
        .title {
            width: 308px;
            height: 26px;
            margin-bottom: 62px;
        }
        .switchTime {
            height: 50px;
            width: 100%;
            background: #e7edee;
            a {
                display: inline-block;
                width: 120px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                color: #838687;
                text-decoration: none;
                &.focus {
                    color: #108ee9;
                    border-bottom: 2px solid #108ee9;
                }
            }
        }
        .agend {
            width: 100%;
        }
        .apply {
            margin-top: 50px;
            display: inline-block;
            width: 332px;
            height: 234px;
            cursor: pointer;
        }
        .speakerFrame {
            margin-bottom: 30px;
            .eachSpeaker {
                cursor: pointer;
                min-width 265px;
                height: 347px;
                margin-bottom: 20px;
                text-align: center;
                background: #fff;
                .avator {
                    margin-top: 20px;
                    width: 100%;
                    height: 200px;
                }
                .name {
                    margin-top: 20px;
                    margin-bottom: 19px;
                    font-size: 18px;
                    color: #393939;
                }
                .info {
                    font-size: 12px;
                    color: #393939;
                    margin-bottom: 20px;
                }
            }
            .eachSpeakerDesc {
                cursor: pointer;
                color: #C3E4FF;
                height: 347px;
                max-width: 265px;
                background-image: linear-gradient(0deg, #05334E 0%, #0D4664 100%);
                box-shadow: 0 0 16px 0 rgba(27,47,76,0.50);
                margin-bottom: 20px;
                overflow-y: scroll;
                .name {
                    position: relative;
                    margin-top: 5px;
                    margin-bottom: 20px;
                    .label {
                        position: absolute;
                        display: inline-block;
                        height: 8px;
                        width: 20px;
                        background: #5B9DFF;
                        top: 6px;
                    }
                    .text {
                        margin-left: 30px;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .previousVIPFrame {
        padding: 50px 0;
        img {
            width: 100%;
        }
    }
    .partnerFrame {
        background: url(${partnerBG}) no-repeat;
        background-size: 100%;
        padding: 50px 0;
        img {
            width: 100%;
        }
    }
    .infoFrame {
        background: #fff;
        padding: 50px 0;
        .first {
            position: relative;
            margin-bottom: 30px;
            width: 100%;
            img {
                width: 100%;
            }
            .link {
                position: absolute;
                bottom: 5px;
                width: 300px;
                height: 30px;
                cursor: pointer;
            }
        }
        .second {
            width: 100%;
            margin-bottom: 30px;
        }
        .outerLink {
            height: 226px;
            width: 100%;
        }
        .second {
            margin-top: 40px;
        }
    }
    .previousPartnerFrame {
        background: #000;
        padding: 50px 0;
        img {
            width: 100%;
        }
    }
    .transFrame {
        padding: 50px 0 0px 0;
        background: url(${transBG}) no-repeat;
        background-size: 100%;
        img {
            width: 100%;
        }
    }
    .contactFrame {
        color: #f2f2f2;
        background: #171723;
        height: 230px;
        .title {
            font-size: 32px;
            margin-bottom: 10px;
        }
        .text {
            font-size: 16px;
            margin-bottom: 10px;
            &.hashkey {
                padding-left: 40px;
                background: url(${require("web-hashKey-imgs/hk/web/facebook.png")}) no-repeat;
                background-size: 25px 25px;
                cursor: pointer;
            }
            &.hashquark {
                padding-left: 40px;
                background: url(${require("web-hashKey-imgs/hk/web/twitter hover_pc.png")}) no-repeat;
                background-size: 25px 25px;
                cursor: pointer;
            }
        }
    }
`;

module.exports = { WrapperFrame }
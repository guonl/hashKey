import styled from 'styled-components'

const WrapperMobileFrame = styled.div`
    img {width: 100%;}
    .imgFrame {
        margin-top: -10px;
    }
    .offerings {
        position: relative;
        .btn {
            position: absolute;
            display: inline-block;
            left: 50%;
            margin-left: -2.8rem;
            width: 5.6rem;
            height: 0.88rem;
            line-height: 0.88rem;
            color: #fff;
            background: #3e8aff;
            text-align: center;
            border-radius: 5px;
            font-size: 0.30rem;
            bottom: 40px;
        }
    }
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
        img {width: 100%;}
        .banner {
            width: 100%;
            height: ${window.innerHeight}px;
            background-size: 100% ${window.innerHeight}px;
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
                background: url(${require("web-hashKey-imgs/home/mobile/facebook.png")}) no-repeat;
                background-size: 0.28rem 0.28rem;
                background-position: 0px 2px;
                cursor: pointer;
            }
            &.hashquark {
                padding-left: 0.4rem;
                background: url(${require("web-hashKey-imgs/home/mobile/twitter hover_pc.png")}) no-repeat;
                background-size: 0.28rem 0.28rem;
                background-position: 0px 2px;
                cursor: pointer;
            }
        }
    }
`;

module.exports = { WrapperMobileFrame }
import styled from 'styled-components';
const WrapperFrame = styled.div`
    background: #F6F6F6;
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
                cursor: pointer;
            }
            span {
                float: left;                
                height: 50px;
                line-height: 50px;
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
    .contentFrame {
        padding-top: 100px;
        .title {
            width: 69px;
            height: 60px;
            &.en {
                width: 525px;
                height: 55px;
            }
        }
        img {
            width: 100%
        }
        a {
            display: inline-block;
            width: 100%;
            img {
                width: 100%;
            }
        }
    }

`;

module.exports = { WrapperFrame };
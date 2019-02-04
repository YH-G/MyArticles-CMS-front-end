import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;   
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    padding-top: 26px;
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin; 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    height: 50px;
    width: 280px;
    margin-bottom: 6px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const WriterWrapper = styled.div`
    overflow: hidden;
    width: 278px;
    margin-top: 50px;
    .recommend {
        font-size: 14px;
        color: #969696;
        margin-bottom: 20px;
    }
`;

export const WriterItem = styled.div`
    width: 278px;
    height: 50px;
    margin-bottom:10px;
    .pic {
        width: 48px;
        height: 48px;
        float: left;
        border-radius: 50%;
        margin-right: 10px;
    }
    .name {
        padding-top: 5px;
        font-size: 14px;
        margin-right: 60px;
    }
    .desc {
        margin-top: 8px;
        font-size: 12px;
        color: #969696;
    }
    .follow {
        float: right;
        color: #42c02e;
        padding-top: 5px;
        font-size: 13px;
    }
`;

export const WriterInfo = styled.div`
    overflow: hidden;
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`;
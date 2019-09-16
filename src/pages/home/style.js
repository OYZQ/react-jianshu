import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`
export const HomeLeft = styled.div`
    margin-left:15px;
    padding-top:30px;
    width:625px;
    float:left
    .height {
        overflow:hidden;
        height:270px;
        .banner-img {
            width:625px; 
        }
    }
`
export const HomeRight = styled.div`
    margin-left:15px;
    padding-top:30px;
    width:280px;
    float:right
`
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float:left;
    margin-left:18px;
    margin-bottom:18px;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    padding-right:10px;
    font-size:14px;
    border:1px solid #dcdcdc;
    color:#000;
    border-radius:4px;
    .topic-pic {
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`

export const ListItem = styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .pic {
        width:150px;
        height:100px;
        display:block;
        float:right;
        border-radius:10px;
    }
    .title {
        font-size:18px;
        line-height:27px;
        font-weight: bold;
        color:#333;
    }
    .desc {
        font-size:13px;
        line-height:18px;
        color:#999;
    }
`

export const ListInfo = styled.div`
    width:475px;
    float:left;
`

export const RecommendWrapper = styled.div`
    margin:30ox 0;
    width:280px;
`

export const RecommendItem = styled.div`
    margin-bottom:8px;
    width:280px;
    height:50px;
    background: url(${(props)=>props.imgUrl});
    background-size:contain;
`

export const WriterWrapper = styled.div`
    margin-top:10px;
    overflow:hidden;
    width: 278px;
    border:1px solid #dcdcdc;
    border-radius:3px;
    box-sizing:border-box;
    padding: 10px 22px;
    .img {
        width:60px;
        height:60px;
        opacity: .85;
        float:left;
        margin-right:15px;
    }
    .p1 {
        margin-top:12px;
        font-size: 15px;
        color: #333;
    }
    .p2 {
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
`

export const AuthorWrapper = styled.div`
    overflow:hidden;
    font-size: 14px;
    color: #969696;
    margin-top:30px;
    width:280px;
    .pleft {
        float:left;
    }
    .pright {
        float:right;
    }
    .top {
        width:280px;
        height:30px;
        margin-bottom {
            20px;
        }
    }
    .btn {
        text-align:center;
        box-sizing:border-box;
        padding: 7px 7px 7px 12px;
        width: 280px;
        font-size: 13px;
        color: #787878;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        margin-top:15px;
        height:35px;
        line-height:21px;
    }
`

export const AuthorItem = styled.div`
    width:280px;
    height:47px;
    margin-bottom:10px;
    .dleft {
        float:left;
        width:48px;
        height:48px;
        border-radius:50%;
        overflow:hidden;
        img {
            width:48px;
            height:48px;
        }
    }
    .dcenter {
        float:left;
        margin-left:10px;
        .name {
            color:#333;
            padding-top: 5px;
            font-size: 14px;
            display: block; 
            margin-bottom:10px;
        }
        .like {
            margin-top: 2px;
            font-size: 12px;
            color: #969696;
        }
    }
    .dright {
        float: right;
        margin-top: 5px;
        font-size: 13px;
        color: #42c02e;
    }

`

export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0; 
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor:pointer;
`
export const BackTop = styled.div`
    position:fixed;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    right:100px;
    bottom:100px;
    font-size:14px;
`
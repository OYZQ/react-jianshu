import { fromJS } from 'immutable'


const defaultState = fromJS({
    topicList:[{
        id:1,
        title:'手绘',
        imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4233514953,1840853828&fm=26&gp=0.jpg'
    },{
        id:2,
        title:'社会热点',
        imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1285915342,2030353764&fm=26&gp=0.jpg'
    },{
        id:3,
        title:'简书电影',
        imgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2777367841,1393292491&fm=26&gp=0.jpg'
    },{
        id:4,
        title:'读书',
        imgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1472543868,2616728660&fm=26&gp=0.jpg'
    },{
        id:5,
        title:'摄影',
        imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=236393242,929126112&fm=11&gp=0.jpg'
    },{
        id:6,
        title:'旅行-在路上',
        imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568633769&di=5741393748bd3a978429c6a92a24565d&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201411%2F12%2F20141112101959_LwhHi.jpeg'
    },{
        id:7,
        title:'历史',
        imgUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2241529772,1423290637&fm=26&gp=0.jpg'
    }
    ],
    articleList:[{
        id:1,
        title:'简书一年，我找到了一份好工作',
        desc:'这是我的亲身经历，没有虚构，虽然它听起来不像真的。 2017年11月7日 星期二 晴 说起来很惭愧，在简书写了一年的文，至今，我还是原来的我，既...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:2,
        title:'简书一年，我出版了人生第一本书——给想出书的朋友们',
        desc:'翻看文集，才发现来到简书已经一年了。 第一篇文章发表与2017年7月24日，从那时起，我便开始了在简书定期写作更新的历程。至今总共发布了一百多篇...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/5303650-16bd31b30bff0a71.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:3,
        title:'《二十岁的年纪，做八十岁想起来都会嘴角上扬的事》',
        desc:'二十岁出头，正好处在一个尴尬的年纪。似乎看透了生活，实质却依旧单纯；似乎应有尽有，实质却一无所有；内心身怀雄心壮志，却又不得不脚踏实地。 身处二...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/3459828-fdf30bf7e301a6e9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:4,
        title:'【原创】我初来上海，如何从月薪2000到月入过万的？',
        desc:'1. “你必须非常努力，才能看起来毫不费力。”我看很多人把这句话当成座右铭，不知是否理解了其中的深意。 我刚来上海时，本想跟着好友Tommy工作...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/277382-0aee37a88701a0f1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:5,
        title:'做一名快乐的乡村教师',
        desc:'做一名快乐的乡村教师 如今，人们从事的职业有“三百六十行”之多。但不管你选择什么职业，最好是根据你自己所学专业、兴趣爱好，选择适合自己而喜欢的职...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/9136691-f5a7368989e6dc6d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:6,
        title:'54岁时，我终于圆了大学本科梦',
        desc:'戴建东 刊于2019年7月1日《金华日报》 毕业了，五年多时间，一千八百多个日日夜夜的伏案苦读，我这名中学生，终于换来了中国人民大学网络教育学院...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/6293121-be0cc96cbf4fb03f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:7,
        title:'我删掉了游戏《王者荣耀》',
        desc:'文／沐丞 最近身边很多人都在玩手游《王者荣耀》，有的人在聚餐等上菜的时候也不忘晚上一局，每天中午午休的时候也有不少同事都在拼命厮杀。有时候在咖啡...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/1417131-52d1bdc6e19156e5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:8,
        title:'养一条自来狗是什么体验',
        desc:'“如果每只狗，都有注定的一位主人，那么它的运气真的很好的，不是你选中了它，而是它在万千人群中，选中了你。” 我从来没养过狗，这是第一次养狗。 跟...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/1464364-6de002ec989a92e4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:9,
        title:'真实故事 | 从月薪1千到月薪3万 我都经历了什么',
        desc:'01 大学刚毕业的时候，工作不好找。找自己的本专业工作找了很久，都需要经验，没公司要我。 后来，我干脆放弃了找自己本专业的工作。我找销售类的工作...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/5440469-51c9d22950008274.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },],

    recommendList:[{
        id:1,
        imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },{
        id:2,
        imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },{
        id:3,
        imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },{
        id:4,
        imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    },],
    authorList:[{
        id:1,
        imgUrl:'https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        name:'乔汉童',
        like:'写了466.9k字 · 1.9k喜欢'
    },{
        id:2,
        imgUrl:'https://upload.jianshu.io/users/upload_avatars/6652326/ba6106f4-20eb-4735-885d-561083bd4e55.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        name:'没文化的野狐狸',
        like:'写了293.1k字 · 5.6k喜欢'
    },{
        id:3,
        imgUrl:'https://upload.jianshu.io/users/upload_avatars/5328453/0005e217-848f-4e50-b39b-6964a5138ef7?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        name:'骠姚校尉',
        like:'写了189k字 · 4.5k喜欢'
    },{
        id:4,
        imgUrl:'https://upload.jianshu.io/users/upload_avatars/11557689/ed2ea7f3-9d7d-41fc-a05a-daebb8097b0c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        name:'须僧',
        like:'写了56k字 · 3.6k喜欢'
    },{
        id:5,
        imgUrl:'https://upload.jianshu.io/users/upload_avatars/2027472/c6401dd5-ccd8-475f-9592-2b16be43ba7f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        name:'婠婠',
        like:'写了76.9k字 · 2.9k喜欢'
    },]
});

export default (state = defaultState,action) => {

    switch (action.type) {
        default: 
            return state;
    }
}
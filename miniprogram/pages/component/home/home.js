Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    list: [{
        img: 'https://wx3.sinaimg.cn/mw690/0084vph8ly1gubp33nvf1j60p00dwwhk02.jpg',
        url: '/music/music'
      },
      {
        img: 'https://wx1.sinaimg.cn/mw690/0084vph8ly1gubp33fhtjj60p00dwn0x02.jpg',
        url: '/voice/voice'
      }, {
        img: 'https://HinghwaDict-1259415432.cos.ap-shanghai.myqcloud.com/files/image/6/2021/12/05/WrUXiZC8fTxXZAc.png',
        url: '/condition/condition'
      }
    ]
  },

  methods: {
    getTools(e) {
      wx.navigateTo({
        url: '/pages/component' + e.currentTarget.dataset.url
      })
    }
  }
})
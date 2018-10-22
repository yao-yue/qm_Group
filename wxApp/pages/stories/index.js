const app = getApp()

Page({
    data: {
        stories: [],
        // 播放视频
        currentVid: null,
        currentVideo: null
    },
    onLoad () {
        this.setData({
            stories: app.globalData.stories
        })
    },

    play(event) {
        if(this.data.currentVid !== null) {
            this.data.currentVideo.pause();
        }
        console.log(event.currentTarget);
        console.log(event.currentTarget.dataset);
        const vid = event.currentTarget.dataset.vid;
        const currentVideo = wx.createVideoContext(`${vid}`);
        currentVideo.play();
        this.setData({
            currentVideo,
            currentVid: vid
        }, () => {
            currentVideo.play()
        })
    }
});
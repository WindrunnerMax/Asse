<script>
    import dispose from "@/vector/dispose";
    export default {
        globalData: {
            url: "https://www.example.com/",
        },
        onPageNotFound: (res) => { //处理404
            uni.reLaunch({
                url: "pages/system/not-found"
            })
        },
        onLaunch: function() {
            console.log("APP INIT");
            dispose.onLaunch.apply(this); //启动加载事件
        },
        onError: (err) => {
            console.log(err);
            dispose.toast("Internal Error");
        }
    }
</script>

<style lang="scss">
    @import "@/vector/resources/asse.scss";
    @import "@/vector/resources/iconfont.wxss";
    @import "@/vector/resources/asse.mini.wxss";
    button:after {
      border: none;
    }
    button {
      background: #fff;
      border: none;
      box-sizing: unset;
      padding: 0;
      margin: 0;
      color: inherit;
      font-size: inherit;
      line-height: unset;
      height: auto;
    }
</style>

<template>
  <div class="upload same_page">
    <h1>文件上传</h1>
    <ul class="upload_box">
      <li class="upload_img"
          v-for="(item, i) in imgsback"
          :key="i">
        <img class="img" :src="item" alt="图片..." />
        <span @click="delimgback(i)"><i class="el-icon-delete"></i></span>
      </li>
      <li class="upload_img upload_add">
        <div class="icon_line top_d"
             @click="centerUploadBox()"
             title="upfile">
          <div class="icon_line vertical"></div>
          <div class="icon_line cross"></div>
        </div>
        <input
            @change="fileChangeback($event)"
            name="file"
            class="icon_line file_s"
            type="file"
            id="batchUpload"
            accept="image/jpg, image/gif,image/png, image/jpeg"
            multiple="multiple" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})

export default class Upload extends Vue {
  imgsback: Array<any> = [] // 图片预览地址
  mounted () {
    console.log('Upload')
  }
}
</script>

<style lang="less" scoped>
html,
body,
p,
ul {
  margin: 0;
  padding: 0;
}

.display {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

.upload_box {
  margin: 0 auto;
  width: 340px;
  height: auto;
  padding: 5px 5px 0px 5px;
  border: 1px dashed #000;
  list-style: none;
  .display();
  flex-wrap: wrap;

  .upload_img {
    margin: 0 0 5px 10px;
    width: 100px;
    height: 100px;
    border: 1px dotted #999;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .upload_add {
    position: relative;

    .icon_line {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    .file_s {
      z-index: 1;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }

    .top_d {
      z-index: 2;
      width: 100%;
      height: 100%;
      background-color: #fff;
      position: relative;

      .icon_line {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }

      .vertical {
        width: 2px;
        height: 70%;
        background-color: #999;
      }

      .cross {
        width: 70%;
        height: 2px;
        background-color: #999;
      }
    }
  }
}
</style>

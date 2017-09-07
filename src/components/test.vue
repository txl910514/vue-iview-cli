<template>
    <div id="test">
        <!--<i class="el-icon-edit"></i>-->
        <!--<i class="el-icon-share"></i>-->
        <!--<i class="el-icon-delete"></i>-->
        <!--<el-button type="primary" icon="search">搜索</el-button>-->
        <!--<i class="el-icon-iconfont-naozhong"></i>-->
        <!--<el-button type="primary" icon="iconfont-bianji">搜索</el-button>-->
        <!--<el-button type="primary" icon="fontAwesome-car">搜索</el-button>-->
        <Icon type="checkmark" />
        <i class="ivu-icon ivu-icon-checkmark"></i>
        <Icon type="fontAwesome-camera-retro" />
        <Button type="primary" shape="circle" icon="fontAwesome-car"></Button>
        <i class="ivu-icon-fontAwesome-camera-retro"></i>
        <Icon type="iconfont-shipin" />
        <Button type="primary" shape="circle" icon="iconfont-shipin"></Button>
        <i class="ivu-icon-iconfont-shipin"></i>

    </div>
</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        user: {
          gender: ''
        },
        radio: '',
        radio1: 'label1',
        radio2: 3,
        radio3: 9,
        radio4: '上海',
        radio5: '北京',
        radio6: '深圳',
        checked: true
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      submit () {
        const formData = JSON.stringify(this.user)
        console.log(formData)
      }
    },
    components: {}
  }
</script>

<style lang="scss">
    #test {
        .el-row {
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .el-col {
            border-radius: 4px;
        }
        .bg-purple-dark {
            background: #99a9bf;
        }
        .bg-purple {
            background: #d3dce6;
        }
        .bg-purple-light {
            background: #e5e9f2;
        }
        .grid-content {
            border-radius: 4px;
            min-height: 36px;
        }
        .row-bg {
            padding: 10px 0;
            background-color: #f9fafc;
        }
    }
</style>

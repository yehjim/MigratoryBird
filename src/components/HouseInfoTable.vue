<template>
    <div class="allTable">
        <table class="table1">
            <tr>
                <td>物件坪數</td>
                <td class="data">{{square}}坪</td>
            </tr>
            <tr>
                <td>住屋人數</td>
                <td class="data">{{live_number}}人</td>
            </tr>
            <tr>
                <td>隔間數量</td>
                <td class="data">{{room}}間</td>
            </tr>
            <tr>
                <td>總樓層</td>
                <td class="data">{{stair}}樓</td>
            </tr>
            <tr>
                <td>押金</td>
                <td class="data">NTD{{deposit}}</td>
            </tr>
        </table>
        <table class="table2">
            <tr>
                <td>開伙</td>
                <td class="data" v-if="open_fire">是</td>
                <td class="data" v-else>否</td>
            </tr>
            <tr>
                <td>養寵物</td>
                <td class="data" v-if="pet">是</td>
                <td class="data" v-else>否</td>
            </tr>
            <tr>
                <td>性別限制</td>
                <td class="data">{{gender}}</td>
            </tr>
            <tr>
                <td>最短租期</td>
                <td class="data">{{min_lease}}年</td>
            </tr>
            <tr>
                <td>產權登記</td>
                <td class="data">{{property_right}}</td>
            </tr>
            <tr>
                <td>法定用途</td>
                <td class="data">{{legal_use}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'HouseInfoTable',
    props:['square','live_number','room','stair','deposit','open_fire','pet','gender','legal_use'],
    data() {
        return {
            gender_restrict: '男',
            min_lease: '一',
            property_right: '已辦',
            usage_of_object: '住家用',
        }
    }
}
</script>

<style lang="scss" scoped>
.allTable {
    display: flex;
    justify-content: space-around;
    .table1,
    .table2 {
        display: inline-block;
        font-size: 15px;
        color: #7e7e7e;
        // border: solid 1px;
        margin-bottom: 20px;
        width: 40%;
        td {
            padding-top: 5px;
            padding-left: 10px;
        }
        .data {
            padding-left: 20px;
        }
    }
    .table2 {
        // margin-left: 70px;
    }
}
</style>
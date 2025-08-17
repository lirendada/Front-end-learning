<template>
    <div class="score-case">
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>科目</th>
                        <th>成绩</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in scoreList" :key="item.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.subject }}</td>
                        <td :class="{red: item.score < 60}">{{ item.score }}</td>
                        <td><a href="#" @click="delItem(index)">删除</a></td>
                    </tr>
                    <tr v-if="scoreList.length === 0">
                        <td colspan="5">
                            <span class="none">暂无数据</span>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="5">
                            <span>总分: {{ total }}</span>
                            <span style="margin-left: 50px">平均分: {{ average }}</span>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <form class="form">
            <div class="form-item">
                <div class="label">科目：</div>
                <div class="input">
                    <input type="text" placeholder="请输入科目" v-model.trim="addSubject"/>
                </div>
            </div>
            <div class="form-item">
                <div class="label">分数：</div>
                <div class="input">
                    <input type="number" placeholder="请输入分数" v-model.trim.number="addScore"/>
                </div>
            </div>
            <div class="form-item">
                <div class="label"></div>
                <div class="input">
                    <button class="submit" @click.prevent="addItem">添加</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { now } from '@vueuse/core';
import { computed, ref, watch } from 'vue'

    const SCORE_ITEM_KEY = 'score-item-key';

    // 成绩列表
    const scoreList = ref(JSON.parse(localStorage.getItem(SCORE_ITEM_KEY))
        || [
        { id: 19, subject: '语文', score: 94 },
        { id: 27, subject: '数学', score: 59 },
        { id: 12, subject: '英语', score: 92 }
    ])

    // 总分
    const total = computed(() => {
        return scoreList.value.reduce((sum, item) => sum + item.score, 0);
    })

    // 平均分
    const average = computed(() => {
        if (scoreList.value.length === 0) return 0; // 避免除0错误
        const total = scoreList.value.reduce((sum, item) => sum + item.score, 0);
        return (total / scoreList.value.length).toFixed(2); // 返回两位小数
    })

    const addSubject = ref('');
    const addScore = ref('');

    const addItem = () => {
        if (!addSubject.value || !addScore.value) {
            alert("科目或成绩不能为空！");
            return;
        }
        scoreList.value.push({
            id: now(), 
            subject: addSubject.value, 
            score: addScore.value})
        addScore.value = ''
        addSubject.value = ''
    }

    const delItem = (index) => {
        if(window.confirm("确认删除吗？")) {
            scoreList.value.splice(index, 1);
        }
    }

    watch(scoreList, (newVal) => {
        // 存放到localStorage中持久化
        localStorage.setItem(SCORE_ITEM_KEY, JSON.stringify(newVal))
    }, {deep: true}
    )
</script>

<style>
.score-case {
    width: 1000px;
    margin: 50px auto;
    display: flex;
}

.score-case .table {
    flex: 4;
}

.score-case .table table {
    width: 100%;
    border-spacing: 0;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
}

.score-case .table table th {
    background: #f5f5f5;
}

.score-case .table table tr:hover td {
    background: #f5f5f5;
}

.score-case .table table td,
.score-case .table table th {
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    text-align: center;
    padding: 10px;
}

.score-case .table table td.red,
.score-case .table table th.red {
    color: red;
}

.score-case .table .none {
    height: 100px;
    line-height: 100px;
    color: #999;
}

.score-case .form {
    flex: 1;
    padding: 20px;
}

.score-case .form .form-item {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
}

.score-case .form .form-item .label {
    width: 60px;
    text-align: right;
    font-size: 14px;
}

.score-case .form .form-item .input {
    flex: 1;
}

.score-case .form .form-item input,
.score-case .form .form-item select {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 200px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
}

.score-case .form .form-item input::placeholder {
    color: #666;
}

.score-case .form .form-item .cancel,
.score-case .form .form-item .submit {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 10px;
    margin-right: 10px;
    font-size: 12px;
    background: #ccc;
}

.score-case .form .form-item .submit {
    border-color: #069;
    background: #069;
    color: #fff;
}
</style>
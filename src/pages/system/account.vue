<template>
  <div class="erp-table account">
    <el-row class="form-box">
      <el-col :span="12">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-input
              v-model="searchVal"
              placeholder="请输入搜索内容"
              prefix-icon="el-icon-search"
              size="small"
              clearable>
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-button size="small" type="primary" plain icon="el-icon-search">搜索</el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row type="flex" justify="end">
          <el-button size="small" type="primary">添加</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </el-row>
      </el-col>
    </el-row>
    <div class="tip-box">
      <el-alert
        title="这里是温馨提示信息"
        type="warning"
        show-icon
        :closable="false">
      </el-alert>
    </div>
    <div class="table-box">
      <el-table
        :data="tableData"
        :height="tableHeight"
        border
        highlight-current-row
        >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱">
        </el-table-column>
        <el-table-column
          prop="status"
          label="是否激活">
        </el-table-column>
        <el-table-column
          prop="auth"
          label="权限">
        </el-table-column>
        <el-table-column
          prop="role"
          label="角色">
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-size="pageSize"
        :page-sizes="pageSizes"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {
  getAccountList
} from '../../api'
export default {
  name: 'account',
  data() {
    return {
      searchVal: '',
      curPage: 1,
      pageSize: 10,
      pageSizes: [5, 10, 20, 50, 100],
      tableData: []
    };
  },
  mounted() {
    getAccountList().then(res => {
      console.log(res);
      this.tableData = res.data.list;
    });
  },
  computed: {
    tableHeight() {
      return 300;
    }
  },
  methods: {
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style lang="less">
.erp-table {
  height: 100%;
  padding: 20px;
}
</style>

//获取各结点
//任务输入框
var taskInput = document.querySelector(".active input");
//未完成任务数量
var unfinishedTaskNum = document.querySelector(".unfinishedTaskNum");
//所有任务
var all = document.querySelector(".option span:nth-of-type(1)");
//已完成
var finished = document.querySelector(".option span:nth-of-type(2)");
//未完成
var unfinished = document.querySelector(".option span:nth-of-type(3)");
//任务列表
var taskList = document.querySelector(".taskList");
//添加按钮
var add = document.querySelector(".add");

//用来记录输入任务的历史总数
var taskNum;
//识别当前选择展示的是哪一个任务
var flag;

//监听当在任务输入框按下回车键时事件
taskInput.addEventListener("keydown", checkedInput);
//监听点击查看所有任务事件
all.addEventListener("click", showAllTask);
//监听点击查看已完成的任务事件
finished.addEventListener("click", showFinishedTask);
//监听点击查看未完成的任务事件
unfinished.addEventListener("click", showUnfinishedTask);
//监听改变任务状态事件
taskList.addEventListener("click", changeTaskStatus);

//获取本地存储中的任务数据
function getLocalDate() {
	//获取本地存储中的任务数据（字符串类型）
	var taskData = localStorage.taskList;
	//如果本地有数据就转成数组对象，没有定义一个新的空数组
	//JSON.parse:将字符串数据转换为json对象
	var taskArr = taskData == undefined ? [] : JSON.parse(taskData);
	return taskArr;
}

function checkedInput(event) {
	if (event.key == "Enter") {
		//判断输入的任务是否为空
		if (taskInput.value == "") {
			alert("请输入非空的任务");
		} else {
			addTask();
			//同时清空输入框
			taskInput.value = "";
		}
	}
}

//考虑到移动端无enter键，所以添加了点击按钮添加任务的功能
add.addEventListener("click", function () {
	//判断输入的任务是否为空
	if (taskInput.value == "") {
		alert("请输入非空的任务");
	} else {
		addTask();
		//同时清空输入框
		taskInput.value = "";
	}
});

function addTask() {
	//从本地存储取数据
	var taskArr = getLocalDate();
	//判断localStorage中是否有数据，没有设置任务总数为0，有则取历史任务总数
	taskNum = localStorage.taskNum == undefined ? 0 : localStorage.taskNum;
	//获取用户输入的任务并创建对象
	var taskItem = {
		id: taskNum++,
		name: `${taskInput.value}`,
		//true:已完成 false:未完成
		status: false,
	};
	//向数组追加新添加的任务
	taskArr.push(taskItem);
	//JSON.stringify:把数组对象转换成字符串
	localStorage.taskList = JSON.stringify(taskArr);
	//更新历史任务总数
	localStorage.taskNum++;
	//渲染数据
	showTask();
}

function showTask(state) {
	taskList.innerHTML = "";
	//从本地存储取数据
	var taskArr = getLocalDate();
	//总任务数
	var total = taskArr.length;
	//过滤出未完成的任务
	var noTask = taskArr.filter(function (taskItem) {
		return taskItem.status == false;
	});
	//未完成的数量
	var noTaskNum = noTask.length;
	//展示未完成的任务数量/总任务数
	unfinishedTaskNum.innerHTML = `${noTaskNum}/${total}`;
	//遍历全部的任务筛选符合条件的任务并展示
	taskArr.forEach(function (taskItem, index) {
		//创造节点li
		var li = document.createElement("li");
		//判断是否为对应的任务状态
		if (taskItem.status == state) {
			li.innerHTML = `<input type="checkbox" ${taskItem.status == true ? "checked" : ""} value="${taskItem.id}" />
							<span class=${taskItem.status == true ? "delete" : ""}>${taskItem.name}</span>
							<a data-index="${taskItem.id}" href="javascript:void(0);">🗑️删除</a>`;
			//将新的li插入到ul第一个子节点之前
			taskList.insertBefore(li, taskList.firstElementChild);
		} else if (state == undefined) {
			li.innerHTML = `<input type="checkbox" ${taskItem.status == true ? "checked" : ""} value="${taskItem.id}" />
							<span class=${taskItem.status == true ? "delete" : ""}>${taskItem.name}</span>
							<a data-index="${taskItem.id}" href="javascript:void(0);">🗑️删除</a>`;
			//将新的li插入到ul第一个子节点之前
			taskList.insertBefore(li, taskList.firstElementChild);
		}
	});
}

function changeStyle(current, other1, other2) {
	current.style.cssText = "border-bottom: 3px solid white";
	other1.style.cssText = "border-bottom: 0";
	other2.style.cssText = "border-bottom: 0";
}

function showAllTask() {
	changeStyle(all, finished, unfinished);
	showTask();
	flag = undefined;
}

function showFinishedTask() {
	changeStyle(finished, all, unfinished);
	showTask(true);
	flag = true;
}

function showUnfinishedTask() {
	changeStyle(unfinished, all, finished);
	showTask(false);
	flag = false;
}

//利用事件委托 实现通过点击复选框或者删除按钮 来修改对应任务的状态
function changeTaskStatus(event) {
	//从本地存储取数据
	var taskArr = getLocalDate();
	//浏览器适配
	var target = event.target || event.srcElement;
	//获取任务列表的复选框对象
	if (target.nodeName == "INPUT") {
		//获取复选框的状态
		var status = target.checked;
		// 如果复选框被选中则添加删除线和背景等样式
		if (status) {
			// nextElementSibling：获取下一个兄弟元素节点并增加一个类名delete以展示样式
			target.nextElementSibling.className = "delete";
		} else {
			target.nextElementSibling.className = "";
		}
		//根据taget.value记录的id查询对应的obj后，修改点击的数据对应的状态
		var taskItem = taskArr.find(function (taskItem) {
			return taskItem.id == target.value;
		});
		taskItem.status = status;
	} else if (target.nodeName == "A") {
		//获取自定义属性值存储对应的id值
		var targetId = target.getAttribute("data-index");
		//根据targetId查询对应的obj的数组下标index并删除对应obj
		taskArr.splice(
			taskArr.findIndex((item) => item.id == targetId),
			1
		);
	}
	//更新本地存储
	localStorage.taskList = JSON.stringify(taskArr);
	//重新渲染,需要判断当前点击的是哪个查询选项
	showTask(flag);
}

//页面加载时调用showTask()，flag为undefined，显示所有任务
showTask();

<a name="KJJCP"></a>
# 一.项目介绍
本项目是使用前后端分离构建的简单**TodoList**应用，实现了对任务的**增删改查**操作。
<a name="u5Ode"></a>
## 1.技术栈
本项目使用技术栈如下：

- **HTML、CSS、JS(Jquery)**
- **Express**
- **mysql**
> **Api接口编写采用Restful风格**
> **响应式设计，移动端适配**

- **桌面**

![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671531352052-538630ed-235c-42b6-b8b6-2d7cdf98f512.png#averageHue=%23c9c8bc&clientId=ue62584dc-52a8-4&from=paste&height=219&id=u9cdb408a&originHeight=1336&originWidth=2560&originalType=binary&ratio=1&rotation=0&showTitle=false&size=159417&status=done&style=none&taskId=ua441758f-cd4e-4cc2-8d60-4e403c5c84c&title=&width=420.00006103515625)

- **移动端**

![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671531382132-9a32f49a-e5c8-4360-a670-270e2e221766.png#averageHue=%23ccc0ab&clientId=ue62584dc-52a8-4&from=paste&height=481&id=u9133f71e&originHeight=841&originWidth=473&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51103&status=done&style=none&taskId=u0e20fbd2-09c0-4731-8b37-d475b5bb4dd&title=&width=270.2857142857143)
<a name="aqLJt"></a>
## 2.包含功能

- **查看未完成、已完成、全部任务**
- **添加任务**
- **修改任务内容、日期、状态**
- **删除任务**
- **统计展示未完成/全部任务的数量**
<a name="tyiiQ"></a>
# 二.具体功能展示
<a name="ZZtXS"></a>
## 1.查看任务列表
<a name="QgiE6"></a>
### 查看未完成任务
**启动应用默认页面**<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671531382132-9a32f49a-e5c8-4360-a670-270e2e221766.png#averageHue=%23ccc0ab&clientId=ue62584dc-52a8-4&from=paste&height=481&id=penaK&originHeight=841&originWidth=473&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51103&status=done&style=none&taskId=u0e20fbd2-09c0-4731-8b37-d475b5bb4dd&title=&width=270.2857142857143)
<a name="K1kJS"></a>
### 查看全部任务
**点击界面中的All 按钮即可**<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671531748900-d60c8616-6f5a-4962-acda-f04501a2c5dd.png#averageHue=%23cdc1ac&clientId=ue62584dc-52a8-4&from=paste&height=481&id=u07984538&originHeight=841&originWidth=473&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51901&status=done&style=none&taskId=uef4ef69c-5883-4a8f-a18b-f7166096bef&title=&width=270.2857142857143)
<a name="UhpXu"></a>
### 查看已完成任务
**点击界面中已完成按钮**<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671531836168-15acc1bf-055d-497d-9090-2e3d156e8dba.png#averageHue=%23cabeaa&clientId=ue62584dc-52a8-4&from=paste&height=481&id=ud31bb0b1&originHeight=841&originWidth=473&originalType=binary&ratio=1&rotation=0&showTitle=false&size=47446&status=done&style=none&taskId=u67618431-03d0-49eb-b533-456e4e02634&title=&width=270.2857142857143)
<a name="D7R0P"></a>
## 2.添加任务

- 根据输入框提示：在输入框上方选择截止日期，并输入任务内容
- 点击回车或者界面中添加图标按钮即可添加任务
- 添加到列表中第一个任务前面
- 输入内容不为空提示

**添加前/添加后**<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671532127751-56e9cd74-f269-4c37-b6b4-5024ac847752.png#averageHue=%23cabea9&clientId=ue62584dc-52a8-4&from=paste&height=481&id=u2b2e0f5e&originHeight=841&originWidth=473&originalType=binary&ratio=1&rotation=0&showTitle=false&size=50261&status=done&style=none&taskId=u74a2a86e-b4a5-4338-9833-45940ecd1c3&title=&width=270.2857142857143)![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671532188706-063d3c16-c756-44cb-a594-eab77d094c5d.png#averageHue=%23ccbfaa&clientId=ue62584dc-52a8-4&from=paste&height=481&id=z0JlY&originHeight=841&originWidth=473&originalType=binary&ratio=1&rotation=0&showTitle=false&size=52249&status=done&style=none&taskId=u512603a4-d265-4924-bebd-0510a749965&title=&width=270.2857142857143)

**当输入框为空时，提示不能添加空的任务**<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671532998110-bc8593d9-f445-4e23-a1b5-2639a3a9506f.png#averageHue=%23bccab4&clientId=ue62584dc-52a8-4&from=paste&height=498&id=u1bec5290&originHeight=1179&originWidth=877&originalType=binary&ratio=1&rotation=0&showTitle=false&size=85959&status=done&style=none&taskId=u10adb400-1b33-4c42-a45a-eb369e48808&title=&width=370.14288330078125)
<a name="CGQ4o"></a>
## 3.修改任务
<a name="w0a25"></a>
### 修改任务状态

- 点击任务前的**复选框**即可完成任务状态切换
- 修改状态后的任务会自动转移到对应分类状态下展示

**修改前/修改后**<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671532188706-063d3c16-c756-44cb-a594-eab77d094c5d.png#averageHue=%23ccbfaa&clientId=ue62584dc-52a8-4&from=paste&height=424&id=jNvb0&originHeight=841&originWidth=473&originalType=binary&ratio=1&rotation=0&showTitle=false&size=52249&status=done&style=none&taskId=u512603a4-d265-4924-bebd-0510a749965&title=&width=238.28573608398438)![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671532676003-97166fdc-b2bd-49c3-aa65-ea350eedaa56.png#averageHue=%23ccbfab&clientId=ue62584dc-52a8-4&from=paste&height=425&id=uc8d9ea6d&originHeight=841&originWidth=473&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51163&status=done&style=none&taskId=u7314fabd-4b8d-4199-949e-7fb604192c5&title=&width=239.2857208251953)![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671532687174-4f5590a5-eed1-4db3-ab71-cd14a53d9a94.png#averageHue=%23cbbfa9&clientId=ue62584dc-52a8-4&from=paste&height=425&id=u4faf883f&originHeight=841&originWidth=473&originalType=binary&ratio=1&rotation=0&showTitle=false&size=54119&status=done&style=none&taskId=u486f7560-17a7-4bdf-8326-9ca19d05bb2&title=&width=239.2857208251953)
<a name="AK1sd"></a>
### 修改任务内容

- 点击任务列表中的**任务内容**后，在弹出的对话框输修改的内容
- 修改值不为空

**修改前/修改后**<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671535919531-630b5211-1b9d-4f1e-83a6-0fd3d09e91e2.png#averageHue=%23bdcab4&clientId=ue62584dc-52a8-4&from=paste&height=494&id=u95a7a222&originHeight=1179&originWidth=901&originalType=binary&ratio=1&rotation=0&showTitle=false&size=93040&status=done&style=none&taskId=u9636daf2-0586-4a72-88de-15fc5bacbcf&title=&width=377.857177734375)![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671535932962-6218e905-6770-4577-85e2-b997e8e32322.png#averageHue=%23ccbfaa&clientId=ue62584dc-52a8-4&from=paste&height=509&id=ud3b66c43&originHeight=841&originWidth=474&originalType=binary&ratio=1&rotation=0&showTitle=false&size=52444&status=done&style=none&taskId=uce10b1de-08bb-44bb-9e38-5a027a86a72&title=&width=286.8571472167969)<br />**当输入的修改值为空时，提示修改值不能为空**<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671535980381-158cef25-92c1-4371-ac2c-03ac2fde0483.png#averageHue=%23c0c9b4&clientId=ue62584dc-52a8-4&from=paste&height=442&id=u55c5d5df&originHeight=1183&originWidth=865&originalType=binary&ratio=1&rotation=0&showTitle=false&size=91759&status=done&style=none&taskId=u3421f95d-47b6-4245-b708-5b7683b97c9&title=&width=323.2857360839844)![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671536006434-cd914a63-27d9-4c5a-810c-893bceb62782.png#averageHue=%235eae6e&clientId=ue62584dc-52a8-4&from=paste&height=435&id=uc04f36d1&originHeight=1190&originWidth=1017&originalType=binary&ratio=1&rotation=0&showTitle=false&size=91296&status=done&style=none&taskId=ue473985b-584b-4b58-88d5-9c0bb3dc2b6&title=&width=372.14288330078125)
<a name="ueW7t"></a>
### 修改任务日期

- 点击任务列表中的**日期**后，在弹出的对话框输修改的内容
- 可输入日期为字符串类型
- 输入的日期不为空

**修改前/修改后**<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671536277745-60233254-5ff0-48f9-bdd2-db1dda001a20.png#averageHue=%235eae6f&clientId=ue62584dc-52a8-4&from=paste&height=491&id=ud2c04633&originHeight=1172&originWidth=1030&originalType=binary&ratio=1&rotation=0&showTitle=false&size=96332&status=done&style=none&taskId=u1d2e0bbf-78b1-4e5a-b5cb-a6ab9874583&title=&width=431.5714416503906)![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671536288801-af8be7ca-f5cb-4085-80a4-bc76b2b4bb08.png#averageHue=%23ccbfaa&clientId=ue62584dc-52a8-4&from=paste&height=493&id=u35c42eaf&originHeight=841&originWidth=474&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51923&status=done&style=none&taskId=u82bd9c1f-8cc0-46da-b327-64a6bb94eb7&title=&width=277.8571472167969)<br />**当输入的修改值为空时，提示修改值不能为空**<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671536349587-43997d9b-9d80-44e1-bb19-8af54aba277b.png#averageHue=%235eae6f&clientId=ue62584dc-52a8-4&from=paste&height=413&id=u69245781&originHeight=1168&originWidth=1036&originalType=binary&ratio=1&rotation=0&showTitle=false&size=94969&status=done&style=none&taskId=u1139b957-3e2f-4c6e-b02e-51d35413f94&title=&width=366.0000305175781)![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671536404543-50a19613-626b-4469-86ab-aee826c8f11e.png#averageHue=%235dae6e&clientId=ue62584dc-52a8-4&from=paste&height=416&id=ucc67d870&originHeight=1179&originWidth=1017&originalType=binary&ratio=1&rotation=0&showTitle=false&size=90645&status=done&style=none&taskId=ud047e64d-ae1f-468b-aa10-cb9de0bd569&title=&width=359.14288330078125)
<a name="WWS11"></a>
## 4.删除任务

- 点击任务列表后的**删除按钮**即可删除对应的任务
- 删除前再次提醒确认是否删除

**删除确认/删除后**<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671536661903-6897d7ea-69cb-4112-9d8b-af8ecc718930.png#averageHue=%235eae6e&clientId=ue62584dc-52a8-4&from=paste&height=480&id=ud41f90f6&originHeight=1176&originWidth=1068&originalType=binary&ratio=1&rotation=0&showTitle=false&size=92937&status=done&style=none&taskId=u2b46a399-98a4-4b50-8a51-b52dd383465&title=&width=436.2857360839844)![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671536687421-cdeb3959-c52f-479b-bd1e-4eadecf072f3.png#averageHue=%23ccc0ab&clientId=ue62584dc-52a8-4&from=paste&height=481&id=u7fcee594&originHeight=841&originWidth=474&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51110&status=done&style=none&taskId=u9c0ec5d2-0a89-4df8-ba8d-c688dd8996c&title=&width=270.85714285714283)
<a name="DHVKN"></a>
## 5.统计
**统计展示未完成/全部任务的数量**<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671536942295-8c81e088-3673-4fde-b41e-54ea3486fc31.png#averageHue=%23c8bda7&clientId=ue62584dc-52a8-4&from=paste&height=481&id=udf41026e&originHeight=841&originWidth=474&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51207&status=done&style=none&taskId=u32c1514a-5f31-49bf-894a-5891f17097a&title=&width=270.85714285714283)
<a name="WjkdA"></a>
# 三.核心代码解析
<a name="nhpU4"></a>
## 1.前端

- 通过利用**Jquery**中**ajax**库实现与后端交互，实现任务的增删改查

![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671537167394-3b52da09-b4bc-4ecc-b64c-91aa6b012ff5.png#averageHue=%232a2c33&clientId=ue62584dc-52a8-4&from=paste&height=798&id=u3b710344&originHeight=1397&originWidth=979&originalType=binary&ratio=1&rotation=0&showTitle=false&size=176379&status=done&style=none&taskId=u7cfae1a6-5a4f-475a-81be-fd5e21bd7c7&title=&width=559.4285714285714)<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671537212486-deebac7b-841b-4c17-814e-8cc292dfb73f.png#averageHue=%232a2c33&clientId=ue62584dc-52a8-4&from=paste&height=473&id=u7c200a76&originHeight=909&originWidth=1082&originalType=binary&ratio=1&rotation=0&showTitle=false&size=115932&status=done&style=none&taskId=ua763c540-5f59-4dd6-b06c-21c87ce0582&title=&width=563.2857666015625)<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671537234017-62694197-f11d-44dd-a4f1-4983cac78a26.png#averageHue=%232a2c33&clientId=ue62584dc-52a8-4&from=paste&height=482&id=u2d815a90&originHeight=727&originWidth=846&originalType=binary&ratio=1&rotation=0&showTitle=false&size=75260&status=done&style=none&taskId=u6208031f-edff-47f7-b99d-41452c744f8&title=&width=561.4285888671875)

- **利用事件委托获取不同的结点，来实现修改任务状态、内容、截止日期，删除任务**

![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671538247303-9033825f-3274-4b38-8b70-6cdf65d5e15f.png#averageHue=%23292b30&clientId=ue62584dc-52a8-4&from=paste&height=766&id=u1c8da763&originHeight=1341&originWidth=2170&originalType=binary&ratio=1&rotation=0&showTitle=false&size=244509&status=done&style=none&taskId=u5283e540-fdda-4818-a768-a23cbb395f7&title=&width=1240)<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671538283504-bd57df7a-2f47-4dec-b797-b8ac2fddbb73.png#averageHue=%23292b30&clientId=ue62584dc-52a8-4&from=paste&height=763&id=u69fc579a&originHeight=1335&originWidth=2185&originalType=binary&ratio=1&rotation=0&showTitle=false&size=204337&status=done&style=none&taskId=ufe99cbbc-3e7c-4a6a-bfcd-6a68b1f9537&title=&width=1248.5714285714287)
<a name="R7hp8"></a>
## 2.后端

- 解决跨域问题

![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671538411730-de6cfa39-03e2-42bc-8b89-071aedf03c5e.png#averageHue=%232a2b31&clientId=ue62584dc-52a8-4&from=paste&height=335&id=uf71f8976&originHeight=586&originWidth=2141&originalType=binary&ratio=1&rotation=0&showTitle=false&size=179775&status=done&style=none&taskId=u1d3c7c0c-79ff-43e0-8ca0-b13ccdc9b0c&title=&width=1223.4285714285713)

- 查所有任务

![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671538467547-7e9b6361-f3f4-46ba-96bf-3d79676497b3.png#averageHue=%23292b31&clientId=ue62584dc-52a8-4&from=paste&height=278&id=uc7943c0e&originHeight=486&originWidth=1444&originalType=binary&ratio=1&rotation=0&showTitle=false&size=80030&status=done&style=none&taskId=u0205f735-2505-46ff-b7ed-05742643bab&title=&width=825.1428571428571)

- 增加单个任务

![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671538496306-cece7ed8-0095-48fd-809a-47bff4970d2b.png#averageHue=%23292c31&clientId=ue62584dc-52a8-4&from=paste&height=382&id=u11e20bca&originHeight=669&originWidth=1772&originalType=binary&ratio=1&rotation=0&showTitle=false&size=144197&status=done&style=none&taskId=ubb34ae7a-8fea-4e5b-883f-2e7c95ad12e&title=&width=1012.5714285714286)

- 更新某个任务

![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671538523389-2807b6dc-16a8-476b-afb9-5ad3a80a2291.png#averageHue=%23292b30&clientId=ue62584dc-52a8-4&from=paste&height=775&id=u91b7ab21&originHeight=1357&originWidth=1841&originalType=binary&ratio=1&rotation=0&showTitle=false&size=227449&status=done&style=none&taskId=uecad3920-f6aa-45e2-9520-9169aaceb14&title=&width=1052)

- 删除单个任务

![image.png](https://cdn.nlark.com/yuque/0/2022/png/22336651/1671538556973-af49a70b-96bf-45ad-a1d7-707785810d5c.png#averageHue=%23292b30&clientId=ue62584dc-52a8-4&from=paste&height=412&id=u54bb4702&originHeight=721&originWidth=1890&originalType=binary&ratio=1&rotation=0&showTitle=false&size=125876&status=done&style=none&taskId=ucb1618db-55f3-4bf3-a669-26e3e30ea53&title=&width=1080)
<a name="Z5S7c"></a>
# 四.心得体会
**通过本次从头开始完整编写一个简单的前后端分离的TodoList项目，其中收获很大。首先，在编写HTML编写过程中体会到了编写结构清晰，标签语义化，标签类名易读性的代码的必要性。为了让界面更加美观和布局更加合理，学会了一点响应式的设计原则适配移动端设备，在编写css过程中也注意到了编写代码结构化清晰的重要性，体验到了css的编写不仅仅时为了美观，更重要的是要让用户有更好的用户体验，比如当点击按钮时候，按钮会有一些样式上变化反馈，让用户知道自己成功点击了该按钮。在js的编写过程中，学到了ajax库，体验熟悉了前后交互的过程，使用js操作创建DOM，以及事件捕获，加深了对js的熟练度。在后端Api编写过程中遇到了一些问题，但最终通过不断修改也解决了问题，从中也理解了Restful Api设计风格的奥妙之处，在处理跨域问题上，通过查阅资料，了解学习了一些跨域的知识。总之，通过本次项目的实践发现了很多问题，同时也通过学习解决了一些问题，自身也得到了很多锻炼。**

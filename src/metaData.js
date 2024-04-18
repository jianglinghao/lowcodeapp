export default {
        "frontendEvents": {
        "postRequest": "window.postRequest = async (event) => { \nawait (async () => {\n    ;\n    let code = undefined;\n    let msg = undefined;\n\n/* 本逻辑为PC端事件逻辑——如无必要，请勿删改\n\n本逻辑作用：\n\n当PC端页面逻辑调用服务端逻辑后，会执行本事件逻辑\n\n接收返回信息，处理状态码和错误码\n\n如有需要，开发者可变更错误码对应的处理方式\n */\nawait (async () => {\n            'use JSBlock' \r\n var body = JSON.parse(event.body)\r\nif(body){\r\n    code = body.code\r\n    msg = body.msg || body.message || '系统错误，请查看日志'\r\n}\n        })();\nawait (console.log(this.$utils['ToString']('nasl.core.String', this.$utils['ToString']('nasl.core.String', code))))\nif (((event || {}).status) == (`200`)) {\nif (this.$global.isEqual(code, `400`)) {\nawait (this.$toast.show(this.$utils['ToString']('nasl.core.String', `msg`)))\n}\nelse if (this.$global.isEqual(code, `401`)) {\nawait (async () => {\n            'use JSBlock' \r\nif (body.Message === 'token.is.invalid') {\r\n    location.href = '/login';\r\n}\n        })();\n}\nelse if (this.$global.isEqual(code, `403`)) {\nawait (async () => {\n             'use JSBlock' \r\n if (err.Code === 'InvalidToken' && err.Message === 'Token is invalid') {\r\n    if (!config.noErrorTip) {\r\n        instance.show('登录失效', '请重新登录');\r\n    }\r\n    localStorage.setItem('beforeLogin', JSON.stringify(location));\r\n    location.href = '/login';\r\n}\n        })();\n}\nelse if (this.$global.isEqual(code, `500`)) {\nawait (this.$toast.show(this.$utils['ToString']('nasl.core.String', `msg`)))\n}\nelse if (this.$global.isEqual(code, `501`)) {\nif ((msg) == (`abort`)) {\nthrow Error('程序中止');\n} else {\n}\n\n}\nelse {\n}\n\n}     else {\nif ((code) == (`200`)) {\n}         else {\nthrow Error('程序中止');\n}\n\n}\n\nreturn;\n})();\n}\n","beforeRouter": "window.beforeRouter = async (event) => { \nawait (async () => {\n    ;\n\n/* 本逻辑为PC端事件逻辑——如无必要，请勿删改\n\n本逻辑作用：\n\n当PC端页面切换前，会执行本事件逻辑\n\n判断当前访问用户是否对即将访问的页面具有权限，如无权限则跳转处理。\n\n如有需要，开发者可变更处理方式\n */\nawait (async () => {\n            \r\n'use JSBlock'\r\n\r\n\r\ntry {\r\n    await this.$auth.getUserInfo()\r\n} catch (err) {\r\n    console.log(err);\r\n}\r\n\r\nconst { router, routes, authResourcePaths,\r\n    appConfig, beforeRouter, filterRoutes,\r\n    to, from, next, parsePath, getBasePath, filterAuthResources, findNoAuthView, baseResourcePaths } = event;\r\n\r\nfunction concatResourcesRoutes(resources, baseRoutes) {\r\n    return resources.concat(baseRoutes.map((route) => ({\r\n        resourceValue: route,\r\n        // 如果后续需要区分路由类型，这里也需要补充 resourceType\r\n    })));\r\n}\r\nfunction addAuthRoutes(resources) {\r\n    if (Array.isArray(resources) && resources.length) {\r\n        const userResourcePaths = (resources || []).map((resource) => resource && resource.resourceValue || resource && resource.ResourceValue);\r\n        const otherRoutes = filterRoutes(routes, null, (route, ancestorPaths) => {\r\n            const routePath = route.path;\r\n            const completePath = [...ancestorPaths, routePath].join('/');\r\n            const authPath = userResourcePaths.find((userResourcePath) => userResourcePath && userResourcePath.startsWith(completePath));\r\n            return authPath;\r\n        });\r\n        otherRoutes.forEach((route) => {\r\n            router.addRoute(route);\r\n        });\r\n    }\r\n}\r\nconst userInfo = this.$global.userInfo || {};\r\nconst $auth = this.$auth;\r\nconst redirectedFrom = parsePath(to.redirectedFrom);\r\nconst toPath = redirectedFrom && redirectedFrom.path || to.path;\r\nconst toQuery = to.query;\r\nconst authPath = authResourcePaths.find((authResourcePath) => {\r\n    if (authResourcePath === toPath || `${authResourcePath}/` === toPath) {\r\n        return true;\r\n    }\r\n    return false;\r\n});\r\n\r\nconst noAuthView = findNoAuthView(routes);\r\n\r\nif (authPath) {\r\n    if (!$auth.isInit()) {\r\n        if (!userInfo.UserId) {\r\n            localStorage.setItem('beforeLogin', JSON.stringify(location));\r\n            next({ path: `${getBasePath()}/login` });\r\n        } else {\r\n            try {\r\n                const resources = await $auth.getUserResources(appConfig.domainName);\r\n                // addAuthRoutes(filterAuthResources(resources));\r\n                const realResources = filterAuthResources(concatResourcesRoutes(resources, baseResourcePaths));\r\n                addAuthRoutes(realResources);\r\n                // 即使没有查到权限，也需要重新进一遍，来决定去 无权限页面 还是 404页面\r\n                next({\r\n                    path: toPath,\r\n                    query: toQuery,\r\n                });\r\n            } catch (err) {\r\n                console.log('err', err)\r\n                if (noAuthView && noAuthView.path) {\r\n                    next({ path: noAuthView.path });\r\n                }\r\n            }\r\n        }\r\n    } else if ((redirectedFrom && redirectedFrom.path !== to.path) && to.path === `${getBasePath()}/notFound`) {\r\n        if (noAuthView && noAuthView.path) {\r\n            next({ path: noAuthView.path });\r\n        }\r\n    }\r\n} else if (!$auth.isInit() && userInfo.UserId) {\r\n    const resources = await $auth.getUserResources(appConfig.domainName);\r\n    // addAuthRoutes(filterAuthResources(resources));\r\n    const realResources = filterAuthResources(concatResourcesRoutes(resources, baseResourcePaths));\r\n    addAuthRoutes(realResources);\r\n}\r\n\r\nnext();\n        })();\nreturn;\n})();\n}\n"
      },"frontendVariables": [],"dataTypesMap": {
        "app.enums.TaskStatus": {
        "concept": "Enum","name": "TaskStatus","label": null,"description": null,"enumItems": [{
        "concept": "EnumItem","value": "0","label": {
        "concept": "StaticString","value": "待办"
      }
      },{
        "concept": "EnumItem","value": "1","label": {
        "concept": "StaticString","value": "进行中"
      }
      },{
        "concept": "EnumItem","value": "2","label": {
        "concept": "StaticString","value": "测试中"
      }
      },{
        "concept": "EnumItem","value": "3","label": {
        "concept": "StaticString","value": "已完成"
      }
      },{
        "concept": "EnumItem","value": "4","label": {
        "concept": "StaticString","value": "待验收"
      }
      },{
        "concept": "EnumItem","value": "5","label": {
        "concept": "StaticString","value": "已关闭"
      }
      },{
        "concept": "EnumItem","value": "6","label": {
        "concept": "StaticString","value": "重新打开"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.enums.Type": {
        "concept": "Enum","name": "Type","label": null,"description": null,"enumItems": [{
        "concept": "EnumItem","value": "0","label": {
        "concept": "StaticString","value": "待修复"
      }
      },{
        "concept": "EnumItem","value": "1","label": {
        "concept": "StaticString","value": "修复中"
      }
      },{
        "concept": "EnumItem","value": "2","label": {
        "concept": "StaticString","value": "待测试"
      }
      },{
        "concept": "EnumItem","value": "3","label": {
        "concept": "StaticString","value": "待上线"
      }
      },{
        "concept": "EnumItem","value": "4","label": {
        "concept": "StaticString","value": "已上线"
      }
      },{
        "concept": "EnumItem","value": "5","label": {
        "concept": "StaticString","value": "已关闭"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.enums.RiskStrategy": {
        "concept": "Enum","name": "RiskStrategy","label": "风险策略","description": null,"enumItems": [{
        "concept": "EnumItem","value": "0","label": {
        "concept": "StaticString","value": "风险规避"
      }
      },{
        "concept": "EnumItem","value": "1","label": {
        "concept": "StaticString","value": "风险转移"
      }
      },{
        "concept": "EnumItem","value": "2","label": {
        "concept": "StaticString","value": "风险缓解"
      }
      },{
        "concept": "EnumItem","value": "3","label": {
        "concept": "StaticString","value": "风险接受"
      }
      },{
        "concept": "EnumItem","value": "4","label": {
        "concept": "StaticString","value": "风险控制"
      }
      },{
        "concept": "EnumItem","value": "5","label": {
        "concept": "StaticString","value": "风险应急"
      }
      },{
        "concept": "EnumItem","value": "6","label": {
        "concept": "StaticString","value": "风险监测"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.enums.RiskLevel": {
        "concept": "Enum","name": "RiskLevel","label": "风险级别","description": null,"enumItems": [{
        "concept": "EnumItem","value": "0","label": {
        "concept": "StaticString","value": "高风险"
      }
      },{
        "concept": "EnumItem","value": "1","label": {
        "concept": "StaticString","value": "中风险"
      }
      },{
        "concept": "EnumItem","value": "2","label": {
        "concept": "StaticString","value": "低风险"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.enums.BugLevel": {
        "concept": "Enum","name": "BugLevel","label": "缺陷级别","description": null,"enumItems": [{
        "concept": "EnumItem","value": "0","label": {
        "concept": "StaticString","value": "阻塞"
      }
      },{
        "concept": "EnumItem","value": "1","label": {
        "concept": "StaticString","value": "严重"
      }
      },{
        "concept": "EnumItem","value": "2","label": {
        "concept": "StaticString","value": "一般"
      }
      },{
        "concept": "EnumItem","value": "3","label": {
        "concept": "StaticString","value": "轻微"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.enums.TaskType": {
        "concept": "Enum","name": "TaskType","label": "任务类型","description": null,"enumItems": [{
        "concept": "EnumItem","value": "0","label": {
        "concept": "StaticString","value": "需求设计"
      }
      },{
        "concept": "EnumItem","value": "1","label": {
        "concept": "StaticString","value": "功能开发"
      }
      },{
        "concept": "EnumItem","value": "2","label": {
        "concept": "StaticString","value": "系统测试"
      }
      },{
        "concept": "EnumItem","value": "3","label": {
        "concept": "StaticString","value": "接口联调"
      }
      },{
        "concept": "EnumItem","value": "4","label": {
        "concept": "StaticString","value": "其他"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.enums.Priority": {
        "concept": "Enum","name": "Priority","label": "优先级","description": null,"enumItems": [{
        "concept": "EnumItem","value": "0","label": {
        "concept": "StaticString","value": "P0"
      }
      },{
        "concept": "EnumItem","value": "1","label": {
        "concept": "StaticString","value": "P1"
      }
      },{
        "concept": "EnumItem","value": "2","label": {
        "concept": "StaticString","value": "P2"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.enums.CommentType": {
        "concept": "Enum","name": "CommentType","label": "评论类型","description": null,"enumItems": [{
        "concept": "EnumItem","value": "0","label": {
        "concept": "StaticString","value": "客户成功"
      }
      },{
        "concept": "EnumItem","value": "1","label": {
        "concept": "StaticString","value": "POC"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.enums.PocStatus": {
        "concept": "Enum","name": "PocStatus","label": "POC状态","description": "POC状态","enumItems": [{
        "concept": "EnumItem","value": "0","label": {
        "concept": "StaticString","value": "待办"
      }
      },{
        "concept": "EnumItem","value": "1","label": {
        "concept": "StaticString","value": "开发中"
      }
      },{
        "concept": "EnumItem","value": "2","label": {
        "concept": "StaticString","value": "待验收"
      }
      },{
        "concept": "EnumItem","value": "3","label": {
        "concept": "StaticString","value": "待演示"
      }
      },{
        "concept": "EnumItem","value": "4","label": {
        "concept": "StaticString","value": "已完成"
      }
      },{
        "concept": "EnumItem","value": "5","label": {
        "concept": "StaticString","value": "已关闭"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.enums.ProjectStatus": {
        "concept": "Enum","name": "ProjectStatus","label": "项目状态","description": null,"enumItems": [{
        "concept": "EnumItem","value": "0","label": {
        "concept": "StaticString","value": "待启动"
      }
      },{
        "concept": "EnumItem","value": "1","label": {
        "concept": "StaticString","value": "交付中"
      }
      },{
        "concept": "EnumItem","value": "2","label": {
        "concept": "StaticString","value": "已初验"
      }
      },{
        "concept": "EnumItem","value": "3","label": {
        "concept": "StaticString","value": "已终验"
      }
      },{
        "concept": "EnumItem","value": "4","label": {
        "concept": "StaticString","value": "售后中"
      }
      },{
        "concept": "EnumItem","value": "5","label": {
        "concept": "StaticString","value": "已结项"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.enums.CustomerNature": {
        "concept": "Enum","name": "CustomerNature","label": "客户性质","description": null,"enumItems": [{
        "concept": "EnumItem","value": "0","label": {
        "concept": "StaticString","value": "商业"
      }
      },{
        "concept": "EnumItem","value": "1","label": {
        "concept": "StaticString","value": "生态"
      }
      },{
        "concept": "EnumItem","value": "2","label": {
        "concept": "StaticString","value": "免费"
      }
      },{
        "concept": "EnumItem","value": "3","label": {
        "concept": "StaticString","value": "SaaS"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.enums.IndustryCategory": {
        "concept": "Enum","name": "IndustryCategory","label": "行业分类","description": null,"enumItems": [{
        "concept": "EnumItem","value": "0","label": {
        "concept": "StaticString","value": "经济行业"
      }
      },{
        "concept": "EnumItem","value": "1","label": {
        "concept": "StaticString","value": "服务行业"
      }
      },{
        "concept": "EnumItem","value": "2","label": {
        "concept": "StaticString","value": "IT行业"
      }
      },{
        "concept": "EnumItem","value": "3","label": {
        "concept": "StaticString","value": "医疗行业"
      }
      },{
        "concept": "EnumItem","value": "4","label": {
        "concept": "StaticString","value": "教育行业"
      }
      },{
        "concept": "EnumItem","value": "5","label": {
        "concept": "StaticString","value": "政府"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.enums.UserStatusEnum": {
        "concept": "Enum","name": "UserStatusEnum","label": null,"description": "统一定义用户的状态","enumItems": [{
        "concept": "EnumItem","value": "Normal","label": {
        "concept": "StaticString","value": "正常"
      }
      },{
        "concept": "EnumItem","value": "Forbidden","label": {
        "concept": "StaticString","value": "禁用"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.enums.UserSourceEnum": {
        "concept": "Enum","name": "UserSourceEnum","label": null,"description": "统一定义用户的来源","enumItems": [{
        "concept": "EnumItem","value": "Normal","label": {
        "concept": "StaticString","value": "普通登录"
      }
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"nasl.configuration.enums.I18nEnum": {
        "concept": "Enum","name": "I18nEnum","label": "国际化多语言枚举","description": "国际化多语言功能涉及的所有可选语言","enumItems": [{
        "concept": "EnumItem","value": "en-US","label": {
        "concept": "StaticString","value": "英语"
      },"name": "English"
      },{
        "concept": "EnumItem","value": "fr-FR","label": {
        "concept": "StaticString","value": "法语"
      },"name": "Français"
      },{
        "concept": "EnumItem","value": "ko-KR","label": {
        "concept": "StaticString","value": "韩语"
      },"name": "한국어"
      },{
        "concept": "EnumItem","value": "zh-CN","label": {
        "concept": "StaticString","value": "中文(简体)"
      },"name": "中文 (简体)"
      },{
        "concept": "EnumItem","value": "zh-TW","label": {
        "concept": "StaticString","value": "中文(繁体)"
      },"name": "中文 (繁體)"
      },{
        "concept": "EnumItem","value": "ja-JP","label": {
        "concept": "StaticString","value": "日语"
      },"name": "日本語"
      }],"valueType": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },"app.dataSources.defaultDS.entities.Risk": {
        "concept": "Entity","name": "Risk","uuid": "613360f84a4342f2b6f4d44fbb4c03dd","tableName": "risk","description": "风险","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "bec70e291eb04fdfaf73fc74938c3a3c","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity17213160152","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "a360e227b45f4df2ba13a329f4491d30","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "8e5da6d71a314242993d3b56c5118969","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "0b8f2d6133724dacb15b36701ce4372c","columnName": "created_by","label": "创建人","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "84713f2b7b4c4849b9032496e2b0e479","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "riskName","uuid": "ab311b94f9e7413db655c2dbf5c188ea","columnName": "risk_name","label": "风险名称","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "riskDescription","uuid": "66fb75b90081432585e79d9ca6057f21","columnName": "risk_description","label": "风险描述","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "appendix","uuid": "c6752bc442924a4883265a0438d044cf","columnName": "appendix","label": "附件","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "projectId","uuid": "e2d4d69242054095ab2e2aee53edc757","columnName": "project_id","label": "项目ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "pocId","uuid": "58527ab1bb4d42a28397f9fe99c26b88","columnName": "poc_id","label": "POCID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "riskLevel","uuid": "51a170de12d74bf68341eca98e8a7d77","columnName": "risk_level","label": "风险级别","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "RiskLevel"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "riskStrategy","uuid": "9d77bf11ba124f3da743e0937e5d5762","columnName": "risk_strategy","label": "风险策略","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "RiskStrategy"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "identificationTime","uuid": "5317332d30e84897ace9caf5b44c35e9","columnName": "identification_time","label": "风险识别时间","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "expectedFinishTime","uuid": "310396569349468e842622455c9efce5","columnName": "expected_finish_time","label": "预计风险解决时间","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "actualFinishTime","uuid": "c1d24ff581154cd2b938a8862b3a8224","columnName": "actual_finish_time","label": "实际风险解决时间","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "agent","uuid": "baeb37f35ca54de2bcdc8fc3fa51a03b","columnName": "agent","label": "经办人","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "reporter","uuid": "60552554bd444fd9b43e1e9f07ca9325","columnName": "reporter","label": "报告人","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "remark","uuid": "06ad1a646f6a4e2e8bbf4177be35a8a6","columnName": "remark","label": "备注","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"nasl.core.Long": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"nasl.core.DateTime": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"nasl.core.String": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"app.dataSources.defaultDS.entities.Bug": {
        "concept": "Entity","name": "Bug","uuid": "44ecb48cd90441aaafb9aefb9212bcb4","tableName": "bug","description": "缺陷","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "8698d7863b784d05bc245d01c5f8875c","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity13648157497","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "293479e798a14cf8b91ff35476aa9825","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "8e75d8d2e84f4b13a46f6af51f1b78ac","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "6c933c95f06b466da5f35904b99750d5","columnName": "created_by","label": "创建人","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "c051982c07984f9aafae86941d8f5589","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "bugDescription","uuid": "f90724ef3d9a43d6905264852520c254","columnName": "bug_description","label": "缺陷描述","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "appendix","uuid": "74a3c1cebb4f4a1b94902211699ef46d","columnName": "appendix","label": "附件","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "bugLevel","uuid": "58f74bccddcf478cbdd1854fc27a7713","columnName": "bug_level","label": "缺陷级别","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "BugLevel"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "projectId","uuid": "a301996d1421460882977bcc10c31417","columnName": "project_id","label": "项目ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "expectedRepairTime","uuid": "987367eaaad94d5590a74d37fd0f5c15","columnName": "expected_repair_time","label": "预计修复时间","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "expectedFinishTime","uuid": "612ccc5b1e74460cab99968c466d8b46","columnName": "expected_finish_time","label": "预计完成时间","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "agent","uuid": "54f4fe92de674a2a9dbae92aec47f671","columnName": "agent","label": "经办人","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "reporter","uuid": "aeb4cea3f81d412e9cf358b5412c4c23","columnName": "reporter","label": "报告人","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "remark","uuid": "ce9e9488f331436187a7f49b5791c76a","columnName": "remark","label": "备注","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "ticketID","uuid": "965a80aead7c4895a778786252348988","columnName": "ticket_i_d","label": "关联工单ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "status","uuid": "154408cd63f642ba82fa3b6d9a1d0aa4","columnName": "status","label": "状态","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "Type"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "manhour","uuid": "13fb1d0fa21b42068e8a1933b3a3ecfe","columnName": "manhour","label": "工时","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "bugName","uuid": "dd65d1e8b47b48cb90e04f95a2afeede","columnName": "bug_name","label": "缺陷名称","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"app.dataSources.defaultDS.entities.Logs1": {
        "concept": "Entity","name": "Logs1","uuid": "6287200edaf44373b152e49123123fdd","tableName": "logs1","description": "日志","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "2d4c81dd0198471680ec84dcf7f03b95","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity10154626790","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "020785de7a1341c985dc269c1109341b","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "a57b014a53c84b4bb8b641abec4c21ca","columnName": "created_by","label": "变更人","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "changeContent","uuid": "3b6108f789804a4ca9fc28c8498d1c78","columnName": "change_content","label": "变更字段","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "before","uuid": "c57d6426f594474292741ff0b051d485","columnName": "before","label": "变更前","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "after","uuid": "62b2d646fce94046a13a4c0bf1d35340","columnName": "after","label": "变更后","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "taskId","uuid": "a9e615576fe641a3a86d657577d7f87e","columnName": "task_id","label": "任务ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"app.dataSources.defaultDS.entities.UserTaskMapping": {
        "concept": "Entity","name": "UserTaskMapping","uuid": "31830a81816e4a2cbd3a55f8258e42ad","tableName": "user_task_mapping","description": "任务报告人","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "6d2de8ce9a7c49a596750bc4cc3e127d","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity14628322851","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "91fa3368308d495598fa18c99660d195","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "8c85e973f7fd4f80badae3d185695bc7","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "a4eeb709ccde4286a2c2686eab8ee838","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "0c0ff294f1dd4f0cbb3fe3cdca78a637","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "username","uuid": "8736dc22516e49f5a007e583cb6656be","columnName": "username","label": "用户名","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "taskId","uuid": "ec488c3d64f847968c5682e5db93256c","columnName": "task_id","label": "任务ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"app.dataSources.defaultDS.entities.Task": {
        "concept": "Entity","name": "Task","uuid": "de952cbfb99245a4abbba757d85b793e","tableName": "task","description": "任务","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "dceeb497300a41ec88e33c87b38bfdba","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": true,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity12514888478","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "2e642bb5049f44899681f831c75b5e46","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "afc342fd10b74f648145648792fd11e0","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "73a0f8f505544d39800bddfe7b08f64d","columnName": "created_by","label": "创建人","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": true,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "57a4b9b7ebfa4f8086eff2ca643f90a7","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "taskName","uuid": "e127e576f79e41428c6fd77167dd4172","columnName": "task_name","label": "任务名称","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "taskDescription","uuid": "f08c7b3ea350468f861c9d536afeac7f","columnName": "task_description","label": "任务描述","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "appendix","uuid": "40e475bf912f4135b47bee65fd882091","columnName": "appendix","label": "附件","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "priority","uuid": "9b47f62a5ee94543a596f41a046ce2b2","columnName": "priority","label": "优先级","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "Priority"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "projectId","uuid": "0aa92fe7d27c41fbbb11a5f97ac904cf","columnName": "project_id","label": "项目ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "pocId","uuid": "ba4e3bd2526742f9ad7443a584c53629","columnName": "poc_id","label": "POCID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "taskType","uuid": "6ed388652efd44d9acb580c38a2e86ab","columnName": "task_type","label": "任务类型","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "TaskType"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "expectedStartTime","uuid": "45064f5421b0447598aa3175f7518cd8","columnName": "expected_start_time","label": "预计开始时间","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "expectedFinishTime","uuid": "0197f5f16bc94d4c954f526e13faa3bf","columnName": "expected_finish_time","label": "预计完成时间","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "expectedWorkHour","uuid": "55c82c3e60ce4d8387f5fffe6fcbaf4c","columnName": "expected_work_hour","label": "预计工时","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "actualStartTime","uuid": "5303d546912d4bd887236fb53ea9c972","columnName": "actual_start_time","label": "实际开始时间","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "actualFinishTime","uuid": "70365414a4c745308e2b6dba06c88d80","columnName": "actual_finish_time","label": "实际完成时间","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "actualWorkHour","uuid": "6d71b7f60b5f47ea82500d1e4f0c319a","columnName": "actual_work_hour","label": "实际工时","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "testOrNot","uuid": "0dd7ecf826af461c90ef8fcd9e2a5605","columnName": "test_or_not","label": "是否需要提测","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "agent","uuid": "f62cf896579b40738591cdc8691c554e","columnName": "agent","label": "经办人","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "status","uuid": "8696606fb449457bb898cb877d67a8d3","columnName": "status","label": "状态","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "TaskStatus"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"nasl.core.Boolean": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      },"app.dataSources.defaultDS.entities.Comments": {
        "concept": "Entity","name": "Comments","uuid": "b0435edf5d8240139f62bfcfb44905c0","tableName": "comments","description": "评论","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "51470f828c744baf8fafb8df1dc8aaee","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity14194521346","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "994881a1fee84687827a649a75ad0161","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "bb6706f103d146b1aafe58553147d86b","columnName": "created_by","label": "评论人","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "content","uuid": "d76d126040664c5c8bd188d10c0361bc","columnName": "content","label": "评论内容","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "commentType","uuid": "f357adf813cc4d5589b47ee53559dbae","columnName": "comment_type","label": "评论类型","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "CommentType"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "associationID","uuid": "04ec876e75684087bfe362bcbb5ac3fc","columnName": "association_i_d","label": "关联ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"app.dataSources.defaultDS.entities.POC": {
        "concept": "Entity","name": "POC","uuid": "34fe25903ffc4da6b8fdabc3b99094cd","tableName": "p_o_c","description": null,"origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "7d8b0adf759c49baabc14b2ff2867683","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity15813518650","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "744952944c144e94a19e86956b593c91","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "7405f2d14e4149319d83326a36d475df","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "a7b260f3f72f4a91b70a36e8b18b9f80","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "13c384c0395f440882543441bb02e258","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "pocName","uuid": "b200308b3ed043f6b68f8f1f05d0cc02","columnName": "poc_name","label": "POC名称","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "customerId","uuid": "64f21441afae4b128fd569063f733a86","columnName": "customer_id","label": "客户ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "pocStatus","uuid": "c57e683f3adc447c9d04b8b97854ef4d","columnName": "poc_status","label": "POC状态","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "PocStatus"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "introduction","uuid": "474b08368b0c4e16949405fe2352877a","columnName": "introduction","label": "建设内容简介","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "solution","uuid": "bf8bb90a6f63451cac47962ef01ea2da","columnName": "solution","label": "解决方案","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "coach","uuid": "d6e6a4fa9b3f4eedb2fd38114e94bcf6","columnName": "coach","label": "教练","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "expectedStartTime","uuid": "2d1dd8dcbe1445d3a29f540a431d3085","columnName": "expected_start_time","label": "预计开始时间","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "expectedFinishTime","uuid": "30e73347f06548f19d8a4ea0f367e745","columnName": "expected_finish_time","label": "预计完成时间","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "appInformation","uuid": "663195bbc5c8453895354be8b6a56658","columnName": "app_information","label": "应用信息","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"app.dataSources.defaultDS.entities.Project": {
        "concept": "Entity","name": "Project","uuid": "38c01d7248344e0b8bbf1ae2d95b6495","tableName": "project","description": "项目","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "05a485134a474a2fab77481bad715d5d","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity14984675936","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "caa1580bc5f9496aa47e8ca237646d64","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "29e9971bff894e3bb973777b087cc88a","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "9511c1bd3b7c430c96442d2bb8088a83","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "0ba659c5a18e4d91a09f131777a743fc","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "projectName","uuid": "d6dfbd45c8e74ff6a3692ec2e4b0cbe0","columnName": "project_name","label": "项目名称","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "customerId","uuid": "7b921b72eb8844f098f00c5403081a94","columnName": "customer_id","label": "客户ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "projectStatus","uuid": "84e6a7f10fbf4553932394eec8e16be0","columnName": "project_status","label": "项目状态","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "ProjectStatus"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "salesperson","uuid": "5f2e7af01d3e4b12b35bf353746b732b","columnName": "salesperson","label": "销售人员","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "solution","uuid": "34fd0dce69cd43b0a9e7663df9a0c703","columnName": "solution","label": "解决方案","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "projectManager","uuid": "944d69c3e48c4c5681375042f2712607","columnName": "project_manager","label": "项目经理","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "remark","uuid": "8d0db0169f0e4ba79ae72be909727f88","columnName": "remark","label": "备注","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"app.dataSources.defaultDS.entities.Customer": {
        "concept": "Entity","name": "Customer","uuid": "c0ddceda31d54e60beb919a113a0febf","tableName": "customer","description": "客户","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "aee7085421354e0c9ee3234b0dcef424","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity10681257000","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "cca0d3cae2014838a9e556f34fe2cffd","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "28797130bc0a4178ba4270c5f5139b1b","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "ad8f54d09b364a698d8236ae8074f7b9","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "faaf07bd6f30465889227b7808bd0ae5","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "customerName","uuid": "34543cf53eee419ba6dc2160cdffe9d3","columnName": "customer_name","label": "客户名称","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "industryCategory","uuid": "1c381de2043949dba1f9037eb12b93c4","columnName": "industry_category","label": "行业分类","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "IndustryCategory"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "customerNature","uuid": "e5fe639f60e94775870708d4672ea455","columnName": "customer_nature","label": "客户性质","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "CustomerNature"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "remark","uuid": "4af55021510b448eb5f239d036deeff0","columnName": "remark","label": "备注","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": {
        "concept": "DatabaseTypeAnnotation","typeName": "varchar","arguments": {
        "length": "4000"
      }
      },"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": ["maxLength(4000)"],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"app.dataSources.defaultDS.entities.UserGroupMapping": {
        "concept": "Entity","name": "UserGroupMapping","uuid": "0a2602478dd147d3b2553c71841a8de9","tableName": "user_group_mapping","description": "用户用户组关联表","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "fb3b4f4991d04d92897c003d7626feee","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity19959762466","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "eaf5457671ae42929f1420dead4f9b08","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "b3ef2a4b4fb94823977a8ac0ed3884cc","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "c4f9b9b934d74735a22f27ec219d1bf7","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "708a93a9c125429eaf8dadfb43499c1b","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "username","uuid": "e0a48545918c4a6abd3e77e7a934a7bb","columnName": "username","label": "用户名","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "groupId","uuid": "185c41d5f832475289c7fc6087de05a1","columnName": "group_id","label": "用户组ID","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "UserGroup","relationProperty": "id","deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"app.dataSources.defaultDS.entities.UserGroup": {
        "concept": "Entity","name": "UserGroup","uuid": "f04ec13280db49a6a9a3c15c536dc371","tableName": "user_group","description": "用户组","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "b3f7aee5a27541d2876823353cdba8ae","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity19108459058","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "80a3f7a311be49868ff13c50684dd594","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "0d3f30a93d9d41d4ae3427542cdbb574","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "groupName","uuid": "4bcee611de544200bb269491de28d943","columnName": "group_name","label": "用户组名称","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"app.dataSources.defaultDS.entities.LCAPLogicViewMapping": {
        "concept": "Entity","name": "LCAPLogicViewMapping","uuid": "7088d3d83a5541349ad1d9a26bc4054c","tableName": "lcap_logic_view_mapping_f02d98","description": "记录应用全局逻辑与页面资源的关联关系","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "04d8ebbaca584ad68e0bf1570cb68510","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity14946531801","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "logicIdentifier","uuid": "dd6d014177df4487be157c6d6b235b55","columnName": "logic_identifier","label": "逻辑标识","description": "/api/logic1:GET","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "resourceName","uuid": "2254eb9c57bb43f48c97700acf360de3","columnName": "resource_name","label": "资源路径","description": "/dashboard/button1","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "resourceType","uuid": "c2b6328de8ee4004b4751dede3c1fd25","columnName": "resource_type","label": "资源类型","description": "页面-page 组件-component 逻辑-logic","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "group","uuid": "617eab75303845be89a738a64463bfc7","columnName": "group","label": "逻辑与资源绑定的分组关系","description": "值一样的为同一组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "changeTime","uuid": "b88f8d1bb5d2486ebec63b3ec8e0e79b","columnName": "change_time","label": "创建时间","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"app.dataSources.defaultDS.entities.LCAPUser": {
        "concept": "Entity","name": "LCAPUser","uuid": "5fcb40ab25544ca89d364abeaee908f4","tableName": "lcap_user_f02d98","description": "制品应用的用户实体。\n1 实体名称不允许改动\n2 默认生成的字段不允许改动\n3 可新增自定义字段（避免设置为非空且无默认值）","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "4771eb9b0b96400fa780782b95516d76","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": true,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": "Entity14476992223","composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "52b380437bc14d5fa0041efc7cb04658","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "6c4d8deb2429415bb5c2a3c7764f7a02","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "userId","uuid": "77206fad01c741168d1234978a14579f","columnName": "user_id","label": "用户id","description": "第三方登录方式唯一id；普通登录使用userName+source作为userId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "userName","uuid": "5f1d4b047ba64536b9f257191474ecb9","columnName": "user_name","label": "用户名","description": "普通登录用户名，类似账号的概念","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "password","uuid": "42729b1848f349a683d92a8f9b8e97a6","columnName": "password","label": "登录密码","description": "普通登录密码，密码建议加密存储。第三方登录不会存储密码","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": true,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "phone","uuid": "84fd9b44b5f948e99a37ac17e3330995","columnName": "phone","label": "手机号","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "email","uuid": "50e5d16ab11b488dbd8482e5f0cfe49b","columnName": "email","label": "邮箱","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "displayName","uuid": "22a2d5db187b423abb3d338693f079b2","columnName": "display_name","label": "昵称","description": "展示的名称","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "status","uuid": "5afdf9d6e48b41469a1d629991797260","columnName": "status","label": "状态","description": "状态，标识当前用户的状态是什么","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "UserStatusEnum"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": {
        "concept": "DefaultValue","expression": {
        "concept": "MemberExpression","object": {
        "concept": "Identifier","namespace": "app.enums","name": "UserStatusEnum","label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null
      },"property": {
        "concept": "Identifier","name": "Normal","label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null
      },"label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null,"name": ""
      },"playground": [],"name": ""
      },"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        "code": "Normal","executeCode": false
      }
      },{
        "concept": "EntityProperty","name": "source","uuid": "c3c423ad83454eada30a2833e062bb0e","columnName": "source","label": "用户来源","description": "当前条用户数据来自哪个用户源，如普通登录、微信登录","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.enums","typeName": "UserSourceEnum"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": {
        "concept": "DefaultValue","expression": {
        "concept": "MemberExpression","object": {
        "concept": "Identifier","namespace": "app.enums","name": "UserSourceEnum","label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null
      },"property": {
        "concept": "Identifier","name": "Normal","label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null
      },"label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null,"name": ""
      },"playground": [],"name": ""
      },"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": false,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        "code": "Normal","executeCode": false
      }
      },{
        "concept": "EntityProperty","name": "workTime","uuid": "ddf63660ac1e4cab9f3bdc0d685336c0","columnName": "work_time","label": "工时","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Decimal","ruleMap": {
        "scale": 2
      }
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "manual","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"nasl.core.Decimal": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Decimal","ruleMap": {
        "scale": 2
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping": {
        "concept": "Entity","name": "LCAPRolePerMapping","uuid": "a309512ba29246b3a4e65d6a224aa0c2","tableName": "lcap_role_per_mapping_f02d98","description": "角色权限关联实体。新增角色一般需要新增角色对应的权限。默认生成的字段不允许改动，可新增自定义字段。","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "f80979e62eb94006a0942beff3f3a31d","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": true,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "35355f0b2f3247be9286e02dce26a321","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "c033ad987f8b4c029873be76dc858acd","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "2771ee4075c54d08b6bb47fda33520f8","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "fd5f2963bbfc44c19d4e059ae823c0d1","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "roleId","uuid": "e1e98dc4930e477098aace0dfdaadc0f","columnName": "role_id","label": "角色唯一ID","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPRole","relationProperty": "id","deleteRule": "cascade","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "permissionId","uuid": "70919e6c6ed84ed2818f3a943c2e3315","columnName": "permission_id","label": "权限唯一ID","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPPermission","relationProperty": "id","deleteRule": "cascade","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping": {
        "concept": "Entity","name": "LCAPPerResMapping","uuid": "4e588a029ab64ee19318c25973dc3694","tableName": "lcap_per_res_mapping_f02d98","description": "权限与资源的关联实体。一组权限会包含若干资源路径，权限对应角色。为角色绑定移除资源需操作该表。默认字段不允许改动，可新增字段。","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "fca6ea11877e4ffa8da52f93657e9456","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": true,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "e86f2fcfcde040fd8370269562b6c652","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "fe9a1236e60b4f3aa75d7ab410bce7d9","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "e1d10b9d09b24f2b93d37dddbf4c7122","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "2dfe8253d3ab460c8e787e758db99516","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "permissionId","uuid": "e47538b6177040e69ba6221bf2661ae1","columnName": "permission_id","label": "权限唯一ID","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPPermission","relationProperty": "id","deleteRule": "cascade","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "resourceId","uuid": "2e90dbc59f0545618e739f4337acf499","columnName": "resource_id","label": "资源唯一ID","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPResource","relationProperty": "id","deleteRule": "cascade","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping": {
        "concept": "Entity","name": "LCAPUserRoleMapping","uuid": "65d0a24d4cea4b62b8991807688936fc","tableName": "lcap_user_role_mapping_f02d98","description": "用户与角色关联实体。操作该表可完成为角色添加成员、移除角色成员等。默认生成的字段不允许改动，可新增自定义字段。","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "568578eb04c84b788f55dea57833b4f3","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": true,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "55f53ca7492b4fd2904f82df58a29a2a","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "1edc5307e2a74b189a619dc38440fdfa","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "46ec47c35e0d4d27be5996508f629757","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "0be02b0bf7e244609f4aa48af43c6eb9","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "userId","uuid": "2967682692574bb9b448e33c4392d89c","columnName": "user_id","label": "用户唯一ID","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPUser","relationProperty": "userId","deleteRule": "cascade","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "roleId","uuid": "deaeafe6eb47451d99ba9629679e3c84","columnName": "role_id","label": "角色唯一ID","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "LCAPRole","relationProperty": "id","deleteRule": "cascade","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "userName","uuid": "30a38ee141294578bd75a93ff8ebcb7f","columnName": "user_name","label": "用户名","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "source","uuid": "48ff5df51f0a45c9a53d82ae206d83f2","columnName": "source","label": "用户来源","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [{
        "concept": "EntityIndex","name": "uid_rid_uniqueidx","indexName": null,"propertyNames": ["userId","roleId"],"unique": true,"description": ""
      }],"composedBy": null
      },"app.dataSources.defaultDS.entities.LCAPRole": {
        "concept": "Entity","name": "LCAPRole","uuid": "05c4706572fd4675b5da089569c17183","tableName": "lcap_role_f02d98","description": "用户与角色关联实体。操作该表可完成为角色添加成员、移除角色成员等。默认生成的字段不允许改动，可新增自定义字段。","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "d051d6b41646496f8616f41f3da19f39","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": true,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "a92834cb22214fffba02c39fc4fc6fe5","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "8a14ae9e35ee491681dfb25dd472f1ae","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "e7dcfd142b3a4c4bbd3cb4db82a8af20","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "0bfc1306b6b24ad1ae98d74221088205","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "uuid","uuid": "ed69a8d9175d49ec9d19e76b2cf03b57","columnName": "uuid","label": "唯一标识","description": "唯一标识","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "name","uuid": "e6b856adbfcf4127991d1460be367d7d","columnName": "name","label": "角色名称","description": "角色名","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "description","uuid": "ace97dbd16a14b9c9211da7425e17e2d","columnName": "description","label": "角色描述","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "roleStatus","uuid": "2a4e2bc11d2740a897745a9bd429ee50","columnName": "role_status","label": "角色状态","description": "角色状态，可配置true启用，false禁用。","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": {
        "concept": "DefaultValue","expression": {
        "concept": "BooleanLiteral","value": "true","label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null,"name": ""
      },"playground": [],"name": ""
      },"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        "code": "true","executeCode": false
      }
      },{
        "concept": "EntityProperty","name": "editable","uuid": "45313bb7c11549ab8ef9d4d47ae0a74e","columnName": "editable","label": "是否可编辑","description": "系统字段，请勿修改。web新增为可编辑true，ide新增为不可编辑false。","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": {
        "concept": "DefaultValue","expression": {
        "concept": "BooleanLiteral","value": "true","label": null,"description": null,"folded": false,"offsetX": null,"offsetY": null,"name": ""
      },"playground": [],"name": ""
      },"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        "code": "true","executeCode": false
      }
      }],"indexes": [],"composedBy": null
      },"app.dataSources.defaultDS.entities.LCAPPermission": {
        "concept": "Entity","name": "LCAPPermission","uuid": "51f1b9988b854f97a6f69683f74bf55f","tableName": "lcap_permission_f02d98","description": "权限实体。新增角色的同时要一般需要绑定角色对应的权限。默认生成的字段不允许改动，可新增自定义字段。","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "2fcd4ebf4cb340b6b02cf6d950173853","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": true,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "e233d26e02de4771b6888210bf6acdaa","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "01a58160cafa4d2fa24196459fdcd610","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "6faad3c376fb49d883984d7f8b149a50","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "6564b1249fdb41f789bca4330505ce86","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "uuid","uuid": "490c57c23b5f442f809b8d41ee4ff79f","columnName": "uuid","label": "唯一标识","description": "唯一标识","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "name","uuid": "b73a4e2f33de4af19eefc65121ea50d0","columnName": "name","label": "权限名称","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "description","uuid": "dbed6f2dd29146b3baa213517d110eac","columnName": "description","label": "权限描述","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"app.dataSources.defaultDS.entities.LCAPResource": {
        "concept": "Entity","name": "LCAPResource","uuid": "b7a382bb08da439f85ea3c74929ea45d","tableName": "lcap_resource_f02d98","description": "资源实体。该表的数据是新建组件后，系统自动上报的。name字段对应资源路径。默认生成的字段不允许改动，可新增自定义字段。","origin": "ide","properties": [{
        "concept": "EntityProperty","name": "id","uuid": "3bdbbf2cdac94b0f8f47ad10b581056e","columnName": "id","label": "主键","description": "主键","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": true,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdTime","uuid": "87309868ddd548a8b02c52a3a3da11d6","columnName": "created_time","label": "创建时间","description": "创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedTime","uuid": "e3109786977f48e9b662fbc3da8a070a","columnName": "updated_time","label": "更新时间","description": "更新时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "createdBy","uuid": "1d4448fb56ac4fa8b1f516b1a8ee5c80","columnName": "created_by","label": "创建者","description": "创建者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "updatedBy","uuid": "7b113b8990b0455483110b3b4cc45bae","columnName": "updated_by","label": "更新者","description": "更新者","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "uuid","uuid": "6bf2cb2c927742bb93571039102a2bae","columnName": "uuid","label": "唯一标识","description": "唯一标识","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "name","uuid": "4b03a4b799974c9d93404a8cb23384b1","columnName": "name","label": "资源名称","description": "资源路径，如/test/api","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": true,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "description","uuid": "35fd083a6d0548dba1b1e0a08c0bb59b","columnName": "description","label": "资源描述","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "type","uuid": "f14cab50109a47af9dc9ccabd08e47d5","columnName": "type","label": "资源类型","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": "app.dataSources.defaultDS.entities","relationEntity": "","relationProperty": "","deleteRule": "","display": {
        "inTable": false,"inFilter": false,"inForm": false,"inDetail": false
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      },{
        "concept": "EntityProperty","name": "clientType","uuid": "00b64fe76f4b4a7aa7b0c1c1efa586b1","columnName": "client_type","label": "端标识","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"databaseTypeAnnotation": null,"required": false,"defaultValue": null,"primaryKey": false,"relationNamespace": null,"relationEntity": null,"relationProperty": null,"deleteRule": null,"display": {
        "inTable": true,"inFilter": true,"inForm": true,"inDetail": true
      },"rules": [],"generationRule": "auto","sequence": null,"composedBy": null,"defaultCode": {
        
      }
      }],"indexes": [],"composedBy": null
      },"app.structures.ProjectStructure": {
        "concept": "Structure","name": "ProjectStructure","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "project","label": "项目","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Project"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "salesperson","label": "销售人员","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "solution","label": "解决方案","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "projectManager","label": "项目经理","description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"app.structures.LCAPGetResourceResult": {
        "concept": "Structure","name": "LCAPGetResourceResult","description": null,"typeParams": [],"properties": [{
        "concept": "StructureProperty","name": "resourceValue","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "resourceType","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"app.structures.LCAPRoleBindUsersBody": {
        "concept": "Structure","name": "LCAPRoleBindUsersBody","description": null,"typeParams": [],"properties": [{
        "concept": "StructureProperty","name": "roleId","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userIdList","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<nasl.core.String>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      },"app.structures.LCAPPostRequest": {
        "concept": "Structure","name": "LCAPPostRequest","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "response","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.http","typeName": "HttpResponse","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "status","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "requestInfo","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.http.HttpResponse<nasl.core.String>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.http","typeName": "HttpResponse","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      },"nasl.collection.Map<nasl.core.String, nasl.core.String>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      },"extensions.lcap_auth.structures.LCAPUser": {
        "concept": "Structure","name": "LCAPUser","description": "System built in generic class LCAPUser","typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "userId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "extensionInfos","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": "K"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": "V"
      }],"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      }]
      },"extensions.lcap_permission.structures.UserResourceQueryResult": {
        "concept": "Structure","name": "UserResourceQueryResult","description": "System built in generic class DeployLogicAuthMetaData","typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "resourceValue","description": "资源值(通常为浏览器上的访问路径或逻辑请求路径)","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "resourceType","description": "资源的类型(表示当前资源是页面还是组件或者逻辑)","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "clientType","description": "资源所属的端标识(多端场景下存在重名资源)","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "description","description": "资源的描述信息","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "createdTime","description": "资源的创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      }]
      },"extensions.lcap_permission.structures.DeployResourceMetaData": {
        "concept": "Structure","name": "DeployResourceMetaData","description": "System built in generic class LCAPPermissionService","typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "resourceValue","description": "资源值(通常为浏览器上的访问路径或逻辑请求路径)","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "resourceType","description": "资源的类型(表示当前资源是页面还是组件或者逻辑)","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "clientType","description": "资源所属的端标识(多端场景下存在重名资源)","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "description","description": "资源的描述信息","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "createdTime","description": "资源的创建时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": null,"returnType": null,"properties": null,"name": ""
      },"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.userlist": {
        "concept": "Structure","name": "userlist","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "open_userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<nasl.core.Long>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.department": {
        "concept": "Structure","name": "department","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name_en","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department_leader","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "parentid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "order","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.articles": {
        "concept": "Structure","name": "articles","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "picurl","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "pagepath","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "appid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "description","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "url","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.news": {
        "concept": "Structure","name": "news","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "articles","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "articles","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.articles>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "articles","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.text4": {
        "concept": "Structure","name": "text4","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "content","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.department1": {
        "concept": "Structure","name": "department1","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department_leader","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "parentid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name_en","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "order","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.web": {
        "concept": "Structure","name": "web","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "url","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.text2": {
        "concept": "Structure","name": "text2","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "value","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.attrs2": {
        "concept": "Structure","name": "attrs2","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "web","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "web","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "text","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "text2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "type","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.extattr": {
        "concept": "Structure","name": "extattr","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "attrs","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "attrs2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.attrs2>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "attrs2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.wechat_channels": {
        "concept": "Structure","name": "wechat_channels","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "nickname","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "status","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.web2": {
        "concept": "Structure","name": "web2","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "url","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.text3": {
        "concept": "Structure","name": "text3","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "value","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.miniprogram": {
        "concept": "Structure","name": "miniprogram","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "appid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "pagepath","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.external_attr": {
        "concept": "Structure","name": "external_attr","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "web","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "web2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "text","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "text3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "type","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "miniprogram","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "miniprogram","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.external_profile": {
        "concept": "Structure","name": "external_profile","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "external_corp_name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "wechat_channels","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "wechat_channels","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "external_attr","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "external_attr","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.external_attr>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "external_attr","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.userlist1": {
        "concept": "Structure","name": "userlist1","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "address","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "gender","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "external_position","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "mobile","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "is_leader_in_dept","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "telephone","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "direct_leader","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "avatar","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "main_department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "english_name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "thumb_avatar","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "alias","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "extattr","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "extattr","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "qr_code","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "position","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "open_userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "biz_mail","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "external_profile","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "external_profile","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "email","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "order","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "status","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.department2": {
        "concept": "Structure","name": "department2","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department_leader","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "parentid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name_en","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "order","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.APiReturnOfgetDepartmentList": {
        "concept": "Structure","name": "APiReturnOfgetDepartmentList","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "department2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.department2>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "department2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.web1": {
        "concept": "Structure","name": "web1","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "url","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.text5": {
        "concept": "Structure","name": "text5","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "value","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.attrs3": {
        "concept": "Structure","name": "attrs3","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "web","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "web1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "text","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "text5","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "type","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.extattr1": {
        "concept": "Structure","name": "extattr1","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "attrs","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "attrs3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.attrs3>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "attrs3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.wechat_channels1": {
        "concept": "Structure","name": "wechat_channels1","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "nickname","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "status","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.web3": {
        "concept": "Structure","name": "web3","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "url","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.text6": {
        "concept": "Structure","name": "text6","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "value","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.miniprogram1": {
        "concept": "Structure","name": "miniprogram1","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "appid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "pagepath","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.external_attr1": {
        "concept": "Structure","name": "external_attr1","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "web","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "web3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "text","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "text6","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "type","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "miniprogram","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "miniprogram1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.external_profile1": {
        "concept": "Structure","name": "external_profile1","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "external_corp_name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "wechat_channels","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "wechat_channels1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "external_attr","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "external_attr1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.external_attr1>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "external_attr1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.userlist2": {
        "concept": "Structure","name": "userlist2","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "address","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "gender","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "external_position","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "mobile","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "is_leader_in_dept","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "telephone","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "direct_leader","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "avatar","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "main_department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "english_name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "thumb_avatar","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "alias","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "extattr","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "extattr1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "qr_code","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "position","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "open_userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "biz_mail","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "external_profile","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "external_profile1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "email","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "order","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "status","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.APiReturnOfgetUserDetail": {
        "concept": "Structure","name": "APiReturnOfgetUserDetail","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userlist","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "userlist2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.userlist2>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "userlist2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.department3": {
        "concept": "Structure","name": "department3","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name_en","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department_leader","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "parentid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "order","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.APiReturnOfgetDepartDetail": {
        "concept": "Structure","name": "APiReturnOfgetDepartDetail","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "department3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.userlist3": {
        "concept": "Structure","name": "userlist3","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "department","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "open_userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.APiReturnOfgetDepartUserList": {
        "concept": "Structure","name": "APiReturnOfgetDepartUserList","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userlist","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "userlist3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.userlist3>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "userlist3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.text7": {
        "concept": "Structure","name": "text7","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "content","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.appSendMessageBody": {
        "concept": "Structure","name": "appSendMessageBody","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "touser","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "toparty","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "totag","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "msgtype","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "agentid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "text","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "text7","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "safe","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "enable_id_trans","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "enable_duplicate_check","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "duplicate_check_interval","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.APiReturnOfappSendMessage": {
        "concept": "Structure","name": "APiReturnOfappSendMessage","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "invaliduser","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "invalidparty","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "invalidtag","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "unlicenseduser","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "msgid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "response_code","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.articles1": {
        "concept": "Structure","name": "articles1","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "picurl","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "pagepath","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "appid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "description","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "title","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "url","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.news1": {
        "concept": "Structure","name": "news1","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "articles","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "articles1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.qiweionlineconnector.structures.articles1>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "articles1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.qiweionlineconnector.structures.appSendNewsMessageBody": {
        "concept": "Structure","name": "appSendNewsMessageBody","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "touser","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "toparty","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "totag","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "msgtype","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "agentid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "news","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.qiweionlineconnector.structures","typeName": "news1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "enable_id_trans","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "enable_duplicate_check","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "duplicate_check_interval","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.APiReturnOfappSendNewsMessage": {
        "concept": "Structure","name": "APiReturnOfappSendNewsMessage","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "invaliduser","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "invalidparty","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "invalidtag","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "unlicenseduser","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "msgid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "response_code","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.qiweionlineconnector.structures.APiReturnOfgetAccessToken": {
        "concept": "Structure","name": "APiReturnOfgetAccessToken","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "access_token","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "expires_in","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.APiReturnOfgetToken": {
        "concept": "Structure","name": "APiReturnOfgetToken","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "access_token","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "expires_in","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.APiReturnOfgetDepartment": {
        "concept": "Structure","name": "APiReturnOfgetDepartment","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "result","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "result6","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "request_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.dingding.structures.result6>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "result6","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.dingding.structures.result6": {
        "concept": "Structure","name": "result6","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "auto_add_user","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "parent_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "create_dept_group","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.getUserIdListBody": {
        "concept": "Structure","name": "getUserIdListBody","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.result": {
        "concept": "Structure","name": "result","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "userid_list","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.APiReturnOfgetUserIdList": {
        "concept": "Structure","name": "APiReturnOfgetUserIdList","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "result","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "result","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "request_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.APiReturnOfgetDepartmentSubIdList": {
        "concept": "Structure","name": "APiReturnOfgetDepartmentSubIdList","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.getListParentByDeptBody": {
        "concept": "Structure","name": "getListParentByDeptBody","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.result1": {
        "concept": "Structure","name": "result1","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "parent_id_list","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.APiReturnOfgetListParentByDept": {
        "concept": "Structure","name": "APiReturnOfgetListParentByDept","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "result","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "result1","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "request_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.getParentsByDeptBody": {
        "concept": "Structure","name": "getParentsByDeptBody","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.result2": {
        "concept": "Structure","name": "result2","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "parent_id_list","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.APiReturnOfgetParentsByDept": {
        "concept": "Structure","name": "APiReturnOfgetParentsByDept","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "result","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "result2","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "request_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.getUserBody": {
        "concept": "Structure","name": "getUserBody","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.dept_order_list": {
        "concept": "Structure","name": "dept_order_list","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "order","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.leader_in_dept": {
        "concept": "Structure","name": "leader_in_dept","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "leader","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.role_list": {
        "concept": "Structure","name": "role_list","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "group_name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.result3": {
        "concept": "Structure","name": "result3","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "active","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "admin","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "avatar","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "boss","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dept_id_list","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dept_order_list","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "dept_order_list","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "exclusive_account","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "hide_mobile","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "leader_in_dept","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "leader_in_dept","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "mobile","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "real_authed","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "role_list","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "role_list","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "senior","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "state_code","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "unionid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "userid","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.collection.List<connector.dingding.structures.dept_order_list>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "dept_order_list","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"nasl.collection.List<connector.dingding.structures.leader_in_dept>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "leader_in_dept","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"nasl.collection.List<connector.dingding.structures.role_list>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "role_list","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"connector.dingding.structures.APiReturnOfgetUser": {
        "concept": "Structure","name": "APiReturnOfgetUser","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "result","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "result3","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "request_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.getUserIdList1Body": {
        "concept": "Structure","name": "getUserIdList1Body","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.result4": {
        "concept": "Structure","name": "result4","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "userid_list","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      }],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.APiReturnOfgetUserIdList1": {
        "concept": "Structure","name": "APiReturnOfgetUserIdList1","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "errcode","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "errmsg","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "result","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "connector.dingding.structures","typeName": "result4","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "request_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.getDepartmentBody": {
        "concept": "Structure","name": "getDepartmentBody","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "language","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"connector.dingding.structures.result5": {
        "concept": "Structure","name": "result5","description": null,"typeParams": null,"properties": [{
        "concept": "StructureProperty","name": "auto_add_user","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "parent_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "name","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "dept_id","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      },{
        "concept": "StructureProperty","name": "create_dept_group","label": null,"description": null,"typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean","typeArguments": [],"returnType": [],"inferred": false,"properties": [],"ruleMap": {
        
      }
      },"defaultValue": null,"jsonName": null,"defaultCode": {
        
      }
      }]
      },"nasl.auth.LCAPCurrentUserInfo": {
        "concept": "Structure","name": "LCAPCurrentUserInfo","properties": [{
        "concept": "StructureProperty","name": "status","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "nickName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "userName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "email","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "userId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "phone","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "createTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "updateTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "source","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.Current": {
        "concept": "Structure","name": "Current","typeParams": [{
        "concept": "TypeParam","name": "T"
      }],"properties": [{
        "concept": "StructureProperty","name": "item","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }
      },{
        "concept": "StructureProperty","name": "index","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "rowIndex","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "columnIndex","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "value","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"T": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      },"nasl.ui.CurrentDynamic": {
        "concept": "Structure","name": "CurrentDynamic","typeParams": [{
        "concept": "TypeParam","name": "T"
      },{
        "concept": "TypeParam","name": "T1"
      }],"properties": [{
        "concept": "StructureProperty","name": "item","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }
      },{
        "concept": "StructureProperty","name": "columnItem","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T1"
      }
      },{
        "concept": "StructureProperty","name": "index","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "rowIndex","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "columnIndex","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "value","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"T1": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T1"
      },"nasl.ui.Error": {
        "concept": "Structure","name": "Error","properties": [{
        "concept": "StructureProperty","name": "errorType","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "errorMsg","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.BaseEvent": {
        "concept": "Structure","name": "BaseEvent","properties": []
      },"nasl.ui.DataSourceParams": {
        "concept": "Structure","name": "DataSourceParams","properties": [{
        "concept": "StructureProperty","name": "page","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "size","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "sort","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "order","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "filterText","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.EventTarget": {
        "concept": "Structure","name": "EventTarget","properties": []
      },"nasl.ui.MouseEvent": {
        "concept": "Structure","name": "MouseEvent","properties": [{
        "concept": "StructureProperty","name": "altKey","description": "如果alt 键被按下，返回true","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "button","description": "如果鼠标按钮被按下（如果有的话），将会返回一个数值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "clientX","description": "鼠标指针在点击元素（DOM）中的X坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "clientY","description": "鼠标指针在点击元素（DOM）中的Y坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "ctrlKey","description": "如果 control 键被按下，则返回 true","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "metaKey","description": "如果 meta 键被按下，则返回 true","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "movementX","description": "鼠标指针相对于最后mousemove事件位置的X坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "movementY","description": "鼠标指针相对于最后mousemove事件位置的Y坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "offsetX","description": "鼠标指针相对于目标节点内边位置的X坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "offsetY","description": "鼠标指针相对于目标节点内边位置的Y坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "pageX","description": "相对于整个文档的水平坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "pageY","description": "相对于整个文档的垂直坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "screenX","description": "相对于全局（屏幕）的水平坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "screenY","description": "相对于全局（屏幕）的垂直坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "which","description": "对应（键盘）按下的数字类型的 keyCode","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.FocusEvent": {
        "concept": "Structure","name": "FocusEvent","properties": [{
        "concept": "StructureProperty","name": "cancelBubble","description": "是否取消冒泡","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "detail","description": "详情","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "layerX","description": "相对于当前层的水平坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "layerY","description": "相对于当前层的垂直坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "pageX","description": "相对于整个文档的水平坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "pageY","description": "相对于整个文档的垂直坐标","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "which","description": "对应（键盘）按下的数字类型的 keyCode","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.ChangeEvent": {
        "concept": "Structure","name": "ChangeEvent","properties": [{
        "concept": "StructureProperty","name": "value","description": "改变后的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "oldValue","description": "待改变的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "formattedValue","description": "格式化后的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "values","description": "改变后每项值的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "oldValues","description": "旧的每项值的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "label","description": "此选框的标签","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "valid","description": "改变后的值是否合法","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      }]
      },"nasl.collection.List<T>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      },"nasl.ui.NavigateEvent": {
        "concept": "Structure","name": "NavigateEvent","properties": [{
        "concept": "StructureProperty","name": "to","description": "to属性的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "replace","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "append","description": "","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      }]
      },"nasl.ui.ChangeItemEvent": {
        "concept": "Structure","name": "ChangeItemEvent","properties": [{
        "concept": "StructureProperty","name": "selected","description": "选中还是取消","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "value","description": "选择项的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "oldValue","description": "旧的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "item","description": "选择项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "oldItem","description": "旧的选择项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "label","description": "此选框的标签","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.ChangeItemsEvent": {
        "concept": "Structure","name": "ChangeItemsEvent","properties": [{
        "concept": "StructureProperty","name": "selected","description": "选中还是取消","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "item","description": "该选中项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "value","description": "所有选中项的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "oldValue","description": "旧的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "items","description": "所有选中项相关对象的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "oldItems","description": "旧的所有选中项相关对象的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      }]
      },"nasl.ui.CascadeCapsulesEvent": {
        "concept": "Structure","name": "CascadeCapsulesEvent","properties": [{
        "concept": "StructureProperty","name": "level","description": "选择的层级","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "value","description": "改变后的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "oldValue","description": "旧的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "values","description": "改变后每项值的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "oldValues","description": "旧的每项值的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "item","description": "选择项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.CollapseEvent": {
        "concept": "Structure","name": "CollapseEvent","properties": [{
        "concept": "StructureProperty","name": "expanded","description": "展开/折叠状态","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "open","description": "弹出/隐藏状态","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "value","description": "开关状态","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "oldValue","description": "旧的开关状态","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "node","description": "节点相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.SliderEvent": {
        "concept": "Structure","name": "SliderEvent","properties": [{
        "concept": "StructureProperty","name": "value","description": "滑块的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "oldValue","description": "旧的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "percent","description": "滑块位置所在的百分比","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.DateEvent": {
        "concept": "Structure","name": "DateEvent","properties": [{
        "concept": "StructureProperty","name": "date","description": "日期值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Date"
      }
      },{
        "concept": "StructureProperty","name": "time","description": "日期值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Date"
      }
      }]
      },"nasl.core.Date": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Date"
      },"nasl.ui.OperatorItemEvent": {
        "concept": "Structure","name": "OperatorItemEvent","properties": [{
        "concept": "StructureProperty","name": "item","description": "添加的项","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "index","description": "添加的索引","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "data","description": "当前数据","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.ValidateEvent": {
        "concept": "Structure","name": "ValidateEvent","properties": [{
        "concept": "StructureProperty","name": "rawValue","description": "用户输入的原始值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "value","description": "验证修复的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "trigger","description": "本次验证的触发方式","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "muted","description": "是否验证后无提示","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "valid","description": "验证是否通过","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "touched","description": "用户是否触碰","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "dirty","description": "用户是否修改值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "firstError","description": "第一个错误提示消息","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.PaginationEvent": {
        "concept": "Structure","name": "PaginationEvent","properties": [{
        "concept": "StructureProperty","name": "page","description": "选择的页码","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "oldPage","description": "旧的页码","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "pageSize","description": "当前每页条数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "oldPageSize","description": "旧的每页条数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "size","description": "当前每页条数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "oldSize","description": "旧的每页条数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "number","description": "当前页数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "oldNumber","description": "旧的页数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.DurationEvent": {
        "concept": "Structure","name": "DurationEvent","properties": [{
        "concept": "StructureProperty","name": "text","description": "提示的内容","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "color","description": "提示的颜色","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "duration","description": "提示停留的时间","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.TransferEvent": {
        "concept": "Structure","name": "TransferEvent","properties": [{
        "concept": "StructureProperty","name": "source","description": "原数据列表","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "target","description": "目标数据列表","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "transfer","description": "移动的项","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "transferValues","description": "移动项的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      }]
      },"nasl.ui.TreeChangeEvent": {
        "concept": "Structure","name": "TreeChangeEvent","properties": [{
        "concept": "StructureProperty","name": "value","description": "改变后的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "oldValue","description": "待改变的值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "node","description": "选择项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "oldNode","description": "旧的选择项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.CheckedEvent": {
        "concept": "Structure","name": "CheckedEvent","properties": [{
        "concept": "StructureProperty","name": "checked","description": "选中/取消状态","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "oldChecked","description": "旧的选中/取消状态","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "values","description": "改变后每项值的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "oldValues","description": "旧的每项值的数组","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }]
      }
      },{
        "concept": "StructureProperty","name": "node","description": "选择项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "item","description": "选择项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.UploadEvent": {
        "concept": "Structure","name": "UploadEvent","properties": [{
        "concept": "StructureProperty","name": "item","description": "进度相关信息","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.ui","typeName": "File"
      }
      },{
        "concept": "StructureProperty","name": "data","description": "进度相关信息","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "file","description": "上传文件信息，不包含文件主体内容","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "xhr","description": "发送前的 XMLHttpRequest 对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "formData","description": "用于发送的数据对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "xml","description": "服务器回传信息","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.File": {
        "concept": "Structure","name": "File","properties": [{
        "concept": "StructureProperty","name": "status","description": "文件状态","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "url","description": "文件链接","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "name","description": "文件名称","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "size","description": "文件大小","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "type","description": "文件类型","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.UploadErrorEvent": {
        "concept": "Structure","name": "UploadErrorEvent","properties": [{
        "concept": "StructureProperty","name": "name","description": "错误名","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "message","description": "错误描述","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "extensions","description": "限制类型","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "maxSize","description": "限制大小","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "size","description": "当前大小","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "count","description": "当前数量","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "limit","description": "数量配额","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.SortEvent": {
        "concept": "Structure","name": "SortEvent","properties": [{
        "concept": "StructureProperty","name": "field","description": "排序属性","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "order","description": "排序顺序","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "compare","description": "排序比较函数","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.PoiInfo": {
        "concept": "Structure","name": "PoiInfo","properties": [{
        "concept": "StructureProperty","name": "source","description": "信息来源","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "id","description": "POI点的id","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "name","description": "名称","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "location","description": "经纬度","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "address","description": "地址","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.ui.SelectData": {
        "concept": "Structure","name": "SelectData","properties": [{
        "concept": "StructureProperty","name": "parent","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "item","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "level","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "index","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.DragAndDropUpdateData": {
        "concept": "Structure","name": "DragAndDropUpdateData","properties": [{
        "concept": "StructureProperty","name": "sourceList","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      }
      },{
        "concept": "StructureProperty","name": "targetList","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      }
      }]
      },"nasl.ui.DragAndDropEvent": {
        "concept": "Structure","name": "DragAndDropEvent","properties": [{
        "concept": "StructureProperty","name": "source","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.ui","typeName": "SelectData"
      }
      },{
        "concept": "StructureProperty","name": "target","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.ui","typeName": "SelectData"
      }
      },{
        "concept": "StructureProperty","name": "finalSource","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.ui","typeName": "SelectData"
      }
      },{
        "concept": "StructureProperty","name": "position","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "updateData","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.ui","typeName": "DragAndDropUpdateData"
      }
      }]
      },"nasl.ui.ExpandEvent": {
        "concept": "Structure","name": "ExpandEvent","properties": [{
        "concept": "StructureProperty","name": "item","description": "展开项相关对象","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "expanded","description": "展开状态值","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      }]
      },"nasl.ui.ScrollEvent": {
        "concept": "Structure","name": "ScrollEvent","properties": [{
        "concept": "StructureProperty","name": "scrollHeight","description": "滚动内容高度","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "scrollWidth","description": "滚动内容宽度","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "scrollTop","description": "滚动内容距离顶部高度","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "scrollLeft","description": "滚动内容距离左侧距离","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "clientHeight","description": "可视区域高度","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "clientWidth","description": "可视区域宽度由","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.ui.KeyboardEvent": {
        "concept": "Structure","name": "KeyboardEvent","properties": []
      },"nasl.collection.List": {
        "concept": "Structure","name": "List","typeParams": [{
        "concept": "TypeParam","name": "T"
      }],"properties": [{
        "concept": "StructureProperty","name": "length","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.Map": {
        "concept": "Structure","name": "Map","typeParams": [{
        "concept": "TypeParam","name": "K"
      },{
        "concept": "TypeParam","name": "V"
      }],"properties": [{
        "concept": "StructureProperty","name": "length","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.interface.ApiReturnOf": {
        "concept": "Structure","name": "ApiReturnOf","typeParams": [{
        "concept": "TypeParam","name": "T"
      }],"properties": [{
        "concept": "StructureProperty","name": "Data","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }
      },{
        "concept": "StructureProperty","name": "Code","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "Message","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.process.LCAPProcessDefinition": {
        "concept": "Structure","name": "LCAPProcessDefinition","properties": [{
        "concept": "StructureProperty","name": "name","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "title","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "description","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "suspended","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      }]
      },"nasl.process.LCAPProcessInstance": {
        "concept": "Structure","name": "LCAPProcessInstance","properties": [{
        "concept": "StructureProperty","name": "processId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "title","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "description","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "startBy","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "startTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "endTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "finished","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "processDefName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.process.LCAPTaskDefinition": {
        "concept": "Structure","name": "LCAPTaskDefinition","properties": [{
        "concept": "StructureProperty","name": "name","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "title","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "description","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "processDefName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "emptyAssignee","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "skipEnabled","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      }]
      },"nasl.process.LCAPTaskInstance": {
        "concept": "Structure","name": "LCAPTaskInstance","properties": [{
        "concept": "StructureProperty","name": "taskId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "title","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "description","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "finished","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "completeBy","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "createTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "completeTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "taskDefName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "processId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "processDefName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.process.LCAPOperateProcessResult": {
        "concept": "Structure","name": "LCAPOperateProcessResult","properties": [{
        "concept": "StructureProperty","name": "success","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "failMessage","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "code","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.processV2.CurrNode": {
        "concept": "Structure","name": "CurrNode","properties": [{
        "concept": "StructureProperty","name": "currNodeTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      }
      }]
      },"nasl.processV2.MyPendingTask": {
        "concept": "Structure","name": "MyPendingTask","properties": [{
        "concept": "StructureProperty","name": "taskId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "taskTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procDefTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstInitiator","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstStartTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "procInstCurrNodes","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.processV2","typeName": "CurrNode"
      }]
      }
      }]
      },"nasl.collection.List<nasl.processV2.CurrNode>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.processV2","typeName": "CurrNode"
      }]
      },"nasl.processV2.MyCompletedTask": {
        "concept": "Structure","name": "MyCompletedTask","properties": [{
        "concept": "StructureProperty","name": "taskId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "taskTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procDefTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstInitiator","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstStartTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "procInstCurrNodes","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.processV2","typeName": "CurrNode"
      }]
      }
      }]
      },"nasl.processV2.MyInitiatedTask": {
        "concept": "Structure","name": "MyInitiatedTask","properties": [{
        "concept": "StructureProperty","name": "taskId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "taskTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procDefTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstInitiator","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstStartTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "procInstCurrNodes","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.processV2","typeName": "CurrNode"
      }]
      }
      }]
      },"nasl.processV2.ProcDef": {
        "concept": "Structure","name": "ProcDef","properties": [{
        "concept": "StructureProperty","name": "procDefKey","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procDefTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procDefDescription","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.processV2.LCAPUser": {
        "concept": "Structure","name": "LCAPUser","properties": [{
        "concept": "StructureProperty","name": "userId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "userName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "extensionInfos","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.processV2.ProcInstInfo": {
        "concept": "Structure","name": "ProcInstInfo","properties": [{
        "concept": "StructureProperty","name": "procInstId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstInitiator","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "procInstStartTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "procInstStatus","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.processV2","typeName": "ProcInstStatusEnum"
      }
      },{
        "concept": "StructureProperty","name": "procInstCurrNodes","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.processV2","typeName": "CurrNode"
      }]
      }
      },{
        "concept": "StructureProperty","name": "procInstEndTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      }]
      },"nasl.processV2.ProcInstStatusEnum": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.processV2","typeName": "ProcInstStatusEnum"
      },"nasl.processV2.getTaskOperationPermission": {
        "concept": "Structure","name": "getTaskOperationPermission","properties": [{
        "concept": "StructureProperty","name": "name","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "operationEnabled","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "displayText","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "commentRequired","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      }]
      },"nasl.processV2.DataPropertyPermission": {
        "concept": "Structure","name": "DataPropertyPermission","properties": [{
        "concept": "StructureProperty","name": "propertyName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "permission","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.processV2.ProcInstRecord": {
        "concept": "Structure","name": "ProcInstRecord","properties": [{
        "concept": "StructureProperty","name": "nodeTitle","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "userName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "recordCreatedTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "DateTime"
      }
      },{
        "concept": "StructureProperty","name": "nodeOperationDisplayText","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "nodeComment","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"nasl.http.HttpCookie": {
        "concept": "Structure","name": "HttpCookie","properties": [{
        "concept": "StructureProperty","name": "name","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "value","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "domain","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "cookiePath","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "sameSite","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "httpOnly","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "secure","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Boolean"
      }
      },{
        "concept": "StructureProperty","name": "maxAge","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Integer"
      }
      }]
      },"nasl.core.Integer": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Integer"
      },"nasl.http.HttpResponse": {
        "concept": "Structure","name": "HttpResponse","typeParams": [{
        "concept": "TypeParam","name": "T"
      }],"properties": [{
        "concept": "StructureProperty","name": "status","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Integer"
      }
      },{
        "concept": "StructureProperty","name": "body","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }
      },{
        "concept": "StructureProperty","name": "headers","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      }
      },{
        "concept": "StructureProperty","name": "cookies","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.http","typeName": "HttpCookie"
      }]
      }
      }]
      },"nasl.collection.Map<nasl.core.String, nasl.http.HttpCookie>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.http","typeName": "HttpCookie"
      }]
      },"nasl.http.HttpRequest": {
        "concept": "Structure","name": "HttpRequest","typeParams": [{
        "concept": "TypeParam","name": "T"
      }],"properties": [{
        "concept": "StructureProperty","name": "requestURL","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "remoteIp","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "requestMethod","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "body","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "typeParam","typeName": "T"
      }
      },{
        "concept": "StructureProperty","name": "headers","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      }
      },{
        "concept": "StructureProperty","name": "pathParams","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      }
      },{
        "concept": "StructureProperty","name": "queryParams","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }]
      }
      },{
        "concept": "StructureProperty","name": "cookies","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "Map","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      },{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "nasl.http","typeName": "HttpCookie"
      }]
      }
      }]
      },"nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPermission","typeArguments": null,"returnType": null,"properties": null,"name": ""
      }],"returnType": null,"properties": null,"name": ""
      },"nasl.collection.List<{lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","typeNamespace": null,"typeName": null,"typeArguments": [],"returnType": null,"inferred": false,"properties": [{
        "concept": "StructureProperty","name": "lCAPUserRoleMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserRoleMapping","typeArguments": null,"returnType": null,"properties": null,"name": ""
      }
      }],"ruleMap": null,"name": ""
      }],"returnType": null,"properties": null,"name": ""
      },"{lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","typeNamespace": null,"typeName": null,"typeArguments": [],"returnType": null,"inferred": false,"properties": [{
        "concept": "StructureProperty","name": "lCAPUserRoleMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserRoleMapping","typeArguments": null,"returnType": null,"properties": null,"name": ""
      }
      }],"ruleMap": null,"name": ""
      },"nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","typeNamespace": null,"typeName": null,"typeArguments": [],"returnType": null,"inferred": false,"properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole","typeArguments": null,"returnType": null,"properties": null,"name": ""
      }
      }],"ruleMap": null,"name": ""
      }],"returnType": null,"properties": null,"name": ""
      },"{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","typeNamespace": null,"typeName": null,"typeArguments": [],"returnType": null,"inferred": false,"properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole","typeArguments": null,"returnType": null,"properties": null,"name": ""
      }
      }],"ruleMap": null,"name": ""
      },"{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole"
      }
      }]
      }]
      },"{list: nasl.collection.List<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPResource","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPResource"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPResource","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPResource"
      }
      }]
      }]
      },"{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPResource","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPResource"
      }
      }]
      },"nasl.collection.List<app.dataSources.defaultDS.entities.LCAPResource>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPResource","typeArguments": null,"returnType": null,"properties": null,"name": ""
      }],"returnType": null,"properties": null,"name": ""
      },"{list: nasl.collection.List<{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping, lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPResource: app.dataSources.defaultDS.entities.LCAPResource, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPPerResMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPerResMapping"
      }
      },{
        "concept": "StructureProperty","name": "lCAPPermission","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPermission"
      }
      },{
        "concept": "StructureProperty","name": "lCAPResource","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPResource"
      }
      },{
        "concept": "StructureProperty","name": "lCAPRolePerMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRolePerMapping"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping, lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPResource: app.dataSources.defaultDS.entities.LCAPResource, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPPerResMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPerResMapping"
      }
      },{
        "concept": "StructureProperty","name": "lCAPPermission","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPermission"
      }
      },{
        "concept": "StructureProperty","name": "lCAPResource","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPResource"
      }
      },{
        "concept": "StructureProperty","name": "lCAPRolePerMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRolePerMapping"
      }
      }]
      }]
      },"{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping, lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPResource: app.dataSources.defaultDS.entities.LCAPResource, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPPerResMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPerResMapping"
      }
      },{
        "concept": "StructureProperty","name": "lCAPPermission","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPermission"
      }
      },{
        "concept": "StructureProperty","name": "lCAPResource","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPResource"
      }
      },{
        "concept": "StructureProperty","name": "lCAPRolePerMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRolePerMapping"
      }
      }]
      },"nasl.ui.Current<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","typeNamespace": null,"typeName": null,"typeArguments": [],"returnType": null,"inferred": false,"properties": [{
        "concept": "StructureProperty","name": "lCAPResource","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPResource","typeArguments": null,"returnType": null,"properties": null,"name": ""
      }
      }],"ruleMap": null,"name": ""
      }],"returnType": null,"properties": null,"name": ""
      },"nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","typeNamespace": null,"typeName": null,"typeArguments": [],"returnType": null,"inferred": false,"properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole","typeArguments": null,"returnType": null,"properties": null,"name": ""
      }
      },{
        "concept": "StructureProperty","name": "lCAPUserRoleMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserRoleMapping","typeArguments": null,"returnType": null,"properties": null,"name": ""
      }
      }],"ruleMap": null,"name": ""
      }],"returnType": null,"properties": null,"name": ""
      },"{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","typeNamespace": null,"typeName": null,"typeArguments": [],"returnType": null,"inferred": false,"properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole","typeArguments": null,"returnType": null,"properties": null,"name": ""
      }
      },{
        "concept": "StructureProperty","name": "lCAPUserRoleMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserRoleMapping","typeArguments": null,"returnType": null,"properties": null,"name": ""
      }
      }],"ruleMap": null,"name": ""
      },"nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","typeNamespace": null,"typeName": null,"typeArguments": [],"returnType": null,"inferred": false,"properties": [{
        "concept": "StructureProperty","name": "lCAPUser","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser","typeArguments": null,"returnType": null,"properties": null,"name": ""
      }
      }],"ruleMap": null,"name": ""
      }],"returnType": null,"properties": null,"name": ""
      },"{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","typeNamespace": null,"typeName": null,"typeArguments": [],"returnType": null,"inferred": false,"properties": [{
        "concept": "StructureProperty","name": "lCAPUser","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser","typeArguments": null,"returnType": null,"properties": null,"name": ""
      }
      }],"ruleMap": null,"name": ""
      },"{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPUser","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole"
      }
      },{
        "concept": "StructureProperty","name": "lCAPUserRoleMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserRoleMapping"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPRole","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRole"
      }
      },{
        "concept": "StructureProperty","name": "lCAPUserRoleMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUserRoleMapping"
      }
      }]
      }]
      },"loadResourceByRoleId": {
        "concept": "TypeAnnotation","typeKind": "reference","typeName": "loadResourceByRoleId"
      },"nasl.core.Null": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Null"
      },"{list: nasl.collection.List<{userGroup: app.dataSources.defaultDS.entities.UserGroup}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "userGroup","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "UserGroup"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{userGroup: app.dataSources.defaultDS.entities.UserGroup}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "userGroup","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "UserGroup"
      }
      }]
      }]
      },"{userGroup: app.dataSources.defaultDS.entities.UserGroup}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "userGroup","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "UserGroup"
      }
      }]
      },"load": {
        "concept": "TypeAnnotation","typeKind": "reference","typeName": "load"
      },"{list: nasl.collection.List<{task: app.dataSources.defaultDS.entities.Task}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "task","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Task"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{task: app.dataSources.defaultDS.entities.Task}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "task","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Task"
      }
      }]
      }]
      },"{task: app.dataSources.defaultDS.entities.Task}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "task","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Task"
      }
      }]
      },"{list: nasl.collection.List<{bug: app.dataSources.defaultDS.entities.Bug}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "bug","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Bug"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{bug: app.dataSources.defaultDS.entities.Bug}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "bug","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Bug"
      }
      }]
      }]
      },"{bug: app.dataSources.defaultDS.entities.Bug}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "bug","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Bug"
      }
      }]
      },"IElements": {
        "concept": "TypeAnnotation","typeKind": "reference","typeName": "IElements"
      },"{list: nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "customer","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Customer"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "customer","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Customer"
      }
      }]
      }]
      },"{customer: app.dataSources.defaultDS.entities.Customer}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "customer","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Customer"
      }
      }]
      },"getUsersListFromNumis": {
        "concept": "TypeAnnotation","typeKind": "reference","typeName": "getUsersListFromNumis"
      },"nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "text","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "value","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      }]
      },"{text: nasl.core.String, value: nasl.core.String}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "text","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "value","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"{CreateTime: nasl.core.Long, Email: nasl.core.String, LoginCount: nasl.core.Long, Phone: nasl.core.String, Source: nasl.core.String, Status: nasl.core.String, UpdateTime: nasl.core.Long, UserId: nasl.core.String, UserInfoExtend: {Company: nasl.core.String, Department: nasl.core.String, EmployeeId: nasl.core.String, JobLevel: nasl.core.String, JobNum: nasl.core.String, JobYear: nasl.core.String, NameAndEmail: nasl.core.String, NickName: nasl.core.String, Position: nasl.core.String, RealName: nasl.core.String}, UserName: nasl.core.String}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "CreateTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "Email","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "LoginCount","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "Phone","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "Source","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "Status","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "UpdateTime","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      },{
        "concept": "StructureProperty","name": "UserId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "UserInfoExtend","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "Company","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "Department","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "EmployeeId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "JobLevel","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "JobNum","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "JobYear","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "NameAndEmail","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "NickName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "Position","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "RealName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      }
      },{
        "concept": "StructureProperty","name": "UserName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"{Company: nasl.core.String, Department: nasl.core.String, EmployeeId: nasl.core.String, JobLevel: nasl.core.String, JobNum: nasl.core.String, JobYear: nasl.core.String, NameAndEmail: nasl.core.String, NickName: nasl.core.String, Position: nasl.core.String, RealName: nasl.core.String}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "Company","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "Department","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "EmployeeId","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "JobLevel","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "JobNum","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "JobYear","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "NameAndEmail","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "NickName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "Position","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      },{
        "concept": "StructureProperty","name": "RealName","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "String"
      }
      }]
      },"{list: nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPPermission","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPermission"
      }
      },{
        "concept": "StructureProperty","name": "lCAPRolePerMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRolePerMapping"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPPermission","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPermission"
      }
      },{
        "concept": "StructureProperty","name": "lCAPRolePerMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRolePerMapping"
      }
      }]
      }]
      },"{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPPermission","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPermission"
      }
      },{
        "concept": "StructureProperty","name": "lCAPRolePerMapping","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPRolePerMapping"
      }
      }]
      },"nasl.ui.Current<app.dataSources.defaultDS.entities.LCAPResource>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPResource"
      }]
      },"{list: nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer, project: app.dataSources.defaultDS.entities.Project}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "customer","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Customer"
      }
      },{
        "concept": "StructureProperty","name": "project","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Project"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer, project: app.dataSources.defaultDS.entities.Project}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "customer","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Customer"
      }
      },{
        "concept": "StructureProperty","name": "project","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Project"
      }
      }]
      }]
      },"{customer: app.dataSources.defaultDS.entities.Customer, project: app.dataSources.defaultDS.entities.Project}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "customer","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Customer"
      }
      },{
        "concept": "StructureProperty","name": "project","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Project"
      }
      }]
      },"{list: nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer, pOC: app.dataSources.defaultDS.entities.POC}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "customer","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Customer"
      }
      },{
        "concept": "StructureProperty","name": "pOC","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "POC"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer, pOC: app.dataSources.defaultDS.entities.POC}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "customer","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Customer"
      }
      },{
        "concept": "StructureProperty","name": "pOC","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "POC"
      }
      }]
      }]
      },"{customer: app.dataSources.defaultDS.entities.Customer, pOC: app.dataSources.defaultDS.entities.POC}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "customer","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Customer"
      }
      },{
        "concept": "StructureProperty","name": "pOC","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "POC"
      }
      }]
      },"nasl.ui.Current<{userGroup: app.dataSources.defaultDS.entities.UserGroup}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "userGroup","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "UserGroup"
      }
      }]
      }]
      },"nasl.ui.Current<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "lCAPUser","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser"
      }
      }]
      }]
      },"nasl.ui.Current<app.dataSources.defaultDS.entities.LCAPPermission>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPPermission"
      }]
      },"{list: nasl.collection.List<{project: app.dataSources.defaultDS.entities.Project}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "project","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Project"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{project: app.dataSources.defaultDS.entities.Project}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "project","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Project"
      }
      }]
      }]
      },"{project: app.dataSources.defaultDS.entities.Project}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "project","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Project"
      }
      }]
      },"nasl.ui.Current<{task: app.dataSources.defaultDS.entities.Task}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "task","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Task"
      }
      }]
      }]
      },"nasl.ui.Current<{bug: app.dataSources.defaultDS.entities.Bug}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "bug","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Bug"
      }
      }]
      }]
      },"nasl.ui.Current<{customer: app.dataSources.defaultDS.entities.Customer}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "customer","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Customer"
      }
      }]
      }]
      },"{list: nasl.collection.List<{comments: app.dataSources.defaultDS.entities.Comments, lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "list","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "comments","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Comments"
      }
      },{
        "concept": "StructureProperty","name": "lCAPUser","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser"
      }
      }]
      }]
      }
      },{
        "concept": "StructureProperty","name": "total","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "primitive","typeNamespace": "nasl.core","typeName": "Long"
      }
      }]
      },"nasl.collection.List<{comments: app.dataSources.defaultDS.entities.Comments, lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.collection","typeName": "List","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "comments","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Comments"
      }
      },{
        "concept": "StructureProperty","name": "lCAPUser","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser"
      }
      }]
      }]
      },"{comments: app.dataSources.defaultDS.entities.Comments, lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}": {
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "comments","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Comments"
      }
      },{
        "concept": "StructureProperty","name": "lCAPUser","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser"
      }
      }]
      },"nasl.ui.Current<{customer: app.dataSources.defaultDS.entities.Customer, project: app.dataSources.defaultDS.entities.Project}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "customer","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Customer"
      }
      },{
        "concept": "StructureProperty","name": "project","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Project"
      }
      }]
      }]
      },"nasl.ui.Current<{customer: app.dataSources.defaultDS.entities.Customer, pOC: app.dataSources.defaultDS.entities.POC}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "customer","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Customer"
      }
      },{
        "concept": "StructureProperty","name": "pOC","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "POC"
      }
      }]
      }]
      },"nasl.ui.Current<{comments: app.dataSources.defaultDS.entities.Comments, lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>": {
        "concept": "TypeAnnotation","typeKind": "generic","typeNamespace": "nasl.ui","typeName": "Current","typeArguments": [{
        "concept": "TypeAnnotation","typeKind": "anonymousStructure","properties": [{
        "concept": "StructureProperty","name": "comments","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "Comments"
      }
      },{
        "concept": "StructureProperty","name": "lCAPUser","typeAnnotation": {
        "concept": "TypeAnnotation","typeKind": "reference","typeNamespace": "app.dataSources.defaultDS.entities","typeName": "LCAPUser"
      }
      }]
      }]
      }
      },"enumsMap": {
        "TaskStatus": {
        "0": "待办","1": "进行中","2": "测试中","3": "已完成","4": "待验收","5": "已关闭","6": "重新打开"
      },"Type": {
        "0": "待修复","1": "修复中","2": "待测试","3": "待上线","4": "已上线","5": "已关闭"
      },"RiskStrategy": {
        "0": "风险规避","1": "风险转移","2": "风险缓解","3": "风险接受","4": "风险控制","5": "风险应急","6": "风险监测"
      },"RiskLevel": {
        "0": "高风险","1": "中风险","2": "低风险"
      },"BugLevel": {
        "0": "阻塞","1": "严重","2": "一般","3": "轻微"
      },"TaskType": {
        "0": "需求设计","1": "功能开发","2": "系统测试","3": "接口联调","4": "其他"
      },"Priority": {
        "0": "P0","1": "P1","2": "P2"
      },"CommentType": {
        "0": "客户成功","1": "POC"
      },"PocStatus": {
        "0": "待办","1": "开发中","2": "待验收","3": "待演示","4": "已完成","5": "已关闭"
      },"ProjectStatus": {
        "0": "待启动","1": "交付中","2": "已初验","3": "已终验","4": "售后中","5": "已结项"
      },"CustomerNature": {
        "0": "商业","1": "生态","2": "免费","3": "SaaS"
      },"IndustryCategory": {
        "0": "经济行业","1": "服务行业","2": "IT行业","3": "医疗行业","4": "教育行业","5": "政府"
      },"UserStatusEnum": {
        "Normal": "正常","Forbidden": "禁用"
      },"UserSourceEnum": {
        "Normal": "普通登录"
      },"nasl.configuration.enums.I18nEnum": {
        "en-US": "英语","fr-FR": "法语","ko-KR": "韩语","zh-CN": "中文(简体)","zh-TW": "中文(繁体)","ja-JP": "日语"
      }
      },"logicsMap": {
        "app.dataSources.defaultDS.entities.Risk.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/risk"
      }
      },"app.dataSources.defaultDS.entities.Risk.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/risk"
      }
      },"app.dataSources.defaultDS.entities.Risk.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/risk"
      }
      },"app.dataSources.defaultDS.entities.Risk.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/risk"
      }
      },"app.dataSources.defaultDS.entities.Risk.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/risk/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.Risk.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/risk/by"
      }
      },"app.dataSources.defaultDS.entities.Risk.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/risk/by"
      }
      },"app.dataSources.defaultDS.entities.Risk.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/risk/batch"
      }
      },"app.dataSources.defaultDS.entities.Risk.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/risk/batch"
      }
      },"app.dataSources.defaultDS.entities.Risk.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/risk/batch"
      }
      },"app.dataSources.defaultDS.entities.Risk.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/risk/import"
      }
      },"app.dataSources.defaultDS.entities.Bug.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/bug"
      }
      },"app.dataSources.defaultDS.entities.Bug.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/bug"
      }
      },"app.dataSources.defaultDS.entities.Bug.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/bug"
      }
      },"app.dataSources.defaultDS.entities.Bug.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/bug"
      }
      },"app.dataSources.defaultDS.entities.Bug.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/bug/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.Bug.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/bug/by"
      }
      },"app.dataSources.defaultDS.entities.Bug.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/bug/by"
      }
      },"app.dataSources.defaultDS.entities.Bug.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/bug/batch"
      }
      },"app.dataSources.defaultDS.entities.Bug.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/bug/batch"
      }
      },"app.dataSources.defaultDS.entities.Bug.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/bug/batch"
      }
      },"app.dataSources.defaultDS.entities.Bug.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/bug/import"
      }
      },"app.dataSources.defaultDS.entities.Logs1.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/logs1"
      }
      },"app.dataSources.defaultDS.entities.Logs1.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/logs1"
      }
      },"app.dataSources.defaultDS.entities.Logs1.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/logs1"
      }
      },"app.dataSources.defaultDS.entities.Logs1.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/logs1"
      }
      },"app.dataSources.defaultDS.entities.Logs1.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/logs1/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.Logs1.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/logs1/by"
      }
      },"app.dataSources.defaultDS.entities.Logs1.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/logs1/by"
      }
      },"app.dataSources.defaultDS.entities.Logs1.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/logs1/batch"
      }
      },"app.dataSources.defaultDS.entities.Logs1.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/logs1/batch"
      }
      },"app.dataSources.defaultDS.entities.Logs1.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/logs1/batch"
      }
      },"app.dataSources.defaultDS.entities.Logs1.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/logs1/import"
      }
      },"app.dataSources.defaultDS.entities.UserTaskMapping.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/user-task-mapping"
      }
      },"app.dataSources.defaultDS.entities.UserTaskMapping.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/user-task-mapping"
      }
      },"app.dataSources.defaultDS.entities.UserTaskMapping.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/user-task-mapping"
      }
      },"app.dataSources.defaultDS.entities.UserTaskMapping.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/user-task-mapping"
      }
      },"app.dataSources.defaultDS.entities.UserTaskMapping.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/user-task-mapping/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.UserTaskMapping.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/user-task-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.UserTaskMapping.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/user-task-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.UserTaskMapping.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/user-task-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.UserTaskMapping.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/user-task-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.UserTaskMapping.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/user-task-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.UserTaskMapping.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/user-task-mapping/import"
      }
      },"app.dataSources.defaultDS.entities.Task.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/task"
      }
      },"app.dataSources.defaultDS.entities.Task.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/task"
      }
      },"app.dataSources.defaultDS.entities.Task.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/task"
      }
      },"app.dataSources.defaultDS.entities.Task.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/task"
      }
      },"app.dataSources.defaultDS.entities.Task.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/task/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.Task.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/task/by"
      }
      },"app.dataSources.defaultDS.entities.Task.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/task/by"
      }
      },"app.dataSources.defaultDS.entities.Task.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/task/batch"
      }
      },"app.dataSources.defaultDS.entities.Task.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/task/batch"
      }
      },"app.dataSources.defaultDS.entities.Task.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/task/batch"
      }
      },"app.dataSources.defaultDS.entities.Task.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/task/import"
      }
      },"app.dataSources.defaultDS.entities.Comments.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/comments"
      }
      },"app.dataSources.defaultDS.entities.Comments.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/comments"
      }
      },"app.dataSources.defaultDS.entities.Comments.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/comments"
      }
      },"app.dataSources.defaultDS.entities.Comments.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/comments"
      }
      },"app.dataSources.defaultDS.entities.Comments.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/comments/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.Comments.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/comments/by"
      }
      },"app.dataSources.defaultDS.entities.Comments.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/comments/by"
      }
      },"app.dataSources.defaultDS.entities.Comments.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/comments/batch"
      }
      },"app.dataSources.defaultDS.entities.Comments.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/comments/batch"
      }
      },"app.dataSources.defaultDS.entities.Comments.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/comments/batch"
      }
      },"app.dataSources.defaultDS.entities.Comments.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/comments/import"
      }
      },"app.dataSources.defaultDS.entities.POC.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/p-o-c"
      }
      },"app.dataSources.defaultDS.entities.POC.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/p-o-c"
      }
      },"app.dataSources.defaultDS.entities.POC.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/p-o-c"
      }
      },"app.dataSources.defaultDS.entities.POC.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/p-o-c"
      }
      },"app.dataSources.defaultDS.entities.POC.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/p-o-c/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.POC.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/p-o-c/by"
      }
      },"app.dataSources.defaultDS.entities.POC.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/p-o-c/by"
      }
      },"app.dataSources.defaultDS.entities.POC.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/p-o-c/batch"
      }
      },"app.dataSources.defaultDS.entities.POC.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/p-o-c/batch"
      }
      },"app.dataSources.defaultDS.entities.POC.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/p-o-c/batch"
      }
      },"app.dataSources.defaultDS.entities.POC.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/p-o-c/import"
      }
      },"app.dataSources.defaultDS.entities.Project.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/project"
      }
      },"app.dataSources.defaultDS.entities.Project.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/project"
      }
      },"app.dataSources.defaultDS.entities.Project.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/project"
      }
      },"app.dataSources.defaultDS.entities.Project.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/project"
      }
      },"app.dataSources.defaultDS.entities.Project.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/project/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.Project.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/project/by"
      }
      },"app.dataSources.defaultDS.entities.Project.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/project/by"
      }
      },"app.dataSources.defaultDS.entities.Project.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/project/batch"
      }
      },"app.dataSources.defaultDS.entities.Project.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/project/batch"
      }
      },"app.dataSources.defaultDS.entities.Project.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/project/batch"
      }
      },"app.dataSources.defaultDS.entities.Project.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/project/import"
      }
      },"app.dataSources.defaultDS.entities.Customer.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/customer"
      }
      },"app.dataSources.defaultDS.entities.Customer.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/customer"
      }
      },"app.dataSources.defaultDS.entities.Customer.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/customer"
      }
      },"app.dataSources.defaultDS.entities.Customer.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/customer"
      }
      },"app.dataSources.defaultDS.entities.Customer.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/customer/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.Customer.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/customer/by"
      }
      },"app.dataSources.defaultDS.entities.Customer.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/customer/by"
      }
      },"app.dataSources.defaultDS.entities.Customer.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/customer/batch"
      }
      },"app.dataSources.defaultDS.entities.Customer.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/customer/batch"
      }
      },"app.dataSources.defaultDS.entities.Customer.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/customer/batch"
      }
      },"app.dataSources.defaultDS.entities.Customer.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/customer/import"
      }
      },"app.dataSources.defaultDS.entities.UserGroupMapping.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/user-group-mapping"
      }
      },"app.dataSources.defaultDS.entities.UserGroupMapping.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/user-group-mapping"
      }
      },"app.dataSources.defaultDS.entities.UserGroupMapping.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/user-group-mapping"
      }
      },"app.dataSources.defaultDS.entities.UserGroupMapping.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/user-group-mapping"
      }
      },"app.dataSources.defaultDS.entities.UserGroupMapping.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/user-group-mapping/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.UserGroupMapping.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/user-group-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.UserGroupMapping.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/user-group-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.UserGroupMapping.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/user-group-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.UserGroupMapping.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/user-group-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.UserGroupMapping.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/user-group-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.UserGroupMapping.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/user-group-mapping/import"
      }
      },"app.dataSources.defaultDS.entities.UserGroup.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/user-group"
      }
      },"app.dataSources.defaultDS.entities.UserGroup.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/user-group"
      }
      },"app.dataSources.defaultDS.entities.UserGroup.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/user-group"
      }
      },"app.dataSources.defaultDS.entities.UserGroup.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/user-group"
      }
      },"app.dataSources.defaultDS.entities.UserGroup.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/user-group/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.UserGroup.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/user-group/by"
      }
      },"app.dataSources.defaultDS.entities.UserGroup.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/user-group/by"
      }
      },"app.dataSources.defaultDS.entities.UserGroup.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/user-group/batch"
      }
      },"app.dataSources.defaultDS.entities.UserGroup.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/user-group/batch"
      }
      },"app.dataSources.defaultDS.entities.UserGroup.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/user-group/batch"
      }
      },"app.dataSources.defaultDS.entities.UserGroup.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/user-group/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-logic-view-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-logic-view-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-logic-view-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-logic-view-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-logic-view-mapping/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-logic-view-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-logic-view-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-logic-view-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-logic-view-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-logic-view-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPLogicViewMapping.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-logic-view-mapping/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-user"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-user"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-user"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-user/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-user/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-user/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-user/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPUser.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-role-per-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role-per-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-role-per-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-role-per-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role-per-mapping/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-role-per-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-role-per-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role-per-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-role-per-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-role-per-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role-per-mapping/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-per-res-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-per-res-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-per-res-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-per-res-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-per-res-mapping/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-per-res-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-per-res-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-per-res-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-per-res-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-per-res-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-per-res-mapping/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-user-role-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user-role-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-user-role-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-user-role-mapping"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user-role-mapping/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-user-role-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-user-role-mapping/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user-role-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-user-role-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-user-role-mapping/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-user-role-mapping/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-role"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-role"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-role"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-role/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-role/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-role/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-role/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPRole.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-role/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-permission"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-permission"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-permission"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-permission"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-permission/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-permission/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-permission/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-permission/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-permission/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-permission/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPPermission.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-permission/import"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.get": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "GET","path": "/api/l-c-a-p-resource"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.create": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-resource"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.update": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-resource"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.delete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-resource"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.createOrUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-resource/createOrUpdate"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.updateBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-resource/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.deleteBy": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-resource/by"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.batchCreate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-resource/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.batchUpdate": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "PUT","path": "/api/l-c-a-p-resource/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.batchDelete": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "DELETE","path": "/api/l-c-a-p-resource/batch"
      }
      },"app.dataSources.defaultDS.entities.LCAPResource.logics.import": {
        "config": {
        "serviceType": "entity"
      },"url": {
        "method": "POST","path": "/api/l-c-a-p-resource/import"
      }
      },"app.logics.loadWorkHourStatisticsTableView_mk_1": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadWorkHourStatisticsTableView_mk_1"
      }
      },"app.logics.loadPOCDetailGridView_T5_1": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadPOCDetailGridView_T5_1"
      }
      },"app.logics.loadProjectListSelect_T5_10": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadProjectListSelect_T5_10"
      }
      },"app.logics.loadPOCListTableView_T5_2": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadPOCListTableView_T5_2"
      }
      },"app.logics.loadProjectListSelect_T5_7": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadProjectListSelect_T5_7"
      }
      },"app.logics.loadTaskListSelect_Hm_12": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadTaskListSelect_Hm_12"
      }
      },"app.logics.loadTaskListTableView_Hm_1": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadTaskListTableView_Hm_1"
      }
      },"app.logics.loadBugTableView_VN_1": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadBugTableView_VN_1"
      }
      },"app.logics.loadCustomerListTableView_T5_1": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadCustomerListTableView_T5_1"
      }
      },"app.logics.LCAPGetUserList": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetUserList"
      }
      },"app.logics.LCAPGetUserByUserId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetUserByUserId"
      }
      },"app.logics.LCAPGetAllUsers": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetAllUsers"
      }
      },"app.logics.LCAPGetUserTableView": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetUserTableView"
      }
      },"app.logics.LCAPIsExistRoleId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPIsExistRoleId"
      }
      },"app.logics.LCAPLoadPermissionResourceListView": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPLoadPermissionResourceListView"
      }
      },"app.logics.LCAPGetMappingByPermissionIdAndResourceId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetMappingByPermissionIdAndResourceId"
      }
      },"app.logics.LCAPGetScopeResourceByRoleId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetScopeResourceByRoleId"
      }
      },"app.logics.loadAddRoleUserTableView": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadAddRoleUserTableView"
      }
      },"app.logics.LCAPGetRoleBindUserList": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetRoleBindUserList"
      }
      },"app.logics.LCAPLoadRoleManagementTableView": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPLoadRoleManagementTableView"
      }
      },"app.logics.LCAPLoadUserRoleMappingTableView": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPLoadUserRoleMappingTableView"
      }
      },"app.logics.LCAPGetRolePermissionList": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetRolePermissionList"
      }
      },"app.logics.LCAPGetUserResources": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetUserResources"
      }
      },"app.logics.LCAPGetPermissionByRoleId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetPermissionByRoleId"
      }
      },"app.logics.LCAPGetMappingIdByRoleIdAndUserId": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPGetMappingIdByRoleIdAndUserId"
      }
      },"app.logics.LCAPIsAlreadBindUserIdList": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPIsAlreadBindUserIdList"
      }
      },"app.logics.LCAPLoadResourceTableView": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPLoadResourceTableView"
      }
      },"app.logics.LCAPIsRoleNameRepeated": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LCAPIsRoleNameRepeated"
      }
      },"app.logics.loadUserGroupTableView_mk_1": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadUserGroupTableView_mk_1"
      }
      },"app.logics.getUserByUsername": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/getUserByUsername"
      }
      },"app.logics.loadProjectListTableView_T5_2": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadProjectListTableView_T5_2"
      }
      },"app.logics.LoadUser": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/LoadUser"
      }
      },"app.logics.loadTaskListSelect_Hm_11": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcplogics/loadTaskListSelect_Hm_11"
      }
      },"extensions.lcap_auth.logics.getUser": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_auth/getUser"
      }
      },"extensions.lcap_auth.logics.createToken": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_auth/createToken"
      }
      },"extensions.lcap_auth.logics.removeToken": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_auth/removeToken"
      }
      },"extensions.lcap_permission.logics.uploadResource": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_permission/uploadResource"
      }
      },"extensions.lcap_permission.logics.checkPermission": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_permission/checkPermission"
      }
      },"extensions.lcap_permission.logics.getUserResources": {
        "config": {
        "serviceType": "micro"
      },"url": {
        "method": "POST","path": "/api/lcap_permission/getUserResources"
      }
      }
      },"servicesMap": {
        "_custom": {
        "app.interfaces.LCAPGetResourceResult": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "GET","path": "/rest/getUserResources"
      }
      },"connector.qiweionlineconnector.interfaces.getAccessToken": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "GET","path": "https://qyapi.weixin.qq.com/cgi-bin/gettoken"
      }
      },"connector.qiweionlineconnector.interfaces.appSendMessage": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://qyapi.weixin.qq.com/cgi-bin/message/send"
      }
      },"connector.qiweionlineconnector.interfaces.appSendNewsMessage": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://qyapi.weixin.qq.com/cgi-bin/message/send"
      }
      },"connector.qiweionlineconnector.interfaces.getDepartmentList": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "GET","path": "https://qyapi.weixin.qq.com/cgi-bin/department/list"
      }
      },"connector.qiweionlineconnector.interfaces.getUserDetail": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "GET","path": "https://qyapi.weixin.qq.com/cgi-bin/user/list"
      }
      },"connector.qiweionlineconnector.interfaces.getDepartDetail": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "GET","path": "https://qyapi.weixin.qq.com/cgi-bin/department/get"
      }
      },"connector.qiweionlineconnector.interfaces.getDepartUserList": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "GET","path": "https://qyapi.weixin.qq.com/cgi-bin/user/simplelist"
      }
      },"connector.dingding.interfaces.getUserIdList1": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://oapi.dingtalk.com/topapi/user/listid"
      }
      },"connector.dingding.interfaces.getUser": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://oapi.dingtalk.com/topapi/v2/user/get"
      }
      },"connector.dingding.interfaces.getParentsByDept": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://oapi.dingtalk.com/topapi/v2/department/listparentbydept"
      }
      },"connector.dingding.interfaces.getListParentByDept": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://oapi.dingtalk.com/topapi/v2/department/listparentbydept"
      }
      },"connector.dingding.interfaces.getDepartmentSubIdList": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "GET","path": "https://oapi.dingtalk.com/topapi/v2/department/listsub"
      }
      },"connector.dingding.interfaces.getUserIdList": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://oapi.dingtalk.com/topapi/user/listid"
      }
      },"connector.dingding.interfaces.getDepartment": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "POST","path": "https://oapi.dingtalk.com/topapi/v2/department/listsub"
      }
      },"connector.dingding.interfaces.getToken": {
        "config": {
        "serviceType": "external"
      },"url": {
        "method": "GET","path": "https://oapi.dingtalk.com/gettoken"
      }
      }
      }
      }
      }
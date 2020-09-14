$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/dat_lenh/dat_lenh.feature");
formatter.feature({
  "name": "Đặt lệnh",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Khách hàng truy cập thành công iboard web",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Khách hàng truy cập iboard web",
  "keyword": "Given "
});
formatter.match({
  "location": "tạo_danh_mục_steps_defs.kháchHàngTruyCậpIboardWeb()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Đặt lệnh thành công trong trường hợp mode là Normal Order và có Xác nhận",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DL01"
    }
  ]
});
formatter.step({
  "name": "double click vào gía bất kì của mã chứng khoá \"BID\"",
  "keyword": "Given "
});
formatter.match({
  "location": "dat_lenh_steps_defs.doubleClickVàoGíaBấtKìCủaMãChứngKhoá(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "người dùng được chuyển hướng đến trang Login",
  "keyword": "Then "
});
formatter.match({
  "location": "dat_lenh_steps_defs.ngườiDùngĐượcChuyểnHướngĐếnTrangLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nhập tên đăng nhập \"username\"",
  "keyword": "When "
});
formatter.match({
  "location": "dat_lenh_steps_defs.nhậpTênĐăngNhập(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nhập mật khẩu \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "dat_lenh_steps_defs.nhậpMậtKhẩu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Đăng nhập",
  "keyword": "And "
});
formatter.match({
  "location": "dat_lenh_steps_defs.clickĐăngNhập()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Để sau",
  "keyword": "And "
});
formatter.match({
  "location": "dat_lenh_steps_defs.clickĐểSau()"
});
formatter.result({
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Phuongs-Mac.local\u0027, ip: \u0027fe80:0:0:0:4ad:7742:2374:4710%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002714.0.2\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:332)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\n\tat java.base/java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:647)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\tat demo.pages.IBoard_upcom_page.clickLater(IBoard_upcom_page.java:112)\n\tat demo.steps.dat_lenh.userSteps.clickLater(userSteps.java:34)\n\tat demo.steps.dat_lenh.userSteps$$EnhancerByCGLIB$$d065dd2d.CGLIB$clickLater$10(\u003cgenerated\u003e)\n\tat demo.steps.dat_lenh.userSteps$$EnhancerByCGLIB$$d065dd2d$$FastClassByCGLIB$$1cc53e08.invoke(\u003cgenerated\u003e)\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:372)\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:157)\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\n\tat demo.steps.dat_lenh.userSteps$$EnhancerByCGLIB$$d065dd2d.clickLater(\u003cgenerated\u003e)\n\tat demo.steps.dat_lenh_steps_defs.clickĐểSau(dat_lenh_steps_defs.java:68)\n\tat ✽.click Để sau(src/test/resources/features/dat_lenh/dat_lenh.feature:13)\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Phuongs-Mac.local\u0027, ip: \u0027fe80:0:0:0:4ad:7742:2374:4710%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002714.0.2\u0027\nDriver info: driver.version: RemoteWebDriver\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:279)\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:44)\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\t\tat demo.pages.IBoard_upcom_page.clickLater(IBoard_upcom_page.java:112)\n\t\tat demo.steps.dat_lenh.userSteps.clickLater(userSteps.java:34)\n\t\tat demo.steps.dat_lenh.userSteps$$EnhancerByCGLIB$$d065dd2d.CGLIB$clickLater$10(\u003cgenerated\u003e)\n\t\tat demo.steps.dat_lenh.userSteps$$EnhancerByCGLIB$$d065dd2d$$FastClassByCGLIB$$1cc53e08.invoke(\u003cgenerated\u003e)\n\t\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\n\t\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\n\t\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\n\t\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:372)\n\t\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:157)\n\t\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\n\t\tat demo.steps.dat_lenh.userSteps$$EnhancerByCGLIB$$d065dd2d.clickLater(\u003cgenerated\u003e)\n\t\tat demo.steps.dat_lenh_steps_defs.clickĐểSau(dat_lenh_steps_defs.java:68)\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\t\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\t\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:31)\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:25)\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\n\t\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\t\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\t\tat cucumber.api.TestStep.run(TestStep.java:83)\n\t\tat cucumber.api.TestCase.run(TestCase.java:58)\n\t\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\t\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\t\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\t\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\t\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:110)\n\t\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\n\t\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:38)\n\t\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:62)\n\t\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\t\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\t\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\t\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\t\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\t\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:33)\n\t\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:94)\n\t\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\t\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:119)\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\t\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\t\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\t\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\t\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\t\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:182)\n\t\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:164)\n\t\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:414)\n\t\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)\n\t\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:48)\n\t\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1130)\n\t\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:630)\n\t\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:56)\n\t\tat java.base/java.lang.Thread.run(Thread.java:832)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:328)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\n\tat java.base/java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:647)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\tat demo.pages.IBoard_upcom_page.clickLater(IBoard_upcom_page.java:112)\n\tat demo.steps.dat_lenh.userSteps.clickLater(userSteps.java:34)\n\tat demo.steps.dat_lenh.userSteps$$EnhancerByCGLIB$$d065dd2d.CGLIB$clickLater$10(\u003cgenerated\u003e)\n\tat demo.steps.dat_lenh.userSteps$$EnhancerByCGLIB$$d065dd2d$$FastClassByCGLIB$$1cc53e08.invoke(\u003cgenerated\u003e)\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:10)\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:20)\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:372)\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:157)\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:68)\n\tat demo.steps.dat_lenh.userSteps$$EnhancerByCGLIB$$d065dd2d.clickLater(\u003cgenerated\u003e)\n\tat demo.steps.dat_lenh_steps_defs.clickĐểSau(dat_lenh_steps_defs.java:68)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:110)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:38)\n\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:62)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:33)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:94)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:119)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:182)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:164)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:414)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:48)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1130)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:630)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:56)\n\tat java.base/java.lang.Thread.run(Thread.java:832)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//button[contains(text(),\u0027sau\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Phuongs-Mac.local\u0027, ip: \u0027fe80:0:0:0:4ad:7742:2374:4710%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002714.0.2\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\n\tat net.serenitybdd.core.pages.WebElementResolverByLocator.resolveForDriver(WebElementResolverByLocator.java:18)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getElement(WebElementFacadeImpl.java:221)\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getWrappedElement(WebElementFacadeImpl.java:1363)\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:204)\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:155)\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:75)\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:84)\n\t... 98 more\n",
  "status": "failed"
});
formatter.step({
  "name": "nhập số lượng \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "dat_lenh_steps_defs.nhậpSốLượng(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "nhập mã pin \"123456789\"",
  "keyword": "And "
});
formatter.match({
  "location": "dat_lenh_steps_defs.nhậpMãPin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Mua",
  "keyword": "When "
});
formatter.match({
  "location": "dat_lenh_steps_defs.clickMua()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Xác nhận",
  "keyword": "And "
});
formatter.match({
  "location": "dat_lenh_steps_defs.clickXácNhận()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "đặt lệnh thành công",
  "keyword": "Then "
});
formatter.match({
  "location": "dat_lenh_steps_defs.đặtLệnhThànhCông()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Khách hàng truy cập thành công iboard web",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Khách hàng truy cập iboard web",
  "keyword": "Given "
});

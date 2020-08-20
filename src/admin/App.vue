<template>
  <div class="app-container">
    <headline
    title="Панель администрирования">
      <user></user>
    </headline>
    <navigation></navigation>
  </div>
</template>

<script>
// import "../styles/main.pcss"; //такой вариант подключения стилей возможен(подключается все но все неи нужно)
import user from "./components/user/user"; //импорт компонента
import headline from "./components/headline/headline"; //импорт компонента
import navigation from "./components/navigation/navigation"; //импорт компонента
export default { //локальная регисрация компонента
  components: {
    headline, user, navigation
  }
}
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import "./app.pcss";
</style>
<style lang="postcss" scoped src='./app.pcss'></style>

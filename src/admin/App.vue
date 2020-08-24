<template>
  <div class="app-container">
    <headline title="Панель администрирования">
      <user></user>
    </headline>

    <navigation></navigation>

    <div class="page-content">
      <div class="container">
        <div class="header">
          <div class="title">Блок "Обо мне"</div>

          <iconed-button
            type="iconed"
            title="Добавить группу"
            v-if="emptyCatIsShow == false"
            @click="emptyCatIsShow = true"
            class="header-round-btn"
          />
        </div>

        <ul class="skills">
          <li class="item" v-if="emptyCatIsShow">
            <category @remove="emptyCatIsShow = false" empty />
          </li>
          <li class="item" v-for="category in categories" :key="category.id">
            <category :title="category.category" :skills="category.skills"></category>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import "../styles/main.pcss"; //такой вариант подключения стилей возможен(подключается все, но все не нужно)
import user from "./components/user/user"; //импорт компонента
import headline from "./components/headline/headline"; //импорт компонента
import navigation from "./components/navigation/navigation"; //импорт компонента
import button from "./components/button"; //импорт компонента
import category from "./components/category"; //импорт компонента

export default {
  //локальная регисрация компонента
  components: {
    headline,
    user,
    navigation,
    iconedButton: button,
    category,
  },
  data() {
    return {
      categories: [],
      emptyCatIsShow: false,
    };
  },
  created() {
    this.categories = require("./data/categories.json");
  },
  methods: {

  },
};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import "./app.pcss";
</style>
<style lang="postcss" scoped src='./app.pcss'></style>
<style lang="postcss" scoped>
@import "../styles/mixins.pcss";
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header {
  display: flex;
  margin-bottom: 40px;
  @include desktopHd {
  }
  @include desktop {
  }
  @include tablets {
    flex-direction: column;
  }
  @include phones {
  }
}
.title {
  margin-right: 60px;
  font-size: 21px;
  font-weight: bold;
  color: $text-color-5;

  @include desktopHd {
  }
  @include desktop {
  }
  @include tablets {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 25px;
  }
  @include phones {
  }
}
.page-content {
  flex: 1;
  padding: 60px 0 20px 0;
  background: url("../images/bg/bg-admin.jpg") 50% 50% / cover no-repeat;

  @include desktopHd {
  }
  @include desktop {
  }
  @include tablets {
    padding: 30px 0 40px 0;
  }
  @include phones {
  }
}
.skills {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: calc(100% / 4 - 30px);
  margin-right: 30px;
  margin-bottom: 30px;

  @include desktopHd {
    width: calc(100% / 3 - 30px);
  }
  @include desktop {
    width: calc(100% / 2 - 30px);
  }
  @include tablets {
    margin-right: 0px;
    width: calc(100% / 1 - 0px);
  }
  @include phones {
  }
}

</style>

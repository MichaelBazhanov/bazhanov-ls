<template>
    <headline
    title="Панель администрирования">
      <test
        title="Бажанов Михаил"
        alt="Бажанов Михаил"
        src="https://picsum.photos/300/300"
      ></test>
    </headline>
</template>

<script>
import "../styles/main.pcss";
import test from "./components/_first/test";
import headline from "./components/headline/headline";
export default {
  components: {
    headline, test
  }
}
</script>
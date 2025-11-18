// src/components/TestAnimal.vue
<script setup lang="ts">
import { defineComponent } from 'vue';

type Gender = "male" | "female" | "other";
type Person = { name: string; age: number; info: { gender: Gender } };
type Pig = { name: string; age: number; hobby: { eat: boolean } };
type Animal = Person & Pig;

const animal: Animal = {
  name: 'liren',
  age: 18,
  info: { gender: "male" },
  hobby: { eat: true }
};

    console.log(animal); // 打开浏览器控制台就能看到输出
</script>

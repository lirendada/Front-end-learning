<script setup lang="ts">

    type Person<T> = {
        name: string;
        age: number;
        info: T;
    }

    const p1: Person<{hobby: string[]}> = {
        name: 'John',
        age: 30,
        info: {
            hobby: ['reading', 'hiking']
        }
    }
    console.log(p1);
    
</script>
<template>
    <div>
        <h2>{{ nombredeporte }}</h2>
    </div>
</template>

<script>
export default {
    name: "HijoDeporte",
    props: ["nombredeporte"],
    mounted(){
        console.log(this.nombredeporte)
    }
};
</script>

<style lang="scss" scoped></style>

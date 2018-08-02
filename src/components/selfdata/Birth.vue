<template>
    <div id="bitrh">


        <div id="bitrh-wrap" @click="goBack">

            <div id="box" >
                <div id="box-wrap">


                </div>
            </div>
        </div>



    </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    goBack() {
      history.back();
    }
  }
};
</script>

<style scoped>
#bitrh {
  position: relative;
  width: 100%;
  height: 13.34rem;
  z-index: 20;
}
#bitrh-wrap{
    width: 100%;
    height: 12.06rem;
    position: absolute;
    left: 0;
    top: 1.28rem;
    background: rgba(0, 0, 0, 0.3);

}
#box{
    width: 5.9rem;
    height: 3.06rem;
    border-radius: 4px;
    display: block;
    position: relative;
    top: 5.12rem;
    left: .8rem;
    background: #fff;
}

</style>
<template>
  <div class="nav-list">
    <div class="home-platformData">
      <div>
        <span>成立时间(天)</span>
        <i>{{establishCount}}</i>
      </div>
      <div>
        <span>累计投资(万元)</span>
        <i>{{investmentAccount}}</i>
      </div>
    </div>
    <div class="home-nav">
      <ul>
        <li>
          <img src="data:image/png;base64,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" alt="">
          <span>新手攻略</span>
        </li>
        <li>
          <img src="data:image/png;base64,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" alt="">
          <span>安全保障</span>
        </li>
        <li>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAAGyfyt9AAAAAXNSR0IArs4c6QAABCVJREFUaAXtWE1IVFEUnhkHJ0ohXAjWohBcRKALfwYGFSkQrKCVtHMVtCgsauEiMKxNBP1Ci6h9umxhgVSLhIFRByySFoLUxlZK4CQMzk/feb5zu7659817z3njOLwHd869557z3fP37tx3QyGnT3d39zeS7enpeVqiU7h2pkiNJiBYDHOnRJIZJMV9mUbkgbWvhU2n08acVaF0LK8b5eld07dDkfQuJyxLsZA3qjRZa25fX1/X0NDQEVoLgV4z6TSvrUTjSR1VRoazxUqRVz+E3B7v9wxYWkNtk6fRCXlS0oE557NfTBHuj6QNeldGUZpHCYTieLFYHCFh0Jis5LqACNAoR7k07HLEqynN40kd9WSeDqyEzxGlCU/m1biS2DZkR0uiYGGIl8vCN4YAmkDnIQ3C4XCupaXl+Nzc3F9j0vxBXT5Gmd1mnlwozCtLrRbH4/FO8PKkCNqPlpVBEolEK3jrMs9RH0orsHjMKgx+EW1ZxYd3+iiRolWpUmPGFom1A7a+lFZZeSO1zvHYU4Gz8r4ou7ofEBVG1TwKFvKcuqqFzrOFNauo35dgsvw+YPd+srS0dEf2ZHh4+Njm5uYf7G/GDgOZCcg8kmXK9rGZTstHE/TX0IwjCynTqZEMoRMkg8mGMY+pthhg5WBjY+NrFoSl7eANAKyfeFtbW9vRaLRrYWHhK8vYUe1CCMNMNpu9YVFuwni+t7f3Juj3VCplfHRYZNwN6X9FFQrwllV8hHUM/BXdKkYxqBR1Cl744u/dz4UYu/7++LRV5yUXdjpVW6i6VSe7zFUi89z2VRhVC12wkNt0CfkgdCIUbjtB6NxGTMgr/49UW4jQqPWO7QGynPHwPI7T0i0cZDpA6Ws9CfpmcXFRe0hRYeJUdRYYVzGXAG0AxiroM5w1Uip5O54nh3A4PZfP5z+RE1h4CufId4VCoQntCnjXTaO+gI7AqG2VAQjGUch+gMygifMyEonMoGVyudxl8O4RDp7zOKN+VmGoeJ4cgjF0N9IWi8VOJ5PJX1ZgRLwdzs2DfwLtBZyic614oP8cg3G0dTgwgIwad75CAB3cwZzCOfknur+hTziOHuVLVE4T0dtA9Np2dnZaIVvikGngSTg2Ccem4MBIc3NzJ+Hiy4AO6x1okzD0AfFUj4lNN10bqnkdz+uGalyZwdi3o6OjDTpwOHYfBl3EfEcmk1mlRn3i2TlDmIRt4orrOd06Ml+UHL44ZhH1C/LkYekjQO/xjUiBC4mSY2cQOeHkYXAI5QzT/ydCOLRf48vdGpbDd3KrWA6D5r2+Q06wD0QmcOhAwu5i0brLkNjRDvO2jQTOYne+5CiRtC1ScyTso5BTO+qu5AKHfKyqikAHGapIGH0ECTLkY3ArAh1kqCJh9BGk7jLk+AOvFo4/Pia2dqH/AfJoh1ERrgLRAAAAAElFTkSuQmCC" alt="">
          <span>我的福利</span>
        </li>
        <li>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAAGyfyt9AAAAAXNSR0IArs4c6QAAAl9JREFUaAXtWDtOAzEQ9YQEhEBQRjlCoEy4BJTQcAJyHwqSG9BQhjsgJQ0SoeIAUCLRgMRiR+swO157Zz/YKHEaez2fN/PG9m5GCM7v+6qfUL2WXgAQj3r+xyMo/4PBwAhmPp8vZW58nIby8puCgBe3aYq7sqDaVoE1ZOpBqOhwhFhB52yFwcp03qYLrclzIVuVkPwZ0ZT4z5pKTXcyOnp1WfvLyUDi1GkZus7JlQeWGUhYaJtHo5QZ/pGWBvpmyhy4svWylUSvaxD1bJx2LKT3CwC8wXjR1Y5cIw260n5wAdhk3oAM6nBEAK0LGD/d6bVkdHyu57VGymsdZ9SXN+oiUOWyGbuOFrGyZ5dhkyBN+nLFHE72P29v9veBJI7WKB7YyrtpA6mDTrsPna2TypylhsZdhx2S7Zw5c1iPM9/AGnFo4ehE6jgs5epE6nJp4SyuH3XGXUdfwRxaSus0CUJ9eatRGOpKc13CwPoyGw6H0yRJTkv48qYquwP3s9nsLA/QKJFW0sngtoOWqRG3ICQr2VYuqOdlS6KHbZqYq82sY8vzZ00oT9m2pqLPyBIhSRTeDg7GDgKKA2h6HhNqmtGm/cUK5TEKAj7kLTCR42ee3OdarQrJFugN9Lq7MFnsy67xSI47sH1wKG+4W59JYKzK1zb5t7nyCdcP7/LhcrXgeVKrQp5jZcHFhFg0BVSKFQpIPgs6VohFU0ClWKGA5LOg165ChZ8+8i9v8A9OVmlSpcKEpN5eGYcedJ0EFyYkmyRfHoJkQ8gd49TdnDOkel+qXUR7oE56/Amn/qACI/0ANwiLxsbF8xUAAAAASUVORK5CYII=" alt="">
          <span>信息披露</span>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import numeral from 'numeral'
  export default {
    props: ['platformData'],
    computed: {
      investmentAccount() {
        return numeral(parseInt(this.platformData.investmentAccount / 10000)).format(0, 0)
      },
      establishCount() {
        return numeral(parseInt(this.platformData.establishCount)).format(0, 0)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .nav-list
    .home-platformData
      padding 0.18rem 0 0.18rem 0
      display flex
      div
        flex 1
        display flex
        font-size .13rem
        color #999
        line-height 1em
        padding-left .15rem
        i
          padding-left 0.13rem
          color #333
          font-weight 700
    .home-nav
      padding 0.19rem 0.15rem
      ul
        display flex
        li
          flex 1
          display flex
          flex-direction column
          justify-content center
          align-items center
          img
            width .26rem
            height .26rem
          span
            padding-top .08rem
            font-size .12rem
            color #666
</style>
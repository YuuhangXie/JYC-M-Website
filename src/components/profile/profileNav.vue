<template>
  <div class="profie-nav">
    <div class="first-line" style="display: flex">
      <div class="profile-item">
        <em class="item-bg1"></em>
        <span>回款日历</span>
      </div>

      <div class="profile-item">
        <em class="item-bg2"></em>
        <span>我的福利</span>
      </div>

      <div class="profile-item">
        <em class="item-bg3"></em>
        <span>我的邀请</span>
      </div>

      <div class="profile-item">
        <em class="item-bg4"></em>
        <span>VIP顾问</span>
      </div>
    </div>

    <div class="second-line" style="display: flex">
      <div class="profile-item">
        <em class="item-bg5"></em>
        <span>收支明细</span>
      </div>

      <div class="profile-item">
        <em class="item-bg6"></em>
        <span>债权转让</span>
      </div>

      <div class="profile-item">
        <em class="item-bg7"></em>
        <span>个人中心</span>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .profie-nav
    display flex
    flex-direction column
    .profile-item
      display flex
      flex-direction column
      justify-content center
      align-items center
      em
        width .2rem
        height .2rem
        background-size contain !important
        margin .25rem .369rem .155rem .369rem
      span
        font-size .13rem
        color #666
        margin-bottom .2rem
      .item-bg1
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAqJJREFUWAntVU1oE0EUfm/zVxUrChYPgmDFHPRUC0rSaBdPHjzmJohIbXvz7KmePHnwUNIK1pMXb6LYi5jYxnoRIYIXvVoQMaHYVux2Z59vVphMYnaTbhayyC4k+82b97795ps3uwge18Tq0klH7Dzj6RGDEjer5q0XHqmBwoWVUl4IeIKIO4aRKK5enPrYicjoFJQxEtZtIDjLvxEHxT2vvKBxIfAu154gotOOEHe8eDwFcsFhVUTYxCrYJ0CNX8dttH4C21IHM4y8wGS+XPqte0OI5trkzDs9puN8pbTJfZnSY3vBKRg6VjFvbHSqyb1dHEXL+aTPJQkgowcMgkPumHCbj4oLEWhLguLa033rVuMAx9GdCPBnp6xhLttgzu2/7C4JPwsgaSeGbXBa9bjTrX/jcmgk4CEgNhBQsJz7MvbNro8BBRcnOXAXxuSdjMQD5reYf9swYF7GhCPOybt+Ya5c0hbCUwjf02ScqZjTP658eZmBeiOzfOHaT1mUKy+8YurLOsGeMeKHNGXPV0zTzlcfHTwyZIvn49O/rr5f3F/fcmq8aad0zn8F8iyvqoZJuF4tzNRkcmFl6ajjWPP8zirqxUExIixn0jD1Oje7Ljnc3tt1HhNBoZ2zo0CVhPiVHdvkcZZXFu6JRyQk+sx28DmgUfXMNpBsG7cOiY63BkIccS9zb2XZAF/ScF3xfVSwyVhgMN+aVbGDTS+CIf9TDPCGLa7o1A7AJI8v6THGYecpel+BUlzVnJ1T2QwmyqU5FtkiMOw8/XnMHe0rFtjv/vh/i8Nv/l4Pk1pXN4EqcVAg7sF+nY+8g74val59r00ddp4y3lcg2xt/SZRVHiDyPRh5gd1e1GE3f698asO7CVSJgwKR3+JYYL+tETv43zv4B7UI/ANbha1NAAAAAElFTkSuQmCC")
      .item-bg2
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAUxJREFUWAntljFuwkAQRXcNDXCEnCkNFICQWC6QdMkJaFCqcALbVFCkQ6KJcqdI4Ibs8gdlIyPWBnsQSjHb2J6ZP/5+npWtVI3lVqvGdjyOd5NJ95IcNU87Y2aX6oryuihRFCdz2Xq9cM4NId6rKOq34/gjVE/mnLVzyqH2rZ2mr6G6slhUlgzlYC4mc5RzSjWVtcsQyby539qXrTHTUM+yWGWDILHRWlvf9M+kMT0fwyt99uR8DLoMN/vy19ceoau+MmNGoJjAXMOr0WivtB7g+gG5dx+nI5nDQz22kuQzH7/mvJZBalxg8idvmuo45o567Eb0/L+r8gze+1HEIJe4EBSCXAJcvcwgl6DouQTOfhbqfps7aXrS61Z9ZJNwX7EQFIJcAly9zKAQ5BLg6mUGhSCXAFcvMygEuQS4eplBLsFmoMF3IFYndJM+B3NUax55k5qWAAAAAElFTkSuQmCC")
      .item-bg3
        background url("data:image/png;base64,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")
      .item-bg4
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAAAXNSR0IArs4c6QAABUdJREFUWAnNWF2IVVUU/tadS1pKmflSqZBkUFn00kBU1NDPgE3h6L1X8CFqtF4CDdIKKYSoyCzR6DEro6d772RWM9IfU2RMj1FQUNBDI/mQmQU2GuruW+d07jl73332nDteZ1xw5uz1rZ/93XX2PmufEYTEGEEDr9BlA6+LQ65dsP3NHG+gis0QMXn5JM8Q4U0zhDPYE/TptlEwhKq8lZc2n/CYmYsj+BkGi/OCzwkuOIRFWI4+OeHLX/KBEXYEG2ecrE6sBdK5c8Rf4Y/MpZjELwxekBN3bmHBMVyIZRiQP92J/BWexNZZI6sMtVDKwSPtFa6bpRD8xKA5Hv+ZgwQnyeEa1OTX7KTtFRY8N+tklaEWTLk4Yle4bm6g/Vte7T/ECZwh9QznuYlV/j6ZzyX2Eg0ulvjOxl25KKeWpBVumDv5GMZalvNpIOhjM/lCKaXVNNh+PnG0uGS4xYQbpkqHXsvJViap/mZDXdQEh7nB/glk7EXdVNRewpgp8/5CwHmctsVc+Fcy6SqOvS0zEB8ynSCDCh/3FejBUjrqXH4RvKhcS/gdj3DtLvd7ERWe1mpyNLJXZT/va4mdyvUvaohzrEVFhqOQ1fIHyb+aG64cybXEyR/LdYoNyyx7TT5gzMO8co+Alr9P0VjNobmyYnB1Vm0bk2uJoXPbDFnAYBuGzc1ZiFV5l3G5BxTL16dorObISt30MuczWahtTK4lPoatU1RrPs/EB9A011sJavI64561sCKKxmhsVuLcBwjNz8LWWJ8KuXLJS52GLZbRVQwuI+lPuFOvskxVeZ76TgsLKzu5wTQmFc2puYGFKegdbVGu2caxnb/hSa9rAgqPnCXchjVyOIGgn1FNftoYfimERPAm3wcbrM+fYXM5yR5krL1P3DyCl/lDn1I4fg/rqIKn+Yj36jBXNPHpqNJpNfT7y+BRxsS73R88HPlkv9XqZmGUa2qyeyNu/+dNCWuyRdHH5oh/zha6gj9slMsjXW81OU3rOuL6aG2JsXVct+oTi8ZqDmBFAuXcRyJOmR+aLokk4kNzEQ/Pn1G9JYG8d8HnmIf7sFJOtuwfm3n4C59mYsdxCe5Bvxxv+YyaOTiOEVb8rhbmH4zzq+Nu3C9WB2wnrMH6uICveF2nakD20Va1qrfPLGBb+TKKKeMODMqxVnzd9HDc4DXYwvyDHwjfzrxxw8r4pEsiA0aOPegnNJGFPeNBPto90cZLjErwAtwbXVmyujnVd2qyE2zT/T6yOoW/wsnk75lrWa2DVNNNltjs+25O8LgNOVrd7CKyyUFd9SjKfAutlh9dQ6L7K5xYNbCH6zR8klLvTWiYbUlY2z22hcnqHDpXgKzmDVc4mblpVnKT7OdVTiDvvUTiFXnNsjXNRr5rd1uYq8QHoQf4rtVuF5RwhZPQioyS7BB/XvjAY7CLG1bfybHoWLGQaE7NXYCspilW4WTChnmCyfWfg2ERfBc5GNwYdqRV+M+/quQfK50EnRHW4IbZQdKbnTzTVXdws4aPA07mzgnHZ4e3SfpBJ1dnquAdttyHrLNFgQzF1nA2UdzC1xPS1jpdGWXLXd8pWZ2sc8Ia1Sen2DarHOV/g6mfX7TlVqMcfnsQnR5hTRn3+AGOcl/ynpnVd8A9H3j8cqHO17Cb6n2zBP/ia8JLXJOjT7Bd34pVMlW7d8JsdfoVTvIogXJ07mg7qCQuvGvL7T9bsprv7AlrlridDvCdah0F1RRhBVpu5FvgT3cI60Q1GSe5Kq/0fxY6VmyNfFOASyGX7hHW6eIWXiPJQ9FlUIuwQlSKOf0HVTZXmDSYwYYAAAAASUVORK5CYII=")
      .item-bg5
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAqCAYAAADbCvnoAAAAAXNSR0IArs4c6QAAAVZJREFUWAntlT1Ow0AQhd9GNERKkYL0dDlBSs6QhhQcAYkgbgIV4gqJg+gpkiriFtyABtFEkOENERLBRLP4J95iVrKl1Xh3vn3v2Q6YiKDacYtROP/aMpMrrPHA+XNsi1bsg4WeW6OPgCceehC7vl4gpRD0CDVHJsMYqPqBNlBtWjcj1NiC2g/QhqJFqBvadw2RnX13FqyTlKhfYkq1JnL41x5NACmH5mmBe+n9hmoKSDkGeOcbmEn/J1STQMpxzFwtMZOTb6imgZSjiw88MlNnOjnQW41jxb3fIve/I9RRvUCjcEEYvaJHCpZtwQbKVO3PNeCVHV62uvxjUr1lgg7761VoJGeZA1k+5jIkp9aSYvUwjVvnllk6JadQLkOxXlsnLVpPTiEHsqzMZajsd6hsBt0yy7LkFMplqGwGLAWsenIKOZBbZilg1T1DrpClgFX3DFkKfQIEjz28C5VlzwAAAABJRU5ErkJggg==")
      .item-bg6
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAnpJREFUWAntVztvFDEQ/rzr3dxdAQokBSAFoTsuAlEg8ahoaXiIR0EkIhQafgM9v4E/ABIJNDQgBBUNBQUlIAVdQwoaIGm4zeVud83Yki+b2/feXliJs7SyPePxfPt5bI+Zs9bsoqJFCOZwIdCoKD4wJmBUFZzGNQWomShaTxksypy2+08YNGuoXX0H3roLmHX986XU5TDouzAONGFfeIT6zQ+wzj4EaxytEEDhDsEw+yCsUw9Qu/4e9qXHMObODXVFGqy72hRFDEdtzIUr4O0VmPNhQP7mZwzWn8DbeA34g1HT2D5jcEoDqL2w2dOwJNDj18DMGS1Wtdj+hUHnGdzOKtD7vUcX1ZkIwKEje5Y2zRL4yWUYjSNDsWwIr6/YlKyKrS97dMFOJoD1pfWgTfE2M+jyZyF753mbEPshuRRIgDxSExAywwz09r9ZzjEzQdypDDovL07QPfETs7zaaSpA7Gzqsf+krvwSTwGOGxfpMTgzRz6iz6lxnSv7lBhPBkiHa+P2x1JwxE3irLXiVEpe+RhMZjDm3wQ9ptPOrxjT3OJkgHSIbr+9AWuRspMFmZ3YyoG6U5kJv/tDZSZu5wXQ38rtPItB9nSrdhhWa1ml9awuN85uEd4OvO+vMPj2lLKTr7uKMVuZspmQD8NSbEpWjUNnQmrv5ye4BNTbeBPS5RUUAxjwYsyfB1+8D/PYZYxmPWm7MzBNbDNTuhVrTQqf2OrTJx9IvH0PvHkH8k2iCqPwDrxVkuZJ0mWPwaRZtI6enPzELWJ1BT3aXPB6WlOoHnuJC3nNYSQBVv6gngLMsaKRQ6cMRtKSQ1h5Bjld/H9y/NC+DqWsyfkL0RemuwQLHdsAAAAASUVORK5CYII=")
      .item-bg7
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAA35JREFUWAntmE1IVUEYht/RkoykIluoVFBQtAoqqHCTQSFkCKURtGgRbSJyUVgUterPfqCkUIi2EVdbiWC1sIViUUa0r8gwIS2LSk3N6f089+b985xvzr0KgQNzzzkz7/d+j3PmHGeOQTaKtQYPsQkTWEO7kqhlL3LwFvvQDWNspmlMRgYRWwKDWlhU0ad4Gq9P1DRTcxX7Te80msDmcKARm8vkZ+h+mgALA7OIwGCIv1eov0TgP6qYOJE7aMQuYvwD1t1xPi6nrRQfIOxPl6AcFzFe2vnUt7GGhZR0EtsW9ZJrVXEDfY96upaqnP1FpXiHW/6SxF79rW+y2zm/2hPDM7wyKEO1eapx0Y+oPATZLg6eOtBmu4WM27LNOenpeQda60AnsCfQKaxA6a0DBXaF5VDEqbx1oAarFAnDSZTewaDtdh6f9sJwFIoo8ZYcASUYNMBgtrqDQcvMOGH6ZxCoH14O3xTBoF54j69LZp0fNOFa0Mcas5CaJ5o4HWgOWjRmoTRKbx1olXlOiK5QIP5BXfC8/VXs1YGKjbdQDjR0Ejh46kG9VU6DE4i/uEG7chIbPaioV6OGv51ymmHpjHqpbdxAN5sxOpezynYibJHYcnheag83ULH19jqVnLPnWYfVmUQrMUCl635JcriDemTLeZCqj7fIo172/StZnYt+KyLWLbaQ41LLs2Os+dIkBgUBS4ohbo7Hpz5BjDHoHhc6Fziy6n2+DjRiF9P8JJlqmKBAAGNFhrRjB5f/y2Iticcvv4H1j7hY4DGpjNCzEbm4jL3mc1JfyqU/qOzhDY4TTiCXpkRHG9YR/fVOYEFuquIg/1Xc70ltj2v5xRz1vD/XUGEG49oTTtODRmw+g48S8BTVMhcDy4m1wPUNibLWPqCiI7HN5+o7c97gTL6JSvMjWZcIGrF5fDyOEPAsa1Gy2O9apkDR5KydUn0dBYadP95ggMB1zH+Hc/jfW8UDlRV2Pw5RcI6CGdt2RLYC1Sum/pDYWdNHvvWexa6iR4M+8lzkF8K7BB71ntcBHGZ3IyFDFxnRdGUiXaOmTe6oxW3CyreuOg/U8DIDyI1LgG4+TOlKMReIfSPpepRtlmws0w2E0mX2ZAGv6uyCTM7D5LmoTPHfjOgcqPKOqmVzI6oeKqXQe+ot3lDv9Kk63v/VNy73muJbsnhu8CKLbjNv9Rfv77jmTJ4aGAAAAABJRU5ErkJggg==")
</style>
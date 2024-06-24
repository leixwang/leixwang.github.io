# totp

[[toc]]

## 什么是 totp

TOTP（Time-based One-Time Password Algorithm）是基于时间的一次性密码算法，它通过计算一个共享密钥和当前时间戳，生成一个6位数的验证码。

TOTP 算法的特点是：

- 共享密钥：TOTP 算法的共享密钥是用户自己生成的，用户可以选择自己喜欢的任意密码，并把它保存在一个安全的地方。
- 时间戳：TOTP 算法使用当前时间戳作为输入，生成验证码。
- 验证码：TOTP 算法生成的验证码是一个6位数，它是根据共享密钥和当前时间戳计算出来的。


## 如何使用 TOTP

下面的代码已经验证过了 6位code码, 30秒种过期, 可以生成二维码, 扫描后用 app 上的软件使用, 获取的 totp code 与实现算出的 totp code 的一致.


::: details 代码
<<< @/code/golang/totp/main.go
:::



# Front-end-engineers-learning-process
从一个切图仔成长为一个前端工程师的心酸历程

### 首先学会使用github
##### 一、建立仓库
  New repository
##### 二、安装客户端和配置git
  首先在本地打开 git Bash 键入命令
  ```
  ssh key: ssh-keygen -t rsa -C "your_email@your_email.com"
  ```
  ,邮箱为gitghub上自己的邮箱, 之后需要要求确认路径和输入密码, 可以使用默认一直回车。成功之后会在~/下生成.ssh文件夹, 打开id_rsa.pub, 复制里面的key, 回到github, 进入settings, 选择新建一个SSH key。在git Bash 下输入命令
  ```
    ssh -T git@github.com 
  ```
  验证是否成功.<br>
  如果是第一次会提示是否continue, 输入yes就会看到: 
  ```
    You've successfully authenticated, but GitHub does not provide shell access
  ```
  这就表示已经成功连接上github, 接下来就可以clone在github上面的仓库到本地,在此之前还需要设置username和email, 因为每次github commit都会记录他们。
  ```
    git config --global user.name "your name"
    git config --global user.email "your_email@your_email.com"
  ```
##### 三、clone到本地:
  ```
    git clone git@github.com:yourname/repository
  ```
    看到下面图片的效果说明clone成功！<br>
    ![](https://github.com/crasslandWolf/Front-end-engineers-learning-process/img/learn-github.png)
##### 四、提交
  修改完后先要add修改的文件(. 表示全部),然后填写commit, 最后再 push 到 github
  ```
    git add .
    git commit -m 'update'
    git push
  ```


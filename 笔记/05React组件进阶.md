## 组件的props
- 组件是封闭的，接受外部数据要通过props实现
- props作用就是接受传递给组件的数据
- 传递数据就是给组件标签添加属性
- 接受数据：函数组件通过参数props接受数据；类组件通过this.props接受数据

## props的特点
- 传递的数据写在标签中，字符串用双引号，其他类型用{ }包起来，甚至可以传递函数和JSX
- props是只读的，不能修改
- 在类组件中使用props如果写了constructor(),推荐把props作为参数传递给constructor()和super()

## 组件通讯  父-子
- 父组件提供要传递的state
- 给子组件添加属性，属性值就是state中的数据
- 子组件通过props接受父组件中传递的数据

## 组件通讯  子-父
思路：利用回调函数，父组件提供回调，子组件调用，将要传递的数据作为回调函数的参数
- 父组件定义回调函数
- 将函数作为子组件的属性值，子组件通过props拿到函数并调用
- 将子组件的数据作为参数传递给回调函数

## 组件通讯 兄弟
将共享状态提升到最近的公共父组件中，由公共组件管理这个状态，也就是状态提升
- 父组件提供共享的状态
- 父组件提供操作共享状态的方法
- 要通讯的子组件通过props 接受状态或操作状态的方法

## 组件通讯 嵌套多层  demo04
使用Context的作用就是跨组件传递数据，比如主题，语言等等
- 调用React.creatContext()创建Provider(提供数据)、Consumer(消费数据)两个组件。
- 使用Provider组件作为父节点,在Provider标签内添加value作为数据
- 调用Consumer组件接受数据

## props的children demo04
- 当组件标签中有子节点的时候，props就会有一个children属性
- children的值可以是任意值JSX 或者函数都可以

## props校验 demo04
对于组件来说props是外来的，组件不知道props是什么类型的数据，对props进行操作容易出错
- props 允许组件在创建的时候就制定props的类型格式等
- 作用是捕获使用组件时因为props导致的错误，给出提示，增加组件的健壮性
- 首先安装prop-types (npm i props-types)
- 建立规则，组件名 propTypes = {}
- 可以color: PropTypes.string.isRequired 代表必填
- 也可以特定结构的对象color: PropTypes.shape({})

## props的默认值 demo04
我们可以给props设置默认值。组件没接受其他值就会用默认值。组件名.defaultProps = {}
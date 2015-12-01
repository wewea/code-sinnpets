// 编译方法: babel --presets react src --out-dir build --watch

// 包含javascript表达式的jsx
var person = <Pserson name={window.isLoggedIn ? window.name : ''}/>;

// 子节点表达式
var content = <Container>{window.isLoggedIn ? <Nav /> : <Login />}</Container>;

// 注释
var node = (
	<Nav>
	 {/*一般注释*/}
	 <Person
	  /*
		 * 多行注释
		 */
		name={window.isLoggedIn ? window.name : ''} // 行尾注释
	 />
	 </Nav>
)



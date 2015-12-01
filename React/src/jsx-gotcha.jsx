/***
 * A JSX application.
 */

 // 在jsx文本插入HTML实体不会被转义, 显示: "First · Second"
/* <div>First &middot; Second</div> */



// 在jsx的表达式中插入HTML实体, 会被二次转义, 显示:'First &middot; Second'
/* <div>{'First &middot; Second'}</div> */



// 可以直接使用unicode character或者unicode编码
/* <div>{'First \u00b7 Second'}</div> */
/* <div>{'First '  + String.fromCharCode(183) + ' Second'}</div> */


// 直接使用原始HTML
<div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}}></div>

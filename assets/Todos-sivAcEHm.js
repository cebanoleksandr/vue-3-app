import{_ as r,o as i,c,a as t,n as v,t as T,F as x,r as $,b as a,d as u,w as h,v as b,e as k,f as g,g as y}from"./index-VfyUQIt8.js";const A={props:["todo"]},w={class:"px-5 py-1 todo-item"},L={class:"checkbox"},S=["checked"];function C(o,e,n,m,l,s){return i(),c("li",w,[t("label",L,[t("input",{type:"checkbox",onChange:e[0]||(e[0]=d=>n.todo.completed=!n.todo.completed),checked:n.todo.completed},null,40,S),t("span",{class:v(["ml-3",{done:n.todo.completed}])},T(n.todo.title),3)]),t("i",{class:"fa fa-close has-text-danger close",onClick:e[1]||(e[1]=d=>o.$emit("onRemove",n.todo.id))})])}const R=r(A,[["render",C]]),B={props:["todos"],components:{TodoItem:R},methods:{removeTodo(o){this.$emit("removeTodo",o)}}};function V(o,e,n,m,l,s){const d=a("TodoItem");return i(),c("div",null,[t("ul",null,[(i(!0),c(x,null,$(n.todos,_=>(i(),u(d,{todo:_,onOnRemove:s.removeTodo},null,8,["todo","onOnRemove"]))),256))])])}const D=r(B,[["render",V]]),I={data(){return{title:""}},methods:{onSubmit(){if(!this.title.trim())return;const o={title:this.title,id:+new Date,completed:!1};this.$emit("addTodo",o),this.title=""}}},N={class:"field is-grouped search-container mb-3"},j={class:"control is-expanded"};function z(o,e,n,m,l,s){return i(),c("div",N,[t("p",j,[h(t("input",{class:"input",type:"text","onUpdate:modelValue":e[0]||(e[0]=d=>l.title=d),placeholder:"New Todo...",onKeypress:e[1]||(e[1]=k((...d)=>s.onSubmit&&s.onSubmit(...d),["enter"]))},null,544),[[b,l.title]])]),t("button",{class:"button is-info",onClick:e[2]||(e[2]=(...d)=>s.onSubmit&&s.onSubmit(...d))}," Add Todo ")])}const F=r(I,[["render",z]]),K={},M={class:"has-text-centered"},O=t("div",{class:"lds-heart"},[t("div")],-1),U=[O];function E(o,e){return i(),c("div",M,U)}const P=r(K,[["render",E]]),q={name:"app",data(){return{todos:[],loading:!0,filter:"all"}},components:{TodoList:D,AddTodo:F,Loader:P},mounted(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then(o=>o.json()).then(o=>{this.todos=o,this.loading=!1})},computed:{filteredTodos(){switch(this.filter){case"completed":return this.todos.filter(o=>o.completed);case"active":return this.todos.filter(o=>!o.completed);default:return this.todos}}},methods:{removeTodo(o){this.todos=this.todos.filter(e=>e.id!==o)},addTodo(o){this.todos.push(o)}}},G={class:"container"},H={class:"select-container has-text-right mb-4"},J={class:"select is-normal"},Q=t("option",{value:"all"},"All",-1),W=t("option",{value:"completed"},"Completed",-1),X=t("option",{value:"active"},"Active",-1),Y=[Q,W,X],Z={key:2,class:"is-size-2 has-text-centered"};function oo(o,e,n,m,l,s){const d=a("AddTodo"),_=a("Loader"),p=a("TodoList");return i(),c("div",G,[g(d,{onAddTodo:s.addTodo},null,8,["onAddTodo"]),t("div",H,[t("div",J,[h(t("select",{"onUpdate:modelValue":e[0]||(e[0]=f=>l.filter=f)},Y,512),[[y,l.filter]])])]),l.loading?(i(),u(_,{key:0})):s.filteredTodos.length?(i(),u(p,{key:1,todos:s.filteredTodos,onRemoveTodo:s.removeTodo},null,8,["todos","onRemoveTodo"])):(i(),c("h2",Z," There are no todos yet. Please, add the first one "))])}const to=r(q,[["render",oo]]);export{to as default};

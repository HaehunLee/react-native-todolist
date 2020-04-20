/*
 * @types/index.d.ts 파일을 만들어서 프로젝트 전역으로 타입을 사용한다.
 */
interface ITodoListContext {
    todoList: Array<string>;
    addTodoList: (todo: string) => void;
    removeTodoList: (todo: string) => void;
}
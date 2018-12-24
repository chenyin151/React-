import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Input from '../../components/Input';
import List from '../../components/List';

class Todo extends React.Component {
    constructor(props, context) {
        super(props, context);
        // 使用它重写shouldComponentUpdate,在每次更新之前判断props和state，若果有变化
        // 则返回true，无变化则返回false
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            todos: []
        }
    }
    render() {
        return (
            <div>
                <Input submitFn={this.submitFn.bind(this)}></Input>
                <List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)} />
            </div>
        )
    }
    //  向todo列表增加一个数据
    submitFn(value) {
        const id = this.state.todos.length;
        this.setState({
            todos: this.state.todos.concat({ id: id, text: value })
        })
    }
    // 把要删除的项删除
    deleteFn(id) {
        let data = this.state.todos;
        this.setState({
            todos: data.filter(item => {
                console.log('item', item)
                if (item.id !== id) {
                    return item;
                }
            })
        })
    }
}
export default Todo;
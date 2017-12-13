import React, { PropTypes } from 'react';
import { Input } from 'antd';
import style from '../styles/auto-complete.less';

class AutoComplete extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            show: false, // 新增的下拉框显示控制开关
            displayValue: '',
            activeItemIndex: -1
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }
...
    handleChange (value) {
        this.setState({activeItemIndex: -1, displayValue: ''});
        // 原来的onValueChange改为了onChange以适配antd的getFieldDecorator
        this.props.onChange(value);
    }
...
    render () {
        const {show, displayValue, activeItemIndex} = this.state;
        const {value, options} = this.props;
        return (
            <div className={style.wrapper}>
                <Input
                    value={displayValue || value}
                    onChange={e => this.handleChange(e.target.value)}
                    onKeyDown={this.handleKeyDown}
                    onFocus={() => this.setState({show: true})}
                    onBlur={() => this.setState({show: false})}
                />
                {show && options.length > 0 && (
                    <ul className={style.options} onMouseLeave={this.handleLeave}>
                        {
                            options.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={index === activeItemIndex ? style.active : ''}
                                        onMouseEnter={() => this.handleEnter(index)}
                                        onClick={() => this.handleChange(getItemValue(item))}
                                    >
                                        {item.text || item}
                                    </li>
                                );
                            })
                        }
                    </ul>
                )}
            </div>
        );
    }
}

// 由于使用了antd的form.getFieldDecorator来包装组件
// 这里取消了原来props的isRequired约束以防止报错
AutoComplete.propTypes = {
    value: PropTypes.any,
    options: PropTypes.array,
    onChange: PropTypes.func // 原来的onValueChange改为了onChange以适配antd的getFieldDecorator
};

export default AutoComplete;

window.dom = {
    // create: function() {}
    // create(tagName) {
    //     return document.createElement(tagName)
    // }
    create(string) {
        // const container = document.createElement('div')
        // div里面是不能放td的，td只能出现在table或者tr元素里面
        //template是万能的创建方法
        const container = document.createElement("template")
        // container.innerHTML = string
        // return container.children[0]
        container.innerHTML = string.trim() //把字符串两边的空格给去掉
        // return container.children[0]
        return container.content.firstChild
    },
    //test, node2:<div>newDiv</div>，node2为新增节点
    //相当于在node后面的接口的前面插
    after(node, node2) {
        console.log('node.nextSibling', node.nextSibling)

        //把node2插到node的下一个节点的前面
        node.parentNode.insertBefore(node2, node.nextSibling) //在参考节点之前插入一个拥有指定父节点的子节点
    },
    before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    append(parent, node) {
        parent.appendChild(node)
    },
    //dom.wrap(div2,div3)
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)
    },
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {
        // node.innerHTML = ''
        const {
            childNodes
        } = node
        const array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },
    attr(node, name, value) { // 重载
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    text(node, string) { //适配
        console.log('innerText' in node)
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string
            } else {
                node.textContent = string
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }

    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            // dom.style(div,'color','red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                //dom.style(div,'color')
                return node.style[name]
            } else if (name instanceof Object) {
                //dom.style(div,{color:'red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
        // for(let key in object) {
        //     //key: border / color
        //     //node.style.border = ...
        //     //node.style.color = ...
        //     node.style[key] = object[key]
        // }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.parentNode.children).filter(n => n !== node)
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList,fn) {
        for(let i=0;i<nodeList.length;i++) {
            fn.call(null,nodeList[i])
        }
    },
    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for(i =0 ;i<list.length;i++) {
            if(list[i] === node) {
                break
            }
        }
        return i
    }
}

// window.dom.create = function() {};
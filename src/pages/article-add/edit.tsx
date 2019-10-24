import React from 'react'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export default function Edit () {
  let viewRef = React.useRef<HTMLDivElement>(null)
  let textareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(viewRef && viewRef.current) {
      viewRef.current.innerHTML = md.render(e.currentTarget.value)
    }
  }
  return (
    <section className="edit">
      <div className="leftbox box">
        <textarea placeholder="请输入文章内容，md格式" onChange={textareaChange}></textarea>
      </div>
      <div className="rightbox box" ref={viewRef}></div>
    </section>
  )
}

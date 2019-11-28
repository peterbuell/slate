/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../..'

export const input = (
  <editor>
    <block>
      one
      <inline>
        two<inline>three</inline>four
      </inline>
      five
    </block>
  </editor>
)

export const run = editor => {
  return Array.from(Editor.texts(editor, { at: [] }))
}

export const output = [
  [<text>one</text>, [0, 0]],
  [<text>two</text>, [0, 1, 0]],
  [<text>three</text>, [0, 1, 1, 0]],
  [<text>four</text>, [0, 1, 2]],
  [<text>five</text>, [0, 2]],
]
